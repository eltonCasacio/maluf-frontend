import React from "react";
import "./report.css";

import FormReport from "./FormReport";
import TableInfo from "../../components/TableInfo";
import Footer from "../../components/Footer";
import ChartTemperature from "../../components/ChartTemperature";
import CharVelocity from "../../components/CharVelocity";
import ChartCarga from "../../components/ChartCarga";

const Report = () => {
  return (
    <>
      <div className="col-12">
        <FormReport />
      </div>
      <div className="report">
        <div className="row"></div>

        <div className="row">
          <div className="col-12">
            <div className="chart-report">
              <ChartTemperature idChart="report-chartTemperature1" />
            </div>

            <div className="chart-report">
              <ChartTemperature idChart="report-chartTemperature2" />
            </div>

            <div className="chart-report">
              <CharVelocity idChart="report-chartVelocity" />
            </div>
            <div className="chart-report">
              <ChartCarga idChart="report-chartCarga" />
            </div>
          </div>
        </div>

        <div className="row report-table-info">
          <div className="col-12 ">
            <TableInfo />
          </div>
        </div>

        <div className="row main-footer">
          <Footer text="Syntro Automação Industrial" />
        </div>
      </div>
    </>
  );
};

export default Report;
