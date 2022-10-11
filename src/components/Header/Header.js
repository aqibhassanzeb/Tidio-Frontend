import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../Header/Header.css"
function Header() {
  return (
    <div className='container-fluid sticky-nav px-4'>
      <div className='row py-4 '>
        <div className='col-sm-3  d-flex align-items-center'>
          <Navbar.Brand >logo</Navbar.Brand>
        </div>
        <div className='col-sm-6 home_link'>
          <Nav className="">
            <Nav.Link href="#link" className='home'>Home</Nav.Link>
            <Nav.Link href="#link" className='home' >Pricing</Nav.Link>
          </Nav>
        </div>
        <div className='col-sm-3 register'>
          <a className='d-flex align-items-center logout'>Logout</a> &nbsp;&nbsp;
          <button type="button" class="btn reg_padding">Register</button>
        </div>
      </div>
    </div>
  )
}

export default Header