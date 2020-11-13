import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from './pages/Home'
import Chart from './pages/Charts'
import Report from './pages/Report'

const Rotas = ({ setTitle }) => {
    return (
        <Switch>
            <Route path="/" exact render={props => <Home setTitle={setTitle} />} />
            <Route path="/chart" exact render={props => <Chart setTitle={setTitle} />} />
            <Route path="/report" exact render={props => <Report setTitle={setTitle} />} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}

export default Rotas