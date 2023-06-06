import React from 'react';
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  faCircleUser,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

const Navigation = ({ isAuthenticated, setIsAuthenticated, userProfile }) => {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userProfile');
    setIsAuthenticated(false);
  };

  const history = useHistory();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navbar fixed-top">
      <Container>
        <Link to="/" style={navStyle}>
          Harry Potter App
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav text-left">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/characters" style={navStyle}>
                Character
              </Link>
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            {isAuthenticated ? (
              <Dropdown>
                <Dropdown.Toggle
                  bsPrefix="x"
                  className="fa fa-user-circle-o text-white"
                  variant="transparent">
                  <FontAwesomeIcon icon={faCircleUser} />
                </Dropdown.Toggle>

                <Dropdown.Menu align={'end'} className="text-uppercase">
                  <Dropdown.Item
                    onClick={() => {
                      history.push('/profile');
                    }}
                    className="bg-transparent">
                    {/* <Link to={`/`}> */}
                    <button className="col-12 btn btn-light text-start">
                      <FontAwesomeIcon icon={faCircleUser} />
                      <i className="fa fa-user-circle-o"></i>
                      <strong className="mx-2">{userProfile.username}</strong>
                    </button>
                    {/* </Link> */}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="bg-transparent"
                    onClick={handleLogout}>
                    <button className="col-12 btn btn-light text-start text-danger">
                      <FontAwesomeIcon icon={faArrowRightFromBracket} />
                      <strong className="mx-2">Logout</strong>
                    </button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Button
                variant="outline-primary"
                onClick={() => {
                  history.push('/login');
                }}>
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
