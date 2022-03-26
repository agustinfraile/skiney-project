import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'




import './NavBar.css'

const NavBar = () => {
return (
<div>
  <Navbar bg="light" variant="light">

    <Container>
      
      <NavLink to="/">
        <Navbar.Brand to="/">Logo</Navbar.Brand>
      </NavLink>
      
      <Nav className="me-auto">
        
        <NavDropdown title="Productos" id='collasible-nav-dropdown'>

          <NavLink to="categoria/limpieza">
              Limpieza
          </NavLink>

          <NavLink to="categoria/gel">
              Gel
          </NavLink>

        </NavDropdown>
        
        
        <NavLink to="nosotros">
          <Nav.Link>
            Nosotros
          </Nav.Link>
        </NavLink>

      </Nav>

    </Container>

    <NavLink to="cart">
        <CartWidget />
    </NavLink>

  </Navbar>


</div>
)
}



export default NavBar