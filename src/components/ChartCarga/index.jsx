import React, { useEffect } from "react";
import Chart from "chart.js";

import api from "../../services/api";

const ChartCarga = ({ idChart }) => {
  useEffect(() => {
    let ctx = document.getElementById(idChart);

    let chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: Array(30).fill(0),
        datasets: [
          {
            label: "CARGA",
            data: Array(30).fill(250),
            borderColor: ["#fa9b03"],
            borderWidth: 0,
            fill: false,
            radius: 0,
            // lineTension: 0,
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
              ticks: {
                beginAtZero: false,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      },
    });

    let x = 0;

    setInterval(() => {
      api
        .get("realtimeData")
        .then((response) => {
          chart.data.labels.push(x++);
          chart.data.datasets[0].data.push(response.data.carga);

          chart.data.labels.shift();
          chart.data.datasets[0].data.shift();
          chart.update();
        })
        .catch((err) =>
          console.log("Erro na função initProps CHARTCARGA", err)
        );
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <canvas id={idChart}></canvas>
    </>
  );
};

export default ChartCarga;
