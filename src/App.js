import React from 'react'
import Header from './components/Header'

import { HashRouter } from 'react-router-dom'
import Rotas from './Routes'

import './App.css'

function App() {
  return (
    <HashRouter>
      <div className="grid-container">
        <div>
          <Header logo="Syntro" title="Real time" />
        </div>
        <div>
          <Rotas />
        </div>
      </div>
    </HashRouter>
  )
}

export default App;
