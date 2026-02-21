import {composeWithDevTools} from "@redux-devtools/extension";
import {applyMiddleware, compose, createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import {persistConfig} from "./persistor.ts";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// @ts-ignore
export const persistedReducer = persistReducer(persistConfig, reducers);

function configureStore(preloadedState?: any) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    composeWithDevTools ||
    compose;
  const store = createStore(
    persistedReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSaga);

  if (typeof module !== "undefined" && module.hasOwnProperty("hot")) {
    //@ts-expect-error
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

const store = configureStore();
export const persistor = persistStore(store);
export default store;
