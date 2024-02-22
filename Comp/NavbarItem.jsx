export function NavbarItem({ name }) {
  return (
    <li className={`navbar-item ${name == "journal" ? "active" : ""}`}>
      <a href="" className="navbar-link">
        {name}
      </a>
    </li>
  );
}
