import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Drawer, DrawerHeader } from "./sidebar.styles";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { ISidebar } from "../navbar.types";
import sidebarList from "../../../data/sidebar";
import { Link } from "react-router-dom";

const Sidebar = ({ handleDrawerClose, open }: ISidebar) => {
   const theme = useTheme();
   return (
      <Drawer variant="permanent" open={open}>
         <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
               {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
               ) : (
                  <ChevronLeftIcon />
               )}
            </IconButton>
         </DrawerHeader>
         <Divider />
         <List>
            {sidebarList.map((text, index) => (
               <Link to={"/" + text.toLowerCase()}>
                  <ListItemButton
                     key={text}
                     sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                     }}
                  >
                     <ListItemIcon
                        sx={{
                           minWidth: 0,
                           mr: open ? 3 : "auto",
                           justifyContent: "center",
                        }}
                     >
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                     </ListItemIcon>
                     <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                        {text}
                     </ListItemText>
                  </ListItemButton>
               </Link>
            ))}
         </List>
         <Divider />
      </Drawer>
   );
};

export default Sidebar;
