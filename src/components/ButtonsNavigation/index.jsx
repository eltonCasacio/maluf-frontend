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
        GRAFICO
      </Link>
      <Link className="badge badge-dark" to="/report">
        RELATÓRIO
      </Link>
      <Link className="badge badge-dark" to="/prescription">
        RECEITA
      </Link>
      <Link className="badge badge-dark" to="/manufature">
        MANUTENÇÃO
      </Link>
      <Link to="/" className="badge badge-danger">
        FECHAR
      </Link>
    </div>
  );
};

export default ButtonsNavigation;
