/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Chart from "chart.js";

import api from "../../services/api";

const ChartVelocity = ({ idChart }) => {
  let labelsChart = [];
  let dataVelocidade = [];

  const initChart = () => {
    api
      .get("list-data")
      .then((response) => {
        response.data.reverse();
        response.data.map((item) => {
          labelsChart.push(new Date(item.dateTime).toLocaleTimeString());
          dataVelocidade.push(item.velocidade);
        });
      })
      .then(() => {
        let ctx = document.getElementById(idChart);

        let chart = new Chart(ctx, {
          type: "line",
          data: {
            labels: labelsChart,
            datasets: [
              {
                label: "VELOCIDADE",
                data: dataVelocidade,
                borderColor: ["#c92508"],
                borderWidth: 0,
                fill: false,
                // lineTension: 0,
                radius: 0,
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

        setInterval(() => {
          api
            .get("realtimeData")
            .then((response) => {
              chart.data.labels.push(
                new Date(response.data.dateTime).toLocaleTimeString()
              );
              chart.data.datasets[0].data.push(response.data.velocidade);

              chart.data.labels.shift();
              chart.data.datasets[0].data.shift();
              chart.update();
            })
            .catch((err) =>
              console.log("Erro na função initProps CHARTCARGA", err)
            );
        }, 1000);
      });
  };

  useEffect(() => {
    initChart();
  }, []);

  return (
    <>
      <canvas id={idChart}></canvas>
    </>
  );
};

export default ChartVelocity;
