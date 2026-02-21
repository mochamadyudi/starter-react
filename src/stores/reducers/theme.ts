import {ITheme} from "@common/types";
import {ReduxAction} from "@common/types/redux";
import {APP_THEME} from "@common/configs/app.config";

const initialState: ITheme = {
  ...APP_THEME,
};

export default function (
  state: ITheme = initialState,
  action: ReduxAction,
): ITheme {
  switch (action.type) {
    default:
      return state;
  }
}
