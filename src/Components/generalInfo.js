import React from "react";

import "../styles/generalInfo.css";

function GeneralInfo({ coderPicture }) {
  return (
    <div className="general-info">
      <div className="info">
        <p className="description">
          Passionate about crafting intuitive and dynamic web applications, I
          specialize in both front-end and back-end development. My drive to
          continuously learn and adapt keeps me at the forefront of modern web
          technologies. Whether building from scratch or improving existing
          solutions, I am dedicated to delivering impactful digital experiences.
        </p>
      </div>
      <div className="img-div">
        <img src={coderPicture} alt="Coder" className="coder-picture" />
      </div>
    </div>
  );
}

export default GeneralInfo;
