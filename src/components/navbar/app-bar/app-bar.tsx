import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { AppBarMui } from "./app-bar.styles";
import { IAppBar } from "./../navbar.types";

const AppBar = ({ handleDrawerOpen, open }: IAppBar) => {
   return (
      <AppBarMui position="fixed" open={open}>
         <Toolbar>
            <IconButton
               color="inherit"
               aria-label="open drawer"
               onClick={handleDrawerOpen}
               edge="start"
               sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
               }}
            >
               <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
               Mini variant drawer
            </Typography>
         </Toolbar>
      </AppBarMui>
   );
};

export default AppBar;
