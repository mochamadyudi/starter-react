import Dictionary from "@/common/dictionary";

export type DictionaryKey = keyof typeof Dictionary;
export type DictionaryMessageKey<Language extends DictionaryKey> =
	keyof (typeof Dictionary)[Language]["messages"];
