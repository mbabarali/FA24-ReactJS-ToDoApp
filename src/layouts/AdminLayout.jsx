// Layout (or say, wrapper) for child routes
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function AdminLayout() {
  return (
    <div style={{ background: "lightgray" }}>
      <header>
        <Link to="/admin" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </header>
      <h1>Admin Panel</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default AdminLayout;
