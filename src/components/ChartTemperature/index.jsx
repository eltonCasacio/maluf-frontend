import React, { useEffect } from "react";
import Chart from "chart.js";

import api from "../../services/api";

const ChartTemperature = ({ idChart }) => {
  useEffect(() => {
    let ctx = document.getElementById(idChart);

    let chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: Array(30).fill(0),
        datasets: [
          {
            label: "TEMPERATURA1",
            data: Array(30).fill(25),
            borderColor: ["#36eb4e"],
            borderWidth: 0,
            fill: false,
            radius: 0,
            // lineTension: 0,
          },
          {
            label: "TEMPERATURA2",
            data: Array(30).fill(25),
            borderColor: ["#bbb3c7"],
            borderWidth: 0,
            fill: false,
            radius:0,
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

    let x = 0;

    setInterval(() => {
      api
        .get("realtimeData")
        .then((response) => {
          chart.data.labels.push((x += 1));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas id={idChart} />;
};

export default ChartTemperature;
