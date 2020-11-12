import React, { useEffect, useState } from "react";
import Chart from "chart.js";

import "./chart.css";
const ChartCarga = () => {
  const [windowWidth, setWindowWidth] = useState(800);
  const [windowHeight, setWindowHeight] = useState(300);

  function resize() {
    window.addEventListener("resize", function () {
      if (window.innerWidth <= 880) {
        setWindowHeight(400);
      }
    });
  }

  //será chamado no start desse componente
  useEffect(() => {
    let ctx = document.getElementById("chart-carga")

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

    resize();
  }, []);

  return (
    <div className="chart-carga-container">
      <canvas
        id="chart-carga"
        width={windowWidth}
        height={windowHeight}
      ></canvas>
    </div>
  );
};

export default ChartCarga;
