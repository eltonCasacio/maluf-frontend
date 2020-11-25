import React from "react";
import { Link } from "react-router-dom";
import "./buttonsNavigation.css";

const ButtonsNavigation = () => {
  return (
    <div className="buttonsNavigation container-fluid">
      <Link className="badge badge-dark" to="/">
        HOME
      </Link>
      <Link className="badge badge-dark" to="/chart">
        GRAFICOS
      </Link>
      <Link className="badge badge-dark" to="/login">
        RELATÓRIO
      </Link>
      <Link className="badge badge-dark" to="/manufature">
        MANUTENÇÃO
      </Link>

      <Link to="/" className="badge badge-danger" onClick={window.close()}>
        FECHAR
      </Link>
    </div>
  );
};

export default ButtonsNavigation;
