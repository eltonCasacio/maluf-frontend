import React from "react";
import "./formReport.css";

const FormReport = () => {
  return (
    <form>
      <div class="form-row">
        <label for="dateStart" className="col-sm-3 text-right">
          Data Inicial
        </label>
        <div class="form-group col-sm-9 col-md-3 col-lg-2">
          <input
            type="date"
            class="form-control form-control-sm"
            id="dateStart"
          ></input>
        </div>

        <label for="dateEnd" className="col-sm-3 col-md-3  text-right">
          Data Final
        </label>
        <div class="form-group col-sm-9 col-md-3 col-lg-2">
          <input
            type="date"
            class="form-control form-control-sm"
            id="dateEnd"
          ></input>
        </div>
      </div>

      <div class="form-row">
        <label for="timeStart" className="col-sm-3 col-md-3  text-right">
          Hora Inicial
        </label>
        <div class="form-group col-sm-9 col-md-3 col-lg-2">
          <input
            type="date"
            class="form-control form-control-sm"
            id="timeStart"
          ></input>
        </div>

        <label for="timeEnd" className="col-sm-3 col-md-3  text-right">
          Hora Final
        </label>
        <div class="form-group col-sm-9 col-md-3 col-lg-2">
          <input
            type="date"
            class="form-control form-control-sm"
            id="timeEnd"
          ></input>
        </div>
      </div>

      <div className="col-12 text-center">
        <button type="submit" class="btn btn-secondary col-2">
          Buscar
        </button>
      </div>
    </form>
  );
};

export default FormReport;
