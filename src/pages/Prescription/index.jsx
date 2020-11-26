import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./prescription.css";
import Login from "../Login";
import Input from "./Input";

const Prescription = ({ setTitle }) => {
  setTitle && setTitle("Prescrição");

  const [hasPermission, setHasPermission] = useState(false);

  const [prescription, setPrescription] = useState({});

  const [prescriptions, setPrescriptions] = useState([]);

  const initPrescription = () => {
    api.get("receitas").then((response) => {
      setPrescriptions(response.data);
    });
  };

  const updatePrescription = (e) => {
    let res = prescriptions.filter((item) => item.nome === e.target.value);
    setPrescription(res[0]);
  };

  const sendDescription = () => {
    api
      .post("description", prescription)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    initPrescription();
  }, []);

  return (
    <>
      {!hasPermission && (
        <Login cbPermission={setHasPermission}>Prescription</Login>
      )}
      {hasPermission && (
        <form className="form-prescription">
          <div className="col-9">
            <div className="form-row">
              <div className="form-group col-sm-10 col-md-6">
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
            </div>

            <div className="form-row">
              <div className="form-group col-sm-10 col-md-3">
                <Input id="inputVelocity" label="Velocidade" rdOnly={true} value={prescription.velocidade} />
              </div>
              <div className="form-group col-sm-5 col-md-3">
                <Input id="inputVelocityMin" label="Min" rdOnly={true} value={prescription.velocidadeMin} />
              </div>
              <div className="form-group col-sm-5 col-md-3">
                <Input id="inputVelocityMax" label="Max" rdOnly={true} value={prescription.velocidadeMax} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group  col-sm-10 col-md-3">
                <Input id="inputCarga" label="Carga" rdOnly={true} value={prescription.carga} />
              </div>

              <div className="form-group  col-sm-5 col-md-3">
                <Input id="inputCargaMin" label="Min" rdOnly={true} value={prescription.cargaMin} />
              </div>

              <div className="form-group  col-sm-5 col-md-3">
                <Input id="inputCargaMax" label="Max" rdOnly={true} value={prescription.cargaMax} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group  col-sm-10  col-md-3">
                <Input
                  id="inputTemperature1"
                  label="Temperatura 1"
                  rdOnly={true} value={prescription.temperatura1}
                />
              </div>

              <div className="form-group  col-sm-5 col-md-3">
                <Input id="inputTemperature1Min" label="Min" rdOnly={true} value={prescription.temperatura1Min} />
              </div>

              <div className="form-group  col-sm-5 col-md-3">
                <Input id="inputTemperature1Max" label="Max" rdOnly={true} value={prescription.temperatura1Max} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group  col-sm-10  col-md-3">
                <Input
                  id="inputTemperature2"
                  label="Temperatura 2"
                  rdOnly={true} value={prescription.temperatura2}
                />
              </div>

              <div className="form-group  col-sm-5 col-md-3">
                <Input id="inputTemperature2Min" label="Min" rdOnly={true} value={prescription.temperatura2Min} />
              </div>

              <div className="form-group  col-sm-5 col-md-3">
                <Input id="inputTemperature2Max" label="Max" rdOnly={true} value={prescription.temperatura2Max} />
              </div>
            </div>
          </div>

          <div className="col-3 buttons-container">
            <div className="row aling-left">
              <Link
                className="btn btn-outline-info button"
                to="/prescription/edit"
              >
                Mais
              </Link>
            </div>

            <div className="row">
              <button
                className="btn btn-outline-success button"
                onClick={sendDescription}
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default Prescription;
