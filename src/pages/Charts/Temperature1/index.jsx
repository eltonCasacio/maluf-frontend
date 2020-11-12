import React, { useEffect } from "react";
import Chart from "chart.js";

const ChartTemperature = () => {
  useEffect(() => {
    let ctx = document.getElementById("chart-temperatura1");

    new Chart(ctx, {
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
        ],
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      },
    });
  }, []);

  return (
    <div class="container-fluid">
      <canvas id="chart-temperatura1" width="500" height="200" />
    </div>
  );
};

export default ChartTemperature;
