import React from "react";
import "./report.css";

import FormReport from "./FormReport";
import TableInfo from "../../components/TableInfo";

import ChartPDF from "../../components/ChartPDF";

const Report = ({ setTitle }) => {
  setTitle && setTitle("Relatório");
  return (
    <>
      <div className="report">
        <div className="col-12">
          <FormReport />
        </div>
        <div className="row"></div>

        <div className="row">
          <div className="col-12">
            <div className="chart-report">
              <ChartPDF idChart="report-ChartPDFTemperature1" />
            </div>

            <div className="chart-report">
              <ChartPDF idChart="report-ChartPDFTemperature2" />
            </div>

            <div className="chart-report">
              <ChartPDF idChart="report-ChartPDFVelocity" />
            </div>
            <div className="chart-report">
              <ChartPDF idChart="report-ChartPDFCarga" />
            </div>
          </div>
        </div>

        <div className="row report-table-info">
          <div className="col-12 ">
            <TableInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
