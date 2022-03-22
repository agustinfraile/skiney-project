import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'




import './NavBar.css'

const NavBar = () => {
return (
<div>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#features">Productos</Nav.Link>
        <Nav.Link href="#pricing">Nosotros</Nav.Link>
      </Nav>
    </Container>
  </Navbar>


</div>
)
}



export default NavBar