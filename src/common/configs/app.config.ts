import {ITheme} from "@common/types";

const abortController = new AbortController();

export const APP_CONFIG: ImportMetaEnv = {
  VITE_API_URL: import.meta.env.VITE_API_URL,
  VITE_APP_URL: import.meta.env.VITE_APP_URL,
  VITE_APP_NAME: import.meta.env.VITE_APP_NAME,
  VITE_API_VERSION: import.meta.env.VITE_API_VERSION,
  BASE_URL: import.meta.env.BASE_URL,
  MODE: import.meta.env.MODE,
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
  SSR: import.meta.env.SSR,
};

export const APP_HTTP_CONFIG = {
  HOST: APP_CONFIG.VITE_API_URL,
  ABORT_CONTROLLER: abortController,
  FETCH_TIMEOUT: 5000,
  FETCH_WITH_CREDENTIAL: true,
};

export const APP_PATTERN = {
  storage: {
    name: "NgitungTax",
    path: "root",
    table: {
      persistKey: "@state",
      persist: "persist:@state",
    },
  },
};

export const APP_THEME = {
  colorPrimary: "#ff1818",
  // colorSecondary: "#722ed1",
  // colorSuccess: "#52c41a",
  // colorWarning: "#faad14",
  // colorDanger: "#ff4d4f",
  // colorInfo: "#389bf8",

  siderBgColor: "#ffffff",

  borderRadius: "6px",
  fontSizeBase: "14px",
} as const satisfies ITheme;
