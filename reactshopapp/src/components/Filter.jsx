import React from 'react'
import { Button, Form, Navbar, Nav,Container } from "react-bootstrap";
import '../App.css';
const Filter = () => {
  return (
    <div className='filters'>
 <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="navCls">
            <Nav.Link href="/">DashBoard</Nav.Link>
            <Nav.Link href="/">All Products</Nav.Link>
            <Nav.Link href="/">Orders</Nav.Link>
            <Nav.Link href='/'>Favorites</Nav.Link>
            <Nav.Link href='/ffff'> New Arrival</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    
  )
}

export default Filter