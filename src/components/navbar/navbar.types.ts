import React from "react";

export interface INavbar {
   children?: React.ReactElement;
}

export interface IAppBar {
   handleDrawerOpen: () => void;
   open: boolean;
}

export interface ISidebar {
   handleDrawerClose: () => void;
   open: boolean;
}
