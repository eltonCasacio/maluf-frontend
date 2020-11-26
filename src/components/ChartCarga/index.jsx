/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import Chart from "chart.js";

import api from "../../services/api";

const ChartCarga = ({ idChart }) => {

  let labelsChart = [];
  let dataCarga = [];

  const initChart = () => {
    api.get("vector-chart")
    .then( response => {
      response.data.reverse()
      response.data.map(item => {
      labelsChart.push(new Date(item.created_at).toLocaleTimeString());
      dataCarga.push(item.carga);
      })
    })
    .then(() => {
      let ctx = document.getElementById(idChart);

      let chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: labelsChart,
          datasets: [
            {
              label: "CARGA",
              data: dataCarga,
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

      setInterval(() => {
        api
          .get("realtimeData")
          .then((response) => {
            chart.data.labels.push(new Date(response.data.dateTime).toLocaleTimeString());
            chart.data.datasets[0].data.push(response.data.carga);

            chart.data.labels.shift();
            chart.data.datasets[0].data.shift();
            chart.update();
          })
          .catch((err) =>
            console.log("Erro na função initProps CHARTCARGA", err)
          );
      }, 1000);
    })
  };


  useEffect(() => {
    initChart()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <canvas id={idChart}></canvas>
    </>
  );
};

export default ChartCarga;
