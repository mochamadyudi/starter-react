import {BaseState, ReduxAction, StateAuth} from "@/common/types/redux";

const initialState: BaseState<StateAuth> = {
  isAuth: false,
  loading: false,
  user: null,
  token: null,
  collection: null,
};

export default function (
  state: BaseState<StateAuth> = initialState,
  action: ReduxAction,
): BaseState<StateAuth> {
  switch (action.type) {
    default:
      return state;
  }
}
