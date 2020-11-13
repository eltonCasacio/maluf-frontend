import React from "react";

import ChartCarga from "./Carga";
import ChartTemperature1 from "./Temperature1";
import ChartVelocity from "./Velocity";

import Footer from "../../components/Footer";

import "./styles.css";

const Charts = () => {
  return (
    <div className="charts-container">
      <div className="row">
        <div className="chart">
          <ChartTemperature1 />
        </div>
      </div>

      <div className="row">
        <div className="chart col-12 col-sm-6">
          <ChartCarga />
        </div>
        <div className="chart col-12 col-sm-6">
          <ChartVelocity />
        </div>
      </div>

      <div className="row main-footer">
        <Footer text="Syntro Automação Industrial" />
      </div>
    </div>
  );
};

export default Charts;
