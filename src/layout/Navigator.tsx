import * as React from "react";
import { forwardRef, Ref } from "react";
import Divider from "@mui/material/Divider";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../utils/navUtils";

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function Navigator(props: DrawerProps) {
  const { ...other } = props;
  const location = useLocation();

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >

          React MUI template
        </ListItem>
        <ListItem
          {...{
            component: forwardRef((props, ref) => (
              <Link
                ref={ref as Ref<HTMLAnchorElement>}
                {...props}
                to="/"
                target="_self"
              />
            )),
          }}
          sx={{ ...item, ...itemCategory }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
        {navItems.map(({ name, children }) => (
          <Box key={name} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{name}</ListItemText>
            </ListItem>
            {children?.map(({ name: childName, icon, url }) => {
              return (
                <ListItem disablePadding key={childName}>
                  <ListItemButton
                    {...{
                      component: forwardRef((props, ref) => (
                        <Link
                          ref={ref as Ref<HTMLAnchorElement>}
                          {...props}
                          to={url || ""}
                          target="_self"
                        />
                      )),
                    }}
                    selected={location.pathname === `/${url}`}
                    sx={item}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childName}</ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
