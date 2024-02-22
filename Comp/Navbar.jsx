import { NavbarItem } from "./NavbarItem.jsx";
export function Navbar() {
  const navbarItem = ["journal", "about", "work", "contact"];
  return (
    <nav>
      <ul className="clean-list">
        {navbarItem.map((item, idx) => (
          <NavbarItem key={idx} name={item} />
        ))}
      </ul>
    </nav>
  );
}
