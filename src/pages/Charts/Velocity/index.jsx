import React, { useEffect } from "react";
import Chart from "chart.js";

import "./chart.css";

const ChartVelocity = () => {
  useEffect(() => {
    let ctx = document.getElementById("chart-velocidade");

    ctx.width = 800;
    ctx.height = 300;

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
    <div className="chart-velocidade-container">
      <canvas id="chart-velocidade"></canvas>
    </div>
  );
};

export default ChartVelocity;
