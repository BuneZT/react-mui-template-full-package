import { Outlet } from "react-router-dom";
import Copyright from "./Copyright";

const AuthorizationContainer = () => (
  <>
    <Outlet />
    <Copyright />
  </>
);

export default AuthorizationContainer;
