import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = ({ isAuthenticated, setIsAuthenticated }) => {
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
        <Navbar.Collapse id='responsive-navbar-nav text-left'>
          <Nav className='text-center'>
            <Nav.Link>
              <Link to='/characters' style={navStyle}>
                Character
              </Link>
            </Nav.Link>
            {/* {isAuthenticated && (
              <Nav.Link>
                <LogoutButton
                  setIsAuthenticated={setIsAuthenticated}
                ></LogoutButton>
              </Nav.Link>
            )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
