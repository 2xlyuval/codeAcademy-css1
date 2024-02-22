import { Navbar } from "./Navbar.jsx";
const { useState } = React;
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body overflow based on menu state
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };
  return (
    <header>
      <div className="logo">
        Blogin<span>.</span>
      </div>
      <input
        onChange={toggleMenu}
        className="menu-btn"
        type="checkbox"
        id="menu-btn"
      />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <Navbar />
    </header>
  );
}
