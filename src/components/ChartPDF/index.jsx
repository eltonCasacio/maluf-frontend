/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Chart from "chart.js";

const ChartPDF = ({ idChart, labels, data, color, title, setImage }) => {
  async function setChart() {
    let canvs = document.getElementById(idChart);

    let newChart = new Chart(canvs, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: title,
            data: data,
            borderColor: [color],
            borderWidth: 0,
            fill: false,
            radius: 0,
            // lineTension: 0,
          },
        ],
      },
      options: {
        animation: {
          onComplete: function (animation) {
            setImage && setImage(newChart.toBase64Image());
          },
        },
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
                display: true,
              },
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      },
    });
  }

  useEffect(() => {
    setChart();
  }, [labels]);

  return (
    <>
      <canvas id={idChart}></canvas>
    </>
  );
};

export default ChartPDF;
