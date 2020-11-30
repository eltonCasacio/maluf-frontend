import React, { useState } from "react";
import "./formReport.css";

import { TextField } from "@material-ui/core";

const FormReport = () => {
  const [dateTimeStart, setDateTimeStart] = useState();
  const [dateTimeEnd, setDateTimeEnd] = useState();

  function onDateTimeStart(value) {
    setDateTimeStart(new Date(value).toLocaleDateString("pt-br"));
  }

  function onDateTimeEnd(value) {
    setDateTimeEnd(new Date(value).toLocaleDateString("pt-br"));
  }

  return (
    <form>
      <div class="form-row">
        <div class="col-sm-12 col-md-6 text-center">
          <TextField
            id="datetime-start"
            type="datetime-local"
            style={{ backgroundColor: "#666666", borderRadius: 5, padding: 5 }}
            onChange={(e) => onDateTimeStart(e.target.value)}
          />
        </div>

        <div class="col-sm-12 col-md-6  text-center">
          <TextField
            id="datetime-end"
            type="datetime-local"
            style={{ backgroundColor: "#666666", borderRadius: 5, padding: 5 }}
            onChange={(e) => onDateTimeEnd(e.target.value)}
          />
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
