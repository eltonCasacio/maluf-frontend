/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import Chart from "chart.js";

import api from "../../services/api";

const ChartTemperature = ({ idChart }) => {
  let labelsChart = [];
  let dataTemp1 = [];
  let dataTemp2 = [];

  const initChart = async () => {
    api
      .get("list-data")
      .then((response) => {
        response.data.reverse();
        response.data.map((item) => {
          if (item.dateTime) {
            labelsChart.push(new Date(item.dateTime).toLocaleTimeString());
            dataTemp1.push(item.temperatura1);
            dataTemp2.push(item.temperatura2);
          }
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
                label: "TEMPERATURA1",
                data: dataTemp1,
                borderColor: ["#36eb4e"],
                borderWidth: 0,
                fill: false,
                radius: 0,
                // lineTension: 0,
              },
              {
                label: "TEMPERATURA2",
                data: dataTemp2,
                borderColor: ["#bbb3c7"],
                borderWidth: 0,
                fill: false,
                radius: 0,
                // lineTension: 0,
              },
            ],
          },
          options: {
            // responsive: false,
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
              chart.data.datasets[0].data.push(response.data.temperatura1);
              chart.data.datasets[1].data.push(response.data.temperatura2);

              chart.data.labels.shift();
              chart.data.datasets[0].data.shift();
              chart.data.datasets[1].data.shift();
              chart.update();
            })
            .catch((err) =>
              console.log("Erro na função initProps CHARTCARGA", err)
            );
        }, 1000);
      })
      .catch((err) =>
        console.log("Erro ao buscar dados dos graficos PAGE CHART", err)
      );
  };

  useEffect(() => {
    initChart();
  }, []);

  return <canvas id={idChart} />;
};

export default ChartTemperature;
