import React from "react";

import "../styles/generalInfo.css";

function GeneralInfo({ coderPicture }) {
  return (
    <div className="general-info">
      <div className="info">
        <p className="description">
          I am a full stack developer with a passion for creating dynamic and
          responsive web applications. I have experience in both front-end and
          back-end development, and I am always eager to learn new technologies
          and improve my skills.
        </p>
      </div>
      <div className="img-div">
        <img src={coderPicture} alt="Coder" className="coder-picture" />
      </div>
    </div>
  );
}

export default GeneralInfo;
