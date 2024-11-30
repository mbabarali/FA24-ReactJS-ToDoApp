import "./Header.css";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/new-task">New</a>
        </li>
        <li>
          <a href="/scheduled-tasks">Scheduled</a>
        </li>
        <li>
          <a href="/finished-tasks">Finished</a>
        </li>
        <li>
          <a href="/deleted-tasks">Trash</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
