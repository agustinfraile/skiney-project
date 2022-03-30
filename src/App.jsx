// componentes
import TituloApp from './components/TituloApp/TituloApp'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'

// react-router-dom
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

// context
import CartContextProvider from './context/CartContext'


// estilos
import './App.css'

function App() {

  return (
    <CartContextProvider>

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

    </CartContextProvider>
  
  )
}


export default App
