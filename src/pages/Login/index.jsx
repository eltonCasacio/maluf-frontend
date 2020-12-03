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
      <form className="col-12 text-center">
        <label style={{ color: "#f00", marginBottom: 20 }}>{message}</label>

        <div className="form-group col-12 col-sm-5">
          <label for="inputUser">Usuário</label>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            className="form-control"
            id="inputUser"
          ></input>
        </div>

        <div className="form-group col-12 col-sm-5">
          <label for="inputPassword">Senha</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="inputPassword"
          ></input>
        </div>

        <div className="col-12 col-sm-4 mt-3">
          <button
            type="button"
            onClick={verifyPermission}
            className="btn btn-primary button col-12 mb-2"
          >
            Entrar
          </button>
          <Link className="btn btn-outline-light button col-12 mb-1" to="/">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
