import React from 'react'
import { Table } from 'react-bootstrap'
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import '../contact/Contact.css'
function Contact() {
  return (
    <div>
      <div className='container'>
        <h1 className='col contatchead'>Acquired Contact List</h1>
        <div className='row'>
            <div className='col'>
              <Table>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone No</th>
                </tr>
              </Table>
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default Contact