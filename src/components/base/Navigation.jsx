import { Container, Nav, Navbar } from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'
// import { Link } from "react-router-dom" 

export default function Navigation({type}) {
  return (
    <Navbar bg={type === 'header'? 'light':'dark'} expand = 'lg'>
      <Container>
        {type === 'header'? <Navbar.Brand href = '/'> <img src="/src/assets/img/logo.svg" alt="logo" className="logo" width='50px' height= '50px'/> </Navbar.Brand> : null}
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-white">
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/chart'>
              <Nav.Link>Chart</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
