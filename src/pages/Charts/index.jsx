import React from "react";

import ChartCarga from "./Carga";
import ChartTemperature from "./Temperature";
import ChartVelocity from "./Velocity";

import "./styles.css";

const Charts = () => {
  return (
    <div className="charts-container">
      <div className="charts-temperature">
        <ChartTemperature />
      </div>
      <div className="charts-velocity-carga">
        <ChartCarga />
        <ChartVelocity />
      </div>
    </div>
  );
};

export default Charts;
