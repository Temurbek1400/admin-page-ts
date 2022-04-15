import Chart from "../chart/chart";
import { ChartWrapper } from "./analysts.styles.d";
import Grid from "@mui/material/Grid";

const data = {
   labels: ["Red", "Blue"],
   datasets: [
      {
         label: "# of Votes",
         data: [4, 12],
         backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
         ],
         borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
         ],
         borderWidth: 6,
      },
   ],
};

const AnalystsChart = () => {
   return (
      <ChartWrapper>
         <Grid item lg={7}>
            <Chart datasets={data.datasets} labels={data.labels} />
         </Grid>
         <Grid container>
            <Grid item lg={5}>
               <Chart datasets={data.datasets} labels={data.labels} />
            </Grid>
            <Grid item lg={5}>
               <Chart datasets={data.datasets} labels={data.labels} />
            </Grid>
         </Grid>
         <Grid container>
            <Grid item lg={5}>
               <Chart datasets={data.datasets} labels={data.labels} />
            </Grid>
            <Grid item lg={5}>
               <Chart datasets={data.datasets} labels={data.labels} />
            </Grid>
         </Grid>
         <Grid container>
            <Grid item lg={5}>
               <Chart datasets={data.datasets} labels={data.labels} />
            </Grid>
         </Grid>
      </ChartWrapper>
   );
};

export default AnalystsChart;
