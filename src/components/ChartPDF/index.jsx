/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Chart from "chart.js";

const ChartPDF = ({ idChart, labels, data, color, title }) => {
  const [chart, setChart] = useState();

  useEffect(() => {
    let can = document.getElementById(idChart);

    setChart(
      new Chart(can, {
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
      })
    );

    const getImageChart = () => chart.toBase64Image();
  }, [labels]);

  return (
    <>
      <canvas id={idChart}></canvas>
    </>
  );
};

export default ChartPDF;
