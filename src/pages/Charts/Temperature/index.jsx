import React, { useEffect, useState } from "react";
import Chart from "chart.js";

const ChartTemperature = () => {
  const [chartWidth, setChartWidth] = useState(1200);
  const [chartHeight, setChartHeight] = useState(300);

  useEffect(() => {
    let ctx = document.getElementById("chart-temperatura");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["0", "1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "TEMPERATURA",
            data: [12, 19, 3, 5, 2, 3],
            borderColor: ["#36eb4e"],
            borderWidth: 0,
            fill: false,
            lineTension: 0,
          },
          {
            label: "TEMPERATURA2",
            data: [21, 29, 13, 51, 12, 13],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 0,
            fill: false,
            lineTension: 0,
          },
        ],
      },
      options: {
        responsive: false,
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
    <div className="chart-temperature-container">
      <p>{chartHeight}</p>
      <canvas id="chart-temperatura" width={chartWidth} height={chartHeight} />
    </div>
  );
};

export default ChartTemperature;
