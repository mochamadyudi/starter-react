// @ts-ignore
import createIndexedDBStorage from "redux-persist-indexeddb-storage";

export default function openStorage(name: string, path: string) {
  return createIndexedDBStorage(name, path);
}
