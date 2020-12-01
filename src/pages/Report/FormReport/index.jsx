import "./formReport.css";
import React, { useState } from "react";

import app from "../../../services/api";

import { TextField } from "@material-ui/core";

const FormReport = () => {
  const [dateTimeStart, setDateTimeStart] = useState();
  const [dateTimeEnd, setDateTimeEnd] = useState();

  const onDateTimeStart = (value) => {
    setDateTimeStart(value);
  };

  const onDateTimeEnd = (value) => {
    setDateTimeEnd(value);
  };

  const onSearch = () => {
    app
      .post(`report`, {
        dateStart: dateTimeStart,
        dateEnd: dateTimeEnd,
      })
      .then((res) =>
        console.log(
          "Pesquisa realizada com sucesso ao buscar Registros entre datas",
          res
        )
      )
      .catch((err) =>
        console.log(
          "ERRO na chamada a URL REPORT, PESQUISAR DADOS DO REGISTRO ENTRE DATAS ##",
          err
        )
      );
  };

  return (
    <form>
      <div class="form-row">
        <div class="col-12 col-md-5 text-center mb-2">
          <TextField
            id="datetime-start"
            type="datetime-local"
            style={{ backgroundColor: "#666666", borderRadius: 5, padding: 5 }}
            onChange={(e) => onDateTimeStart(e.target.value)}
          />
        </div>

        <div class="ccol-12 col-md-5 text-center mb-2">
          <TextField
            id="datetime-end"
            type="datetime-local"
            style={{ backgroundColor: "#666666", borderRadius: 5, padding: 5 }}
            onChange={(e) => onDateTimeEnd(e.target.value)}
          />
        </div>

        <div className="col-12 col-md-2 text-center">
          <button onClick={onSearch} class="btn btn-secondary">
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormReport;
