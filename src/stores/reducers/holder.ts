import {ReduxAction} from "@/common/types/redux";
import {HolderStateMap} from "@/common/types/redux/holder.ts";

const initialState: HolderStateMap = {
	"global:confirm": {
		open: false,
		title: undefined,
		message: undefined,
		label: undefined,
		confirmLabel: undefined,
		severity: undefined,
	},
	"global:cancel": {
		open: false,
		onClose: () => {},
	},
	"global:toast": {
		open: false,
		onClose: () => {},
		message: undefined,
		severity: undefined,
		duration: undefined,
		position: undefined,
	},
	"global:notification": {
		open: false,
		onClose: () => {},
		title: undefined,
		message: undefined,
		unreadCount: undefined,
	},
	"global:loading": {
		active: false,
		message: undefined,
		overlay: undefined,
	},
	"global:modal": {
		open: false,
		onClose: () => {},
		title: undefined,
		modalProps: undefined,
		closable: false,
	},
};

export default function (
	state: HolderStateMap = initialState,
	action: ReduxAction,
): HolderStateMap {
	switch (action.type) {
		default:
			return state;
	}
}
