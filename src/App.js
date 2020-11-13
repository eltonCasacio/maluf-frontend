import React, { useState } from 'react'
import { HashRouter } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Rotas from './Routes'

function App() {

  const [title, setTitle] = useState('Titulo')

  return (
    <HashRouter>
      <div className="grid-container">
        <div>
          <Header logo="Syntro" title={title} />
        </div>
        <div>
          <Rotas setTitle={setTitle} />
        </div>
      </div>
    </HashRouter>
  )
}

export default App;
