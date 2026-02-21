import {FC} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {DefaultRootState} from "@state/reducers";

interface AuthMiddlewareProps {
  guard: boolean;
  Component: any;

  [k: string]: any;
}

const AuthMiddleware: FC<AuthMiddlewareProps> = ({
  guard,
  Component,
  ...rest
}) => {
  const location = useLocation();
  const auth = useSelector((state: DefaultRootState) => state.auth);

  if (guard && auth.loading) {
    return <p>loading...</p>;
  }

  if (guard && !auth.loading && !auth.isAuth) {
    return <Navigate to={`/auth/login?redirect=${location.pathname}`} />;
  }

  return <Component {...rest} />;
};

export default AuthMiddleware;
