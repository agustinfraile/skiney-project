import TituloApp from './components/TituloApp/TituloApp'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer'

import './App.css'
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer'
import CartWidget from './components/CartWidget/CartWidget'
import Cart from './components/Cart/Cart'

function App() {

  return (

      <BrowserRouter >
          <div className="App">
            <NavBar />
            <TituloApp />

          <Routes >

            <Route path='/' element = { <ItemListContainer/> } />
            <Route path='/categoria/:categoriaId' element = { <ItemListContainer/> } />
            <Route path='/categoria/:categoriaId/detalle/:detalleId' element = { <ItemDetailContainer /> } />
            <Route path='/detalle/:detalleId' element = { <ItemDetailContainer /> } />
            <Route path='/cart' element = { <Cart /> } />
            <Route path='/*' element = { <Navigate to='/' replace /> } />

          </Routes>

          </div>
      </BrowserRouter>
  
  )
}


export default App
