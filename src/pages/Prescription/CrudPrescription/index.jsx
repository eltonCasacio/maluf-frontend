import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import { Link } from "react-router-dom";

import "./crudPrescription.css";
import Login from "../../Login";
import Input from "../Input";

const CrudPrescription = ({ setTitle }) => {
  setTitle && setTitle("Enviar Receita");

  const [hasPermission, setHasPermission] = useState(false);
  const [prescription, setPrescription] = useState({});
  const [prescriptions, setPrescriptions] = useState([]);
  const [labelSend, setLabelSend] = useState("");

  const initPrescription = () => {
    api.get("receitas").then((response) => setPrescriptions(response.data));
  };

  const updatePrescription = (e) => {
    let res = prescriptions.filter((item) => item.nome === e.target.value);
    setPrescription(res[0]);
  };

  const sendDescription = () => {
    console.log(prescription);
    api
      .post("description", prescription)
      .then(setLabelSend(`Receita ${prescription.nome} enviada...`))
      .catch((err) =>
        setLabelSend(`Erro ao enviar receita, ${prescription.nome}`)
      );
  };

  useEffect(() => initPrescription(), []);

  return (
    <>
      {!hasPermission && <Login cbPermission={setHasPermission}>Login</Login>}
      {hasPermission && (
        <form className="form-prescription">
          <div className="form-prescription-inputs col-12">
            <div className="form-row col-6">
              <select
                id="inputEstado"
                className="form-control"
                onChange={(e) => updatePrescription(e)}
              >
                <option selected>Escolher receita...</option>
                {prescriptions.map((item) => (
                  <option>{item.nome}</option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="form-prescription-input">
                <Input
                  id="inputVelocity"
                  label="Velocidade"
                  value={prescription.velocidade}
                />
              </div>
              <div className="form-prescription-input">
                <Input
                  id="inputVelocityMin"
                  label="Min"
                  value={prescription.velocidadeMin}
                />
              </div>
              <div className="form-prescription-input">
                <Input
                  id="inputVelocityMax"
                  label="Max"
                  value={prescription.velocidadeMax}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-prescription-input">
                <Input
                  id="inputCarga"
                  label="Carga"
                  value={prescription.carga}
                />
              </div>

              <div className="form-prescription-input">
                <Input
                  id="inputCargaMin"
                  label="Min"
                  value={prescription.cargaMin}
                />
              </div>

              <div className="form-prescription-input">
                <Input
                  id="inputCargaMax"
                  label="Max"
                  value={prescription.cargaMax}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-prescription-input">
                <Input
                  id="inputTemperature1"
                  label="Temperatura 1"
                  value={prescription.temperatura1}
                />
              </div>

              <div className="form-prescription-input">
                <Input
                  id="inputTemperature1Min"
                  label="Min"
                  value={prescription.temperatura1Min}
                />
              </div>

              <div className="form-prescription-input">
                <Input
                  id="inputTemperature1Max"
                  label="Max"
                  value={prescription.temperatura1Max}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-prescription-input">
                <Input
                  id="inputTemperature2"
                  label="Temperatura 2"
                  value={prescription.temperatura2}
                />
              </div>

              <div className="form-prescription-input">
                <Input
                  id="inputTemperature2Min"
                  label="Min"
                  value={prescription.temperatura2Min}
                />
              </div>

              <div className="form-prescription-input">
                <Input
                  id="inputTemperature2Max"
                  label="Max"
                  value={prescription.temperatura2Max}
                />
              </div>
            </div>
          </div>

          <div className="form-prescription-navigation">
            <div className="m-3">
              <button
                className="btn btn-outline-danger col-12 col-sm-2 mr-1"
                onClick={sendDescription}
              >
                Excluir
              </button>

              <button
                className="btn btn-outline-success col-12 col-sm-2 mr-1"
                onClick={sendDescription}
              >
                Salvar
              </button>

              <Link
                className="btn btn-outline-light col-12 col-sm-2  ml-1"
                to="/prescription"
              >
                Cancelar
              </Link>
            </div>

            <div>
              <label className="btn btn-outline-warning button">
                {labelSend}
              </label>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default CrudPrescription;
