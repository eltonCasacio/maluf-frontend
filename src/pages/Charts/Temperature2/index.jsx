import React, { useEffect } from "react";
import Chart from "chart.js";

const ChartTemperature2 = () => {
  useEffect(() => {
    let ctx = document.getElementById("chart-temperatura2");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["0", "1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "TEMPERATURA2",
            data: [12, 19, 3, 5, 2, 3],
            borderColor: ["#36eb4e"],
            borderWidth: 0,
            fill: false,
            lineTension: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "#fff2",
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    });
  }, []);

  return (
    <>
      <canvas id="chart-temperatura2" />
    </>
  );
};

export default ChartTemperature2;
