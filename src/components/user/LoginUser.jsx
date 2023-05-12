import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../../apis/userServices';
import Swal from 'sweetalert2';
import { Tabs, Tab, Alert } from 'react-bootstrap';
import {
  faEye,
  faEyeSlash,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LoginUser({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    return loginUser({ username, email, password })
      .then((response) => {
        Swal.fire(
          'Successfully Login with ' + (email || username),
          '',
          'success'
        );
        setIsAuthenticated(true);
        setLoading(false);
        history.push('/characters/');
      })
      .catch((error) => {
        Swal.fire(error.response.data.message, 'Failed', 'error');
        setError(error.response.data.message);
        setLoading(false);
      });
  };

  return (
    <div className="card" style={{ backgroundColor: 'white' }}>
      <Tabs
        defaultActiveKey="username"
        id="login-tabs"
        className="justify-content-center">
        <Tab
          eventKey="username"
          title="Username"
          onClick={(e) => {
            setEmail('');
          }}>
          <div className="container">
            <form onSubmit={handleSubmit}>
              {error && (
                <Alert variant={'danger'} className="mt-3 mx-3">
                  {error && <p>{error}</p>}
                </Alert>
              )}
              <div className="row mt-5 mb-5 mx-1">
                <label>
                  Username:
                  <input
                    className="form-control"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>
              </div>
              <div className="row mt-5 mb-5 mx-1">
                <label>Password:</label>
                <div className="input-group mb-3">
                  <input
                    value={password}
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text mx-auto my-auto">
                      <FontAwesomeIcon
                        className="mx-auto my-1"
                        icon={showPassword ? faEyeSlash : faEye}
                        onClick={toggleShowPassword}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="row mt-5 mb-5 mx-3">
                <button
                  className="btn btn-outline-primary"
                  type="submit"
                  disabled={loading}>
                  Log In
                  {loading && (
                    <FontAwesomeIcon icon={faSpinner} spin className="mx-3" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </Tab>
        <Tab
          eventKey="email"
          title="Email"
          onClick={(e) => {
            setUsername('');
          }}>
          <div className='container'>
            <form onSubmit={handleSubmit}>
              {error && (
                <Alert variant={'danger'} className="mt-3 mx-3">
                  {error && <p>{error}</p>}
                </Alert>
              )}
              <div className="row mt-5 mb-5 mx-1">
                <label>
                  Email:
                  <input
                    className="form-control"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setUsername('');
                    }}
                  />
                </label>
              </div>

              <div className="row mt-5 mb-5 mx-1">
                <label>Password:</label>
                <div className="input-group mb-3">
                  <input
                    value={password}
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text mx-auto my-auto">
                      <FontAwesomeIcon
                        className="mx-auto my-1"
                        icon={showPassword ? faEyeSlash : faEye}
                        onClick={toggleShowPassword}
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="row mt-5 mb-5 mx-3">
                <button
                  className="btn btn-outline-primary"
                  type="submit"
                  disabled={loading}>
                  Log In
                  {loading && (
                    <FontAwesomeIcon icon={faSpinner} spin className="mx-3" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </Tab>
      </Tabs>

      <div className="d-flex justify-content-center mb-3">
        <Link to={'/register'}>Have no account? Register Here</Link>
      </div>
    </div>
  );
}

export default LoginUser;
