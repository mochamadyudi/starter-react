import qs from "qs";
import axios, {
  AxiosError,
  AxiosRequestConfig,
  CanceledError,
  HttpStatusCode,
  InternalAxiosRequestConfig,
} from "axios";
import {APP_CONFIG, APP_HTTP_CONFIG} from "@/common/configs/app.config";

const pendingRequests = new Map<string, AbortController>();

/**
 * @description get a request key for identification request
 * @param config
 */
function getRequestKey(config: AxiosRequestConfig) {
  const {method, url, params, data} = config;
  return [method, url, JSON.stringify(params), JSON.stringify(data)].join("&");
}

const Interceptors = axios.create({
  withCredentials: APP_HTTP_CONFIG.FETCH_WITH_CREDENTIAL,
  timeout: APP_HTTP_CONFIG.FETCH_TIMEOUT,
  baseURL: APP_CONFIG.VITE_APP_IAM_HOST,
  params: {
    state: "default",
  },
  paramsSerializer: (param) => {
    return qs.stringify(param, {encode: true});
  },
});

//@ts-expect-error
Interceptors.isCancel = axios.isCancel;

Interceptors.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    config.headers.set("x-state", APP_CONFIG.VITE_API_STATE);
    const key = getRequestKey(config);
    if (localStorage.getItem("locale")) {
      config.headers.set("Accept-Language", localStorage.getItem("locale"));
    }

    const controller = new AbortController();
    config.signal = controller.signal;

    pendingRequests.set(key, controller);
    return config;
  },
);

Interceptors.interceptors.response.use(
  (response) => {
    const key = getRequestKey(response.config);
    pendingRequests.delete(key);
    return response;
  },
  async (error) => {
    if (error.code === AxiosError.ECONNABORTED) {
      return new Promise((_, reject) => {
        reject({...error});
      });
    }
    /**
     * @description Cancellation error
     */
    if (
      error.name === CanceledError ||
      error.code === AxiosError.ERR_CANCELED
    ) {
      return new Promise((_, reject) => {
        reject({...error});
      });
    }

    // delete pending request
    if (error.config) {
      const key = getRequestKey(error.config);
      pendingRequests.delete(key);
    }

    if (error.response.status === HttpStatusCode.Ok) {
      return new Promise((_, reject) => {
        reject({...error});
      });
    }

    return new Promise((_) => {
      _({...error?.response});
    });
  },
);

export default Interceptors;
