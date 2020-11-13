import React, { useState } from "react";
import "./home.css";

import BoxInfo from "../../components/BoxInfo";
import TableInfo from "../../components/TableInfo";
import AlarmFault from "../../components/AlarmFault";
import Footer from "../../components/Footer";

const Home = ({ setTitle }) => {
  setTitle && setTitle("Home");
  return (
    <div className="home">
      <div className="row">
        <div className="col-6 col-sm-6 col-md-3">
          <BoxInfo title="Velocidade" value={70} max={75} min={65} />
        </div>

        <div className="col-6 col-sm-6 col-md-3">
          <BoxInfo title="Temperatura 1" value={39} max={50} min={30} />
        </div>

        <div className="col-6 col-sm-6 col-md-3">
          <BoxInfo title="Temperatura 2" value={40} max={40} min={25} />
        </div>

        <div className="col-6 col-sm-6 col-md-3">
          <BoxInfo title="Carga" value={100} max={150} min={80} />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <TableInfo />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <AlarmFault />
        </div>
      </div>

      <div className="row main-footer">
        <Footer text="Syntro Automação Industrial" />
      </div>
    </div>
  );
};

export default Home;
