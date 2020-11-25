import React, { useState } from "react";
import "./login.css";

import api from "../../services/api";

const Login = ({ setTitle }) => {
  setTitle && setTitle("Login");

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState("");

  const verifyPermission = (props) => {
    api.get(`usuarios/${userName}/${password}`).then((res) => {
      if (res.data) {
        window.location.hash = '#/report'
      } else {
        setMessage("Usuário/Senha inválido");
      }
    });
  };

  return (
    <div className="login-container">
      <form className="col-4 text-center">
        <label style={{ color: "#f00", marginBottom: 20 }}>{message}</label>

        <div className="form-group">
          <label for="inputUser">Usuário</label>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            className="form-control"
            id="inputUser"
          ></input>
        </div>
        <div className="form-group">
          <label for="inputPassword">Senha</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="inputPassword"
          ></input>
        </div>
        <button onClick={verifyPermission} class="btn btn-primary">
          Entrar
        </button>
      </form>
    </div>
  );
};
export default Login;
