import { lazy } from "react";

// project import
import AuthorizationContainer from "../layout/AuthorizationContainer";
import Loadable from "../components/Loadable";

const Login = Loadable(lazy(() => import("../pages/authorization/Login")));
const Register = Loadable(
  lazy(() => import("../pages/authorization/Register"))
);

// ==============================|| AUTH ROUTING ||============================== //

const AuthorizationRoutes = {
  path: "/",
  element: <AuthorizationContainer />,
  children: [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ],
};

export default AuthorizationRoutes;
