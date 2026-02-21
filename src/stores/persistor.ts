import {createTransform} from "redux-persist";
import Security from "@/common/utils/security";
//@ts-ignore
import createIndexedDBStorage from "redux-persist-indexeddb-storage";

export const indexedDBStorage = createIndexedDBStorage("TaxNgitung", "root");

const encryptTransform = createTransform(
	// Transform the state on its way to being serialized and persisted
	(inboundState: string) => {
		return Security.compress(inboundState); // Security.encoding(inboundState)
	},
	// Transform the state after it is rehydrated
	(outboundState) => {
		return Security.decompress(outboundState);
	},
	{whitelist: ["auth", "theme"]},
);

export const persistConfig = {
	key: "@state",
	storage: indexedDBStorage,
	version: 1,
	keyPrefix: "IAM",
	serialize: true,
	debug: true,
	blacklist: ["auth"],
	transforms: [encryptTransform],
};
