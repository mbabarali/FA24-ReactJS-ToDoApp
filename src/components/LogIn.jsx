import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to="user"> User Log In </Link>
      <Link to="admin"> Admin Log In </Link>
    </div>
  );
}

export default LogIn;
