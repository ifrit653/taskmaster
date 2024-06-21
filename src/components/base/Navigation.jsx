// Navigation.jsx (dans src/components/base/Navigation.jsx)
import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import LoginModal from '../../views/login'; // Assurez-vous que le chemin relatif est correct

export default function Navigation() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowLoginModal = () => setShowLoginModal(true);

  const handleLogin = () => {
    // Logique de connexion
    // Vous pouvez implémenter ici la logique d'authentification
  };

  const navbarStyle = {
    background: 'linear-gradient(to right, #8A2387, #E94057, #F27121)',
    color: '#FFF', // Couleur de texte blanc
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.5)', // Ombre portée sous la barre de navigation
  };

  return (
    <Navbar style={navbarStyle} expand="lg">
      <Container>
        <Navbar.Brand href="#">
        <img
          src={"../logo.svg"}
          height="50"
          className="d-inline-block align-top"
          alt="Logo"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{ color: '#FFF' }} href="/">Accueil</Nav.Link>
            <Nav.Link style={{ color: '#FFF' }} href="/about">À Propos</Nav.Link>
            <Nav.Link style={{ color: '#FFF' }} href="/Form">Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-light" onClick={handleShowLoginModal}>
          Se connecter
        </Button>
      </Container>

      {/* Modal de connexion */}
      <LoginModal show={showLoginModal} onHide={handleCloseLoginModal} handleLogin={handleLogin} />
    </Navbar>
  );
}
