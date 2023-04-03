import React from "react";
import { Navbar, Nav, Container, Row, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";

function Headers() {
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
    // console.log('Logout')
    dispatch(logout())
  }
  return (
      <Navbar  bg='dark'variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Proshop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/cart" >
                <Nav.Link >
                  <i className="fas fa-shopping-cart" ></i>Cart
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
      <LinkContainer to='/login'>
        <Nav.Link><i className="fas fa-user">login</i></Nav.Link>
      </LinkContainer>
      )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Headers;
