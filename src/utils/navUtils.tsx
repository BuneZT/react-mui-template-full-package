import NavItem from "../interfaces/NavItem";
import PeopleIcon from "@mui/icons-material/People";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import TimerIcon from "@mui/icons-material/Timer";
import * as React from "react";

export const navItems: NavItem[] = [
  {
    name: "Panel",
    children: [
      {
        name: "Klienci",
        icon: <PeopleIcon />,
        url: "clients",
      },
      { name: "Spedycje", icon: <DnsRoundedIcon />, url: "shippings" },
    ],
  },
  {
    name: "Autoryzacja",
    children: [
      {
        name: "Logowanie",
        icon: <SettingsIcon />,
        url: "login",
      },
      { name: "Rejestracja", icon: <TimerIcon />, url: "register" },
    ],
  },
];

export const getRoutes = (): (NavItem | undefined)[] =>
  navItems.flatMap((nav) => nav.children);
