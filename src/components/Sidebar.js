import React from "react";

function Sidebar({ onMenu }) {
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>
      <button onClick={onMenu}>close sidebar</button>
    </div>
  );
}

export default Sidebar;
