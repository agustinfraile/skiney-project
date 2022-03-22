import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'




import './NavBar.css'

const NavBar = () => {
return (
<div>
  <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#features">Productos</Nav.Link>
        <Nav.Link href="#pricing">Nosotros</Nav.Link>
      </Nav>

    </Container>
        <CartWidget />
  </Navbar>


</div>
)
}



export default NavBar