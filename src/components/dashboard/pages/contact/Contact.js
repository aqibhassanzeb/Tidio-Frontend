import React from 'react'
import { Table } from 'react-bootstrap'
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
            <Table>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone No</th>
                <th>Action</th>
              </tr>
              <tr className='bg-light'>
                <td> <input type="checkbox" alt='' />  Hamza  </td>
                <td>Khan</td>
                <td>Hamzakhan@gmail.com</td>
                <td>02347287837</td>
                <td className='delebtnrow'>Delete</td>
              </tr>
              
            </Table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact