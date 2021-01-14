import React from "react";
import { Link } from "react-router-dom";

function Header({ routes }) {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {routes.map((i) => (
        <Link to={i.path}>{i.name}</Link>
      ))}
    </header>
  );
}

export default Header;
