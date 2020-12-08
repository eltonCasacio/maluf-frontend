import React, { Component } from "react";
import Table from "../../pages/Report/table";

import './printer.css'

class ComponentToPrint extends Component {
  render() {
    const { dados } = this.props;

    console.log("LABELS", dados.table);
    return (
      <div className="printer">
        <div className="printer-timers">
          <div className="col-12 col-md-6">
            <label>{dados.dateTimeStart}</label>
          </div>

          <div className="col-12 col-md-6">
            <label>{dados.dateTimeEnd}</label>
          </div>
        </div>

        <div>
          <div className="chart-printer">
            <img src={dados.imageCarga} alt="" />
          </div>

          <div className="chart-printer">
            <img src={dados.imageVelocidade} alt="" />
          </div>

          <div className="chart-printer">
            <img src={dados.imageTemperatura1} alt="" />
          </div>

          <div className="chart-printer">
            <img src={dados.imageTemperatura2} alt="" />
          </div>
        </div>

        <div className="col-12 m-5">
          <Table list={dados.table} />
        </div>
      </div>
    );
  }
}

export default ComponentToPrint;
