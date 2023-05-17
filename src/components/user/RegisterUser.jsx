import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../../apis/userServices';
import Swal from 'sweetalert2';
import { Alert } from 'react-bootstrap';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RegisterUser({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    return registerUser({ username, email, password })
      .then((response) => {
        Swal.fire(
          'Successfully Register ' + (email || username),
          '',
          'success'
        );
        // setIsAuthenticated(true);
        history.push('/login');
      })
      .catch((error) => {
        Swal.fire(error.response.data.message, 'Failed', 'error');
        setError(error.response.data.message);
      });
  };

  return (
    <div className="card" style={{ backgroundColor: 'white' }}>
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
            <button className="btn btn-outline-primary" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterUser;
