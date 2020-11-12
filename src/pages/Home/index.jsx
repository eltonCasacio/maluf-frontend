import React from "react";
import "./home.css";

import BoxInfo from "../../components/BoxInfo";
import TableInfo from "../../components/TableInfo";
import AlarmFault from "../../components/AlarmFault";

const Home = () => {

  return (
    <div className="home">
      <div className="section-boxinfo">
        <BoxInfo title="Velocidade" value={70} max={75} min={65} />
        <BoxInfo title="Temperatura 1" value={39} max={50} min={30} />
        <BoxInfo title="Temperatura 2" value={40} max={40} min={25} />
        <BoxInfo title="Carga" value={100} max={150} min={80} />
      </div>

      <div className="section-tabela">
        <TableInfo />
      </div>

      <div className="section-alarm-fault">
        <AlarmFault />
      </div>
    </div>
  );
};

export default Home;
