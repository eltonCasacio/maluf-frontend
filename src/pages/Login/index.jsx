import React, { useState } from "react";
import "./login.css";

import api from "../../services/api";
import { Link } from "react-router-dom";

const Login = ({ setTitle, cbPermission }) => {
  setTitle && setTitle("Login");

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState("");

  const verifyPermission = () => {
    api.get(`usuarios/${userName}/${password}`).then((res) => {
      if (res.data) {
        cbPermission(res.data);
      } else {
        setMessage("Usuário/Senha inválido");
      }
    });
  };

  return (
    <div className="login-container">
      <form className="col-12 col-sm-6">
        <label style={{ color: "#f00", marginBottom: 20 }}>{message}</label>

        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          className="form-control"
          id="inputUser"
          placeholder="USUÁRIO"
        ></input>

        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          id="inputPassword"
          placeholder="SENHA"
        ></input>
      </form>

      <div className="col-12 col-sm-4 mt-3 login-container-navigation">
        <button
          type="button"
          onClick={verifyPermission}
          className="btn btn-primary col-12 mb-2"
        >
          Entrar
        </button>
        <Link className="btn btn-outline-light col-12 mb-1" to="/">
          Cancelar
        </Link>
      </div>
    </div>
  );
};
export default Login;
