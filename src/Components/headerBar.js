import React from "react";

function HeaderBar({ logo }) {
  return (
    <div className="header-bar">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="header-title">My Portfolio</h1>
      <h2>headerBar Test</h2>
    </div>
  );
}

export default HeaderBar;
