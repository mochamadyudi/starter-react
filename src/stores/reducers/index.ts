import {combineReducers} from "redux";
import holder from "./holder";
import auth from "./auth";
import theme from "./theme";
import {BaseState, HolderStateMap, StateAuth} from "@/common/types/redux";
import {ITheme} from "@common/types";

const reducers = combineReducers({
  holder,
  auth,
  theme,
});

export interface DefaultRootState {
  auth: BaseState<StateAuth>;
  holder: HolderStateMap;
  theme: ITheme;
}

export default reducers;
