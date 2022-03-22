import { useState } from 'react'
import './App.css'
import TituloApp from './components/TituloApp/TituloApp'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <div className="App">
      <NavBar />
      <TituloApp />
    </div>
  )
}


export default App
