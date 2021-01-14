import React from "react";
import { Link } from "react-router-dom";

function Header({ routes, onMenu }) {
  return (
    <header className="appHeader">
      <button onClick={onMenu}>Toggle sidebar</button>
      {routes.map((i) => (
        <Link to={i.path}>{i.name}</Link>
      ))}
    </header>
  );
}

export default Header;
