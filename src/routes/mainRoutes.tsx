import { lazy } from "react";

import Loadable from "../components/Loadable";
import DashboardContainer from "../layout/DashboardContainer";

const Home = Loadable(lazy(() => import("../pages/dashboard/Home")));
const Client = Loadable(lazy(() => import("../pages/dashboard/Client")));
const Shipping = Loadable(lazy(() => import("../pages/dashboard/Shipping")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <DashboardContainer />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "clients",
      element: <Client />,
    },
    {
      path: "shippings",
      element: <Shipping />,
    },
  ],
};

export default MainRoutes;
