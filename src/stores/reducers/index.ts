import {combineReducers} from "redux";
import holder from "./holder";
import auth from "./auth";
import {BaseState, HolderStateMap, StateAuth} from "@/common/types/redux";

const reducers = combineReducers({
	holder,
	auth,
});

export interface DefaultRootState {
	auth: BaseState<StateAuth>;
	holder: HolderStateMap;
}

export default reducers;
