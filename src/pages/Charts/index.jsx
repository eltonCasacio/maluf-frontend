import React from "react";

import ChartCarga from "../../components/ChartCarga";
import ChartTemperature1 from "../../components/ChartTemperature";
import ChartVelocity from "../../components/CharVelocity";

import "./charts.css";

const Charts = ({ setTitle }) => {
  setTitle && setTitle("Gráficos");

  return (
    <div className="charts-container">
      <div className="row">
        <div className="chart">
          <ChartTemperature1 idChart="chart-chartTemperature" />
        </div>
      </div>

      <div className="row">
        <div className="chart col-12 col-sm-6">
          <ChartCarga idChart="chart-chartCarga" />
        </div>
        <div className="chart col-12 col-sm-6">
          <ChartVelocity idChart="chart-chartVelocity" />
        </div>
      </div>
    </div>
  );
};

export default Charts;
