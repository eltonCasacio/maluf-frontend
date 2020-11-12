import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from './pages/Home'
import Chart from './pages/Charts'

const Rotas = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/chart" exact component={Chart} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}

export default Rotas