import React, { useEffect } from "react";
import Chart from "chart.js";

const ChartTemperature = ({ idChart }) => {
  useEffect(() => {
    let ctx = document.getElementById(idChart);

    const newChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["0", "1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "TEMPERATURA1",
            data: [12, 19, 3, 5, 2, 3],
            borderColor: ["#36eb4e"],
            borderWidth: 0,
            fill: false,
            lineTension: 0,
          },
          {
            label: "TEMPERATURA2",
            data: [15, 29, 13, 7, 5, 1],
            borderColor: ["#bbb3c7"],
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

  return <canvas id={idChart} />;
};

export default ChartTemperature;
