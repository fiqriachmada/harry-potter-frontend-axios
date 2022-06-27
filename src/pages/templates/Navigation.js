import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import Members from "../../components/member/Members";

const Navigation = () => {
  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }

  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      className='navbar fixed-top'
    >
      <Container>
        <Link to='/' style={navStyle}>
          Harry Potter App
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav text-right'>
          <Nav className='text-center'>
            <Nav.Link>
              <Link to='/characters' style={navStyle}>
                Character
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
