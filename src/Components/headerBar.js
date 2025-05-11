import React from "react";

import "../styles/headerBar.css";

function HeaderBar({ logo }) {
  return (
    <div className="header-bar">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
}

export default HeaderBar;
