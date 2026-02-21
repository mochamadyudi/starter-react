import {HolderKey, HolderState} from "@/common/types/redux/holder.ts";
import {useDispatch, useSelector} from "react-redux";
import {
	resetAllHolder,
	resetHolder,
	setHolder,
} from "@/stores/actions/holder.ts";

export interface UseHolderReturn<K extends HolderKey> {
	holder: HolderState<K>;
	actions: {
		set: (value: Partial<HolderState<K>>) => void;
		reset: () => void;
		resetAll: () => void;
	};
}

export default function useHolder<K extends HolderKey>(
	key: K,
	defaultValue?: Partial<HolderState<K>>,
): UseHolderReturn<K> {
	const dispatch = useDispatch();

	const holder = useSelector((state: any) => ({
		...state.holder,
		...defaultValue,
	})) as HolderState<K>;

	function set(value: Partial<HolderState<K>>) {
		dispatch(setHolder(key, value));
	}

	function reset() {
		dispatch(resetHolder(key));
	}

	function resetAll() {
		dispatch(resetAllHolder());
	}

	return {
		holder,
		actions: {
			set,
			reset,
			resetAll,
		},
	};
}
