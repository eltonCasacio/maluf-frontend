import React from "react";

import ChartCarga from "./Carga";
import ChartTemperature1 from "./Temperature1";
import ChartTemperature2 from "./Temperature2";
import ChartVelocity from "./Velocity";

import "./styles.css";

const Charts = () => {
  return (
    <div className="charts-container">
      <div className=" row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <ChartTemperature1 />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <ChartTemperature2 />
        </div>
      </div>

      <div className=" row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <ChartCarga />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <ChartVelocity />
        </div>
      </div>
    </div>
  );
};

export default Charts;
