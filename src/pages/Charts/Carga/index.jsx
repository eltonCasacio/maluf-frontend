import React, { useEffect } from "react";
import Chart from "chart.js";

const ChartCarga = () => {
  //será chamado no start desse componente
  useEffect(() => {
    let ctx = document.getElementById("chart-carga");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["0", "1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "CARGA",
            data: [12, 19, 3, 5, 2, 3],
            borderColor: ["#fa9b03"],
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
      <canvas id="chart-carga" width="500" height="200"></canvas>
    </div>
  );
};

export default ChartCarga;
