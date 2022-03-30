import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'




import './NavBar.css'

const NavBar = () => {
return (
<div>
  <Navbar bg="light" variant="light" expand="lg">

    <Container>
      <NavLink to="/">
        {/* <Navbar.Brand to="/">Logo</Navbar.Brand> */}
        <Logo />
      </NavLink>
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          


          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavLink to="categoria/gel">
              <NavDropdown.Item href="#action/3.1">Gel</NavDropdown.Item>
            </NavLink>

            <NavLink to="categoria/limpieza">
              <NavDropdown.Item href="#action/3.2">Limpieza</NavDropdown.Item>
            </NavLink>
          </NavDropdown>
          
          
          <NavLink to="nosotros">
            <Nav.Link>
              Nosotros
            </Nav.Link>
          </NavLink>

        </Nav>

      </Navbar.Collapse>
    </Container>
      <NavLink to="cart">
          <CartWidget />
      </NavLink>

  </Navbar>


</div>
)
}



export default NavBar