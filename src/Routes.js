import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Home from "./pages/Home";
import Chart from "./pages/Charts";
import Historic from "./pages/Historic";
import Login from "./pages/Login";
import Prescription from "./pages/Prescription";
import CrudPrescription from "./pages/Prescription/CrudPrescription";
import Report from "./pages/Report";

const Rotas = ({ setTitle }) => {
  return (
    <Switch>
      <Route path="/" exact render={(props) => <Home setTitle={setTitle} />} />
      <Route
        path="/chart"
        exact
        render={(props) => <Chart setTitle={setTitle} />}
      />
      <Route
        path="/historic"
        exact
        render={(props) => <Historic setTitle={setTitle} />}
      />
      <Route
        path="/login"
        exact
        render={(props) => <Login setTitle={setTitle} />}
      />
      <Route
        path="/prescription"
        exact
        render={(props) => <Prescription setTitle={setTitle} />}
      />
      <Route
        path="/prescription/edit"
        exact
        render={(props) => <CrudPrescription setTitle={setTitle} />}
      />

      <Route
        path="/prescription"
        exact
        render={(props) => <CrudPrescription setTitle={setTitle} />}
      />

      <Route
        path="/report/:timeStart/:timeEnd"
        exact
        render={(props) => <Report setTitle={setTitle} />}
      />

      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Rotas;
