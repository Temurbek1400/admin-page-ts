import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import ThemeProvider from "../utils/theme";

const Layout: React.FC = () => {
   return (
      <ThemeProvider>
         <Navbar>
            <Outlet />
         </Navbar>
      </ThemeProvider>
   );
};

export default Layout;
