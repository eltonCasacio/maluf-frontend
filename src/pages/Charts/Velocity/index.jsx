import React, { useEffect } from "react";
import Chart from "chart.js";

const ChartVelocity = () => {
  useEffect(() => {
    let ctx = document.getElementById("chart-velocidade");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["0", "1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "VELOCIDADE",
            data: [12, 19, 3, 5, 2, 3],
            borderColor: ["#2a1683"],
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
      <canvas id="chart-velocidade" width="500" height="200"></canvas>
    </div>
  );
};

export default ChartVelocity;
