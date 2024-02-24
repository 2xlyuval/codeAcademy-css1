export function NavbarItem({ item }) {
  const listClass = `navbar-item ${item.subItems ? "parent-item" : ""}`;
  return (
    // <li className={`navbar-item ${item.item == "journal" ? "active" : ""}`}>
    <li className={listClass}>
      <a href="" className="navbar-link">
        {item.item}
      </a>
      {item.subItems && <SubItemsMenu subItems={item.subItems} />}
    </li>
  );
}

export function SubItemsMenu({ subItems }) {
  return (
    <React.Fragment>
      <label htmlFor="journal-subitems"></label>
      <input type="checkbox" name="journal-subitems" id="journal-subitems" />
      <ul className="clean-list sub-list">
        {subItems.map((item, idx) => (
          <li key={idx}>
            <a href="">{item}</a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
