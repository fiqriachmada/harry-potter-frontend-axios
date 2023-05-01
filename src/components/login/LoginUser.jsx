import { useState } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../apis/userServices";
import Swal from "sweetalert2";

function LoginPage({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    return loginUser({ username, email, password })
      .then((response) => {
        Swal.fire(
          "Successfully Login with " + (email || username),
          "",
          "success"
        );
        setIsAuthenticated(true);
        history.push("/characters/");
      })
      .catch((error) => {
        Swal.fire(error.response.data.message, "Failed", "error");
        setError(error.response.data.message);
      });
  };

  return (
    <div className="card" style={{ backgroundColor: "white" }}>
      <div>
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <div className="row mt-5 mb-5 mx-1">
            <label>
              Username or Email:
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
              Password:
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="row mt-5 mb-5 mx-3">
            <button className="btn btn-outline-primary" type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
