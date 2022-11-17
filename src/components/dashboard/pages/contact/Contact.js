import React from 'react'
import Table from 'react-bootstrap/Table';
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import '../contact/Contact.css'
import { AiFillDelete } from 'react-icons/ai';
function Contact() {
  return (
    <div>
      <div className='container'>
        <h1 className='col contatchead'>Acquired Contact List</h1>
        <div className='row'>
          <div className='col'>
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>  Mark</td>
              <td>Mark@mdo.com</td>
              <td className='delebtnrow'>Delete</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>fat@fat.com</td>
              <td className='delebtnrow'>Delete</td>

            </tr>
            <tr>
              <td>3</td>
              <td >Larry the Bird</td>
              <td>twitter@twitter.com</td>
              <td className='delebtnrow'>Delete</td>

            </tr>
          </tbody>
        </Table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact