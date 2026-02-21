import {ITheme} from "@common/types";
import {ReduxAction} from "@common/types/redux";
import {RESET_THEME, SET_THEME} from "@state/constants/theme.ts";

export function onSetTheme<T extends Partial<ITheme>>(
  payload: T,
): ReduxAction<T> {
  return {
    type: SET_THEME,
    payload,
  };
}

export function onResetTheme(): ReduxAction<null> {
  return {
    type: RESET_THEME,
    payload: null,
  };
}
