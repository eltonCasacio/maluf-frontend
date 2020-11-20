import React, { useEffect, useState } from "react";
import Chart from "chart.js";

// import api from "../../services/api";

const ChartPDF = ({ idChart, labels, data, color, title }) => {
  const [chart, setChart] = useState();

  useEffect(() => {
    let ctx = document.getElementById(idChart);

    setChart(
      new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: { title },
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <canvas id={idChart}></canvas>
    </>
  );
};

export default ChartPDF;
