import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { DrawerHeader } from "./navbar.styles";
import AppBar from "./app-bar/app-bar";
import Sidebar from "./sidebar/sidebar";
import { INavbar } from "./navbar.types";

const Navbar: React.FC<INavbar> = ({ children }) => {
   const [open, setOpen] = React.useState(false);

   const handleDrawerOpen = () => {
      setOpen(true);
   };

   const handleDrawerClose = () => {
      setOpen(false);
   };

   return (
      <Box sx={{ display: "flex" }}>
         <CssBaseline />
         <AppBar handleDrawerOpen={handleDrawerOpen} open={open} />
         <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            {children}
         </Box>
      </Box>
   );
};

export default Navbar;
