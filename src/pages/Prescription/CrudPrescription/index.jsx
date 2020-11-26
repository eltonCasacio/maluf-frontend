import React, { useState } from "react";
import api from "../../../services/api";
import { Link } from "react-router-dom";

import "./crudPrescription.css";
import Login from "../../Login";

const CrudPrescription = ({ setTitle }) => {
  setTitle && setTitle("Prescrição");

  const [hasPermission, setHasPermission] = useState(false);

  const [name, setName] = useState("");

  const [velocidade, setVelocidade] = useState(0);
  const [velocidadeMin, setVelocidadeMin] = useState(0);
  const [velocidadeMax, setVelocidadeMax] = useState(0);

  const [carga, setCarga] = useState(0);
  const [cargaMin, setCargaMin] = useState(0);
  const [cargaMax, setCargaMax] = useState(0);

  const [temperature1, setTemperature1] = useState(0);
  const [temperature1Min, setTemperature1Min] = useState(0);
  const [temperature1Max, setTemperature1Max] = useState(0);

  const [temperature2, setTemperature2] = useState(0);
  const [temperature2Min, setTemperature2Min] = useState(0);
  const [temperature2Max, setTemperature2Max] = useState(0);

  const saveDescription = () => {
    api
      .post("description", {
        velocidade,
        velocidadeMin,
        velocidadeMax,
        carga,
        cargaMin,
        cargaMax,
        temperature1,
        temperature1Min,
        temperature1Max,
        temperature2,
        temperature2Min,
        temperature2Max,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {!hasPermission && (
        <Login cbPermission={setHasPermission}>Prescription</Login>
      )}
      {hasPermission && (
        <form className="form-prescription">
          <div className="form-row">
            <div className="form-group col-sm-10 col-md-3">
              <select
                id="inputEstado"
                className="form-control"
                onChange={(e) => setName(e)}
              >
                <option selected>Escolher receita...</option>
                <option>Receita 1</option>
                <option>Receita 2</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-sm-10 col-md-2">
              <label for="inputVelocity">Velocidade</label>
              <input
                type="number"
                className="form-control"
                id="inputVelocity"
                placeholder="0"
                onChange={(e) => setVelocidade(e.target.value)}
              ></input>
            </div>
            <div className="form-group col-sm-5 col-md-2">
              <label for="inputVelocityMin">Min</label>
              <input
                type="number"
                className="form-control"
                id="inputVelocityMin"
                placeholder="0"
                onChange={(e) => setVelocidadeMin(e.target.value)}
              ></input>
            </div>
            <div className="form-group col-sm-5 col-md-2">
              <label for="inputVelocityMax">Max</label>
              <input
                type="number"
                className="form-control"
                id="inputVelocityMax"
                placeholder="0"
                onChange={(e) => setVelocidadeMax(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group  col-sm-10 col-md-2">
              <label for="inputCarga">Carga</label>
              <input
                type="number"
                className="form-control"
                id="inputCarga"
                placeholder="0"
                onChange={(e) => setCarga(e.target.value)}
              ></input>
            </div>

            <div className="form-group  col-sm-5 col-md-2">
              <label for="inputCargaMin">Min</label>
              <input
                type="number"
                className="form-control"
                id="inputCargaMin"
                placeholder="0"
                onChange={(e) => setCargaMin(e.target.value)}
              ></input>
            </div>

            <div className="form-group  col-sm-5 col-md-2">
              <label for="inputCargaMax">Max</label>
              <input
                type="number"
                className="form-control"
                id="inputCargaMax"
                placeholder="0"
                onChange={(e) => setCargaMax(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group  col-sm-10  col-md-2">
              <label for="inputTemperature1">Temperatura 1</label>
              <input
                type="number"
                className="form-control"
                id="inputTemperature1"
                placeholder="0"
                onChange={(e) => setTemperature1(e.target.value)}
              ></input>
            </div>

            <div className="form-group  col-sm-5 col-md-2">
              <label for="inputTemperature1Min">Min</label>
              <input
                type="number"
                className="form-control"
                id="inputTemperature1Min"
                placeholder="0"
                onChange={(e) => setTemperature1Min(e.target.value)}
              ></input>
            </div>

            <div className="form-group  col-sm-5 col-md-2">
              <label for="inputTemperature1Max">Max</label>
              <input
                type="number"
                className="form-control"
                id="inputTemperature1Max"
                placeholder="0"
                onChange={(e) => setTemperature1Max(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group  col-sm-10  col-md-2">
              <label for="inputTemperature2">Temperatura 2</label>
              <input
                type="number"
                className="form-control"
                id="inputTemperature2"
                placeholder="0"
                onChange={(e) => setTemperature2(e.target.value)}
              ></input>
            </div>

            <div className="form-group  col-sm-5 col-md-2">
              <label for="inputTemperature2Min">Min</label>
              <input
                type="number"
                className="form-control"
                id="inputTemperature2Min"
                placeholder="0"
                onChange={(e) => setTemperature2Min(e.target.value)}
              ></input>
            </div>

            <div className="form-group  col-sm-5 col-md-2">
              <label for="inputTemperature2Max">Max</label>
              <input
                type="number"
                className="form-control"
                id="inputTemperature2Max"
                placeholder="0"
                onChange={(e) => setTemperature2Max(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="row">
            <Link className="btn btn-outline-info" to="/prescription">
              Cancelar
            </Link>

            <button
              className="btn btn-outline-danger col-2"
              onClick={saveDescription}
            >
              Excluir
            </button>

            <button
              className="btn btn-outline-success col-2"
              onClick={saveDescription}
            >
              Enviar
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default CrudPrescription;
