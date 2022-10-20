import React, { useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../Header/Header.css"
import { useNavigate } from "react-router-dom";
import {Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';

function Header() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear();
    navigate('/userlogin')
  }
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <>
      <Navbar bg="white" expand="lg" sticky='top' className='py-3'>
        <Container>
          <Navbar.Brand onClick={() => navigate('/')} style={{cursor: "pointer"}} className="fw-bold text-primary">Tidio Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navLinkdiv">
              <div className='home_link '>
                <Nav.Link onClick={() => navigate('/')} className='home'>Home</Nav.Link>
                <Nav.Link  onClick={() => navigate('/pricing')} className='home' >Pricing</Nav.Link>
              </div>
              <div className='register '>
                <button className='d-flex align-items-center logout' onClick={() => user != null ? handleLogout() : navigate('/userlogin')}>{user != null ? "Logout" : "Log In"}</button> &nbsp;&nbsp;
                <button type="button" class="btn reg_padding" onClick={() => navigate('/register')}>Sign Up</button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header