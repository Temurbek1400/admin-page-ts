import Chart from "../chart/chart";
import { ChartWrapper } from "./analysts.styles.d";
import Grid from "@mui/material/Grid";
import charts from "../../data/charts";

const AnalystsChart = () => {
   return (
      <ChartWrapper>
         <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item lg={5}>
               <Chart datasets={charts[0].datasets} labels={charts[0].labels} />
            </Grid>
         </Grid>
         {charts.map((data, index) => {
            if (index === 0) {
               return null;
            }
            if (index % 2 !== 0 && charts[index + 1]) {
               return (
                  <Grid
                     container
                     sx={{
                        display: "flex",
                        justifyContent: "center",
                     }}
                     spacing={1}
                  >
                     <Grid item lg={4}>
                        <Chart datasets={data.datasets} labels={data.labels} />
                     </Grid>
                     <Grid item lg={4}>
                        <Chart
                           datasets={charts[index + 1].datasets}
                           labels={charts[index + 1].labels}
                        />
                     </Grid>
                  </Grid>
               );
            } else return null;
         })}
      </ChartWrapper>
   );
};

export default AnalystsChart;
