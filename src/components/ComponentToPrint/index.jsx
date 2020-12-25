import React, { Component } from "react";
import Table from "../../pages/Report/table";

import "./printer.css";

class ComponentToPrint extends Component {
  render() {
    const { dados } = this.props;

    return (
      <div className="printer">
        <div className="printer-timers">
          <label>{dados.dateTimeStart}</label>
          <label>{dados.dateTimeEnd}</label>
        </div>

        <div>
          <img src={dados.imageCarga} alt="" />

          <img src={dados.imageVelocidade} alt="" />

          <img src={dados.imageTemperatura1} alt="" />

          <img src={dados.imageTemperatura2} alt="" />
        </div>

        <div className="col-12 m-5">
          <Table list={dados.table} />
        </div>
      </div>
    );
  }
}

export default ComponentToPrint;
