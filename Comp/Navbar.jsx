import { NavbarItem } from "./NavbarItem.jsx";
export function Navbar() {
  const navbarItem = [
    {
      item: "journal",
      subItems: ["October 2016", "January 2017", "April 2017", "July 2017"],
    },
    { item: "about" },
    { item: "work" },
    { item: "contact" },
  ];
  // const navbarItem = ["journal", "about", "work", "contact"];
  return (
    <nav>
      <ul className="clean-list">
        {navbarItem.map((item, idx) => (
          <NavbarItem key={idx} item={item} />
        ))}
      </ul>
    </nav>
  );
}
