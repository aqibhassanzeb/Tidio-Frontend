import React, { useEffect } from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../Header/Header.css"
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate =useNavigate()
  const handleLogout=()=>{
    localStorage.clear();
    navigate('/userlogin')
  }
  const user = JSON.parse(localStorage.getItem("user"))
  console.log("user :",user)
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
          <a className='d-flex align-items-center logout' onClick={()=> user != null ? handleLogout():navigate('/userlogin')}>{user !=null ?"Logout":"Login"}</a> &nbsp;&nbsp;
          <button type="button" class="btn reg_padding" onClick={()=>navigate('/register')}>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Header