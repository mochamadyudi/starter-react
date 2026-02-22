import {ITheme} from "@common/types";
import {ReduxAction} from "@common/types/redux";
import {APP_THEME, APP_THEME_TOKENS} from "@common/configs/theme.config.ts";
import {SET_THEME} from "@state/constants/theme.ts";
import {applyCustomVars} from "@common/utils/theme.util.ts";
import {REHYDRATE} from "redux-persist/es/constants";

const initialState: ITheme = {
  ...APP_THEME,
};

export default function (
  state: ITheme = initialState,
  action: ReduxAction,
): ITheme {
  switch (action.type) {
    case REHYDRATE:
      applyCustomVars(action?.payload?.theme ?? state);
      return {
        ...state,
        ...action?.payload?.theme,
      };
    case SET_THEME:
      if ("type" in action?.payload) {
        if (action?.payload?.type === "compact") {
          Object.assign(action.payload, {
            ...APP_THEME_TOKENS.compact,
          });
        } else {
          Object.assign(action.payload, {
            ...APP_THEME_TOKENS.default,
          });
        }
      }
      applyCustomVars(action.payload);

      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
