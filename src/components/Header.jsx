import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new-task">New</Link>
        </li>
        <li>
          <Link to="/scheduled-tasks">Scheduled</Link>
        </li>
        <li>
          <Link to="/finished-tasks">Finished</Link>
        </li>
        <li>
          <Link to="/deleted-tasks">Trash</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
