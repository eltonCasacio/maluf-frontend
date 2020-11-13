import React, { useState } from 'react'
import Header from './components/Header'

import { HashRouter } from 'react-router-dom'
import Rotas from './Routes'

import './App.css'

function App() {

  const [title, setTitle] = useState()

  return (
    <HashRouter>
      <div className="grid-container">
        <div>
          <Header logo="Syntro" title={title} />
        </div>
        <div>
          <Rotas/>
        </div>
      </div>
    </HashRouter>
  )
}

export default App;
