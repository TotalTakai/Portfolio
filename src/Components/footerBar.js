import React from "react";

import "../styles/footerBar.css";

function FooterBar({ githubIcon }) {
  return (
    <footer>
      <div className="footer-container">
        <p>This site was built from scrap using React.</p>
        <a href="https://github.com/TotalTakai/Portfolio">
          <img src={githubIcon}></img>
        </a>
      </div>
    </footer>
  );
}

export default FooterBar;
