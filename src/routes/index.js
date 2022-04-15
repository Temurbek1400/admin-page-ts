import { Navigate, useRoutes } from "react-router-dom";
import {
   Analysts,
   Hr,
   Orders,
   Agents,
   Cars,
   Cities,
   Tariffs,
   Settings,
} from "../pages/index";
import Layout from "../pages/layout";

const routes = [
   {
      path: "/",
      element: <Layout />,
      children: [
         { path: "/", element: <Analysts /> },
         { path: "analysts", element: <Analysts /> },
         { path: "orders", element: <Orders /> },
         { path: "hr", element: <Hr /> },
         { path: "agents", element: <Agents /> },
         { path: "cars", element: <Cars /> },
         { path: "cities", element: <Cities /> },
         { path: "tariffs", element: <Tariffs /> },
         { path: "settings", element: <Settings /> },
         {
            path: "*",
            element: <Navigate to="/" replace />,
         },
      ],
   },
];

const Routes = () => useRoutes(routes);

export default Routes;
