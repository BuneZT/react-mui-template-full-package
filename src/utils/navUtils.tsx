import NavItem from "../interfaces/NavItem";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import TimerIcon from "@mui/icons-material/Timer";
import * as React from "react";

export const navItems: NavItem[] = [
  {
    name: "Dashboard",
    children: [
      {
        name: "Clients",
        icon: <PeopleIcon />,
        url: "clients",
      },
    ],
  },
  {
    name: "Authorization",
    children: [
      {
        name: "Login",
        icon: <SettingsIcon />,
        url: "login",
      },
      { name: "Register", icon: <TimerIcon />, url: "register" },
    ],
  },
];

export const getRoutes = (): (NavItem | undefined)[] =>
  navItems.flatMap((nav) => nav.children);
