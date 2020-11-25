import "./home.css";

import React, { useState, useEffect } from "react";
import api from "../../services/api";

import BoxInfo from "../../components/BoxInfo";
import TableInfo from "../../components/TableInfo";
import AlarmFault from "../../components/AlarmFault";

const Home = ({ setTitle }) => {
  setTitle && setTitle("Home");

  const [velocidade, setVelocidade] = useState('--');
  const [temperature1, setTemperature1] = useState('--');
  const [temperature2, setTemperature2] = useState('--');
  const [carga, setCarga] = useState('--');

  const initProps = () => {
    setInterval(() => {
      api
        .get("realtimeData")
        .then((response) => {
          setVelocidade(response.data.velocidade);
          setTemperature1(response.data.temperatura1);
          setTemperature2(response.data.temperatura2);
          setCarga(response.data.carga);
        })
        .catch((err) => console.log("Erro na função initProps", err));
    }, 1000);
  };

  useEffect(() => {
    initProps();
  }, []);

  return (
    <div className="home">
      <div className="row">
        <div className="col-6 col-sm-12 col-md-3 mb-3">
          <BoxInfo
            title="Velocidade"
            value={velocidade}
            max={399}
            min={300}
            tolerancia={5}
          />
        </div>

        <div className="col-6 col-sm-12 col-md-3 mb-3">
          <BoxInfo
            title="Temperatura 1"
            value={temperature1}
            max={99}
            min={0}
            tolerancia={5}
          />
        </div>

        <div className="col-6 col-sm-12 col-md-3 mb-3">
          <BoxInfo
            title="Temperatura 2"
            value={temperature2}
            max={199}
            min={100}
            tolerancia={3}
          />
        </div>

        <div className="col-6 col-sm-12 col-md-3 mb-3">
          <BoxInfo
            title="Carga"
            value={carga}
            max={299}
            min={200}
            tolerancia={10}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <TableInfo
            velocidade={velocidade}
            temperature1={temperature1}
            temperature2={temperature2}
            carga={carga}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <AlarmFault />
        </div>
      </div>
    </div>
  );
};

export default Home;
