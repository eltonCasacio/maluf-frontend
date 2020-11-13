import React, { useEffect } from "react";
import Chart from "chart.js";

const ChartVelocity = ({idChart}) => {
  useEffect(() => {
    let ctx = document.getElementById(idChart);

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["0", "1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "VELOCIDADE",
            data: [12, 19, 3, 5, 2, 3],
            borderColor: ["#c92508"],
            borderWidth: 0,
            fill: false,
            lineTension: 0,
            radius: 0
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
      <canvas id={idChart}></canvas>
    </>
  );
};

export default ChartVelocity;
