import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../Header/Header.css"
function Header() {
  return (
    <div className='container-fluid'>
        <div className='row py-4 '>
         <div className='col-sm-3  d-flex align-items-center'>
         <Navbar.Brand >logo</Navbar.Brand>
         </div>
         <div className='col-sm-6 home_link'>
         <Nav className="">
         <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Learning" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
         </div>
        <div className='col-sm-3 register'>
        <a href='' className='d-flex align-items-center logout'>Logout</a> &nbsp;
        <button type="button" class="btn btn-light px-3">Register</button>
        </div>
        </div>
    </div>
  )
}

export default Header