import { useState } from 'react'
import './App.css'
import TituloApp from './components/TituloApp/TituloApp'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <TituloApp />
    </div>
  )
}


export default App
