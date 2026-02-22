import {createTransform} from "redux-persist";
import Security from "@/common/utils/security";
import openStorage from "@common/utils/storage";
import {APP_PATTERN} from "@common/configs/app.config.ts";

export const indexedDBStorage = openStorage(
  APP_PATTERN.storage.name,
  APP_PATTERN.storage.path,
);

const encryptTransform = createTransform(
  (inboundState: string) => {
    return Security.compress(inboundState);
  },
  (outboundState) => {
    return Security.decompress(outboundState);
  },
  {whitelist: ["theme", "holder"]},
);

export const persistConfig = {
  key: APP_PATTERN.storage.table.persistKey,
  storage: indexedDBStorage,
  version: 1,
  serialize: true,
  debug: true,
  blacklist: ["auth"],
  transforms: [encryptTransform],
};
