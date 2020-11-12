import React from "react";
import './buttonsNavigation.css'

const ButtonsNavigation = () => {
  return (
    <div className="buttonsNavigation">
      <button type="button" className="btn btn-outline-dark">HOME</button>
      <button type="button" className="btn btn-outline-dark">GRAFICOS</button>
      <button type="button" className="btn btn-outline-dark">RELATÓRIO</button>
      <button type="button" className="btn btn-outline-dark">MANUTENÇÃO</button>
      <button type="button" className="btn btn-danger">SAIR</button>
    </div>
  );
};

export default ButtonsNavigation;
