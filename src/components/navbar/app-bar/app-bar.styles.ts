import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { drawerWidth } from "./../navbar.styles";
interface AppBarProps extends MuiAppBarProps {
   open?: boolean;
}

export const DrawerHeader = styled("div")(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   justifyContent: "flex-end",
   padding: theme.spacing(0, 1),
   // necessary for content to be below app bar
   ...theme.mixins.toolbar,
}));

export const AppBarMui = styled(MuiAppBar, {
   shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
   zIndex: theme.zIndex.drawer + 1,
   transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   }),
}));
