import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header({ routes, onMenu }) {
  const TEXT = useSelector((st) => st.buttonText);

  return (
    <header className="appHeader">
      <button onClick={onMenu}>{TEXT}</button>
      {routes.map((i) => (
        <Link to={i.path}>{i.name}</Link>
      ))}
    </header>
  );
}

export default Header;
