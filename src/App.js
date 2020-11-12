import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Charts from './pages/Charts'

function App() {
  return (
    <div className="main-container">
      <Header logo="Syntro" title="Real time" />
      <Charts />
      <Footer text="Syntro Automação Industrial" />
    </div>
  )
}

export default App;
