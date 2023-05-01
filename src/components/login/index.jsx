import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export function LogoutButton({ setIsAuthenticated }) {
  const history = useHistory();

  const handleLogout = () => {
    setIsAuthenticated(false);
    Swal.fire("Successfully Logout", "", "success");

    history.push("/login");
  };

  return <button className="btn btn-primary" onClick={handleLogout}>Logout</button>;
}
