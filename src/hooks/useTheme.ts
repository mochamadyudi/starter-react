import {ITheme} from "@common/types";
import {useDispatch, useSelector} from "react-redux";
import {DefaultRootState} from "@state/reducers";
import {onResetTheme, onSetTheme} from "@state/actions/theme.ts";

interface UseThemeReturn {
  theme: ITheme;
  setTheme: (payload: Partial<ITheme>) => void;
  reset: () => void;
}

export default function useTheme(): UseThemeReturn {
  const dispatch = useDispatch();
  const theme: ITheme = useSelector((state: DefaultRootState) => state.theme);

  function setTheme(payload: Partial<ITheme>) {
    dispatch(onSetTheme(payload));
  }

  function reset() {
    dispatch(onResetTheme());
  }

  return {
    theme,
    setTheme,
    reset,
  };
}
