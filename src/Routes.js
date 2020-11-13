import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from './pages/Home'
import Chart from './pages/Charts'
import Report from './pages/Report'

const Rotas = () => {

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/chart" exact component={Chart} />
            <Route path="/report" exact component={Report} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}

export default Rotas