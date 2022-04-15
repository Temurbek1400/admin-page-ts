import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface IChart {
   labels: string[];
   datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number;
   }[];
}

export default function Chart(props: IChart) {
   return <Doughnut height={"100px"} width={"100px"} data={props} />;
}
