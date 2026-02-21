import {
	strFromU8,
	strToU8,
	unzlibSync as decompress,
	zlibSync as compress,
} from "fflate";

export default class Security {
	static compress(data: any) {
		const uint8Array = strToU8(JSON.stringify(data));
		const compressed = compress(uint8Array);
		return btoa(String.fromCharCode.apply(null, [...compressed]));
	}

	static decompress(value?: string | null) {
		if (!value) {
			return null;
		}
		if (!value.length) {
			return null;
		}

		try {
			const binary = atob(value);
			const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
			const decoded = decompress(bytes);
			if (!decoded) {
				return null;
			}
			return JSON.parse(strFromU8(decoded));
		} catch {
			return null;
		}
	}
}
