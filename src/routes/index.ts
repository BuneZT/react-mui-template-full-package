import { useRoutes } from "react-router-dom";

// project import
import AuthorizationRoutes from "./authorizationRoutes";
import MainRoutes from "./mainRoutes";

// ==============================|| ROUTING RENDER ||============================== //

export default function Routes() {
  return useRoutes([MainRoutes, AuthorizationRoutes]);
}
