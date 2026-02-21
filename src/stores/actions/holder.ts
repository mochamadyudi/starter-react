import {HolderKey, HolderState, ReduxAction} from "@common/types/redux";
import {HOLDER} from "@state/constants/holder.ts";

type ActionOutput<K extends HolderKey> = ReduxAction<
	Partial<HolderState<K>> | any
>;

export function setHolder<K extends HolderKey>(
	key: K,
	payload: Partial<HolderState<K>>,
): ActionOutput<K> {
	return {
		type: HOLDER.SET_HOLDER,
		payload: {
			key,
			data: payload,
		},
	};
}

export function resetHolder<K extends HolderKey>(key: K): ActionOutput<K> {
	return {
		type: HOLDER.RESET,
		payload: {key},
	};
}

export function resetAllHolder<K extends HolderKey>(): ActionOutput<K> {
	return {
		type: HOLDER.RESET,
		payload: null,
	};
}
