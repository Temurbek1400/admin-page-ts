import { Grid } from "@mui/material";
import React from "react";
import AnalystsChart from "./../components/analysts/analysts-chart";
import AnalystsBestDrivers from "./../components/analysts/analysts-best-drivers";

const Analysts: React.FC = () => {
   return (
      <Grid container spacing={4} sx={{ backgroundColor: "#E5E5E5" }}>
         <Grid lg={6} item>
            <AnalystsChart />
         </Grid>
         <Grid lg={6} item>
            <AnalystsBestDrivers />
         </Grid>
      </Grid>
   );
};

export default Analysts;
