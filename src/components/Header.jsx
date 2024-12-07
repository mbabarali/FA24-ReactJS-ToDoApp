import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <ul>
        {/* Relative Paths (without starting /) */}
        <li>
          <NavLink
            to=""
            className={(linkStatus) =>
              linkStatus.isActive ? "active" : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="new-task"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            New
          </NavLink>
        </li>
        <li>
          <NavLink
            to="scheduled-tasks"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            // end
          >
            Scheduled
          </NavLink>
        </li>
        <li>
          <NavLink
            to="finished-tasks"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Finished
          </NavLink>
        </li>
        <li>
          <NavLink
            to="deleted-tasks"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Trash
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
