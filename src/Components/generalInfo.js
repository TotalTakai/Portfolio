import React from "react";

function GeneralInfo({ coderPicture }) {
  return (
    <div className="general-info">
      <img src={coderPicture} alt="Coder" className="coder-picture" />
      <h1>General Info Test</h1>
    </div>
  );
}

export default GeneralInfo;
