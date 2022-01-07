import React from "react";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      {/* used navbar from bootstrap bootwatch */}
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      {/* container is used to set the content's margins dealing with the responsive behaviors of your layout */}
        <Container>
          {/* Link container is used to convert href container to a component page */}
          <LinkContainer to="/">
            <Navbar.Brand>Tote.io</Navbar.Brand>
          </LinkContainer>
            {/* Navbar was grabbed from bootstrap */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="login">
                <Nav.Link>
                  <i className="fas fa-user"></i>Login
                </Nav.Link>
              </LinkContainer>
              <Container />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
