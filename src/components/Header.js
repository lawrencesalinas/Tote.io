import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, Row, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { logout } from '../actions/userActions'
function Header() {

  const userLogin = useSelector(state=> state.userLogin)
  const {userInfo} = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
    // dispatch logout from actions to get rid of userInfo from localstorage
    dispatch(logout())
  }
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
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </LinkContainer>

            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>
            ):(
              <LinkContainer to="/login">
              <Nav.Link>
                <i className="fas fa-user"></i>Login
              </Nav.Link>
            </LinkContainer>
            )}

          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
