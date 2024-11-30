import "./Header.css";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Scheduled</a>
        </li>
        <li>
          <a href="#">Finished</a>
        </li>
        <li>
          <a href="#">Trash</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
