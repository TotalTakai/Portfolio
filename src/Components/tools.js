import React from "react";

import "../styles/tools.css";

function Tools({
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  nodeIcon,
  reduxIcon,
  gitIcon,
  jiraIcon,
  unityIcon,
  csharpIcon,
  pythonIcon,
}) {
  return (
    <div className="tools">
      <div className="tools-container">
        <img src={htmlIcon} alt="HTML" className="tool-icon" />
        <img src={cssIcon} alt="CSS" className="tool-icon" />
        <img src={jsIcon} alt="JavaScript" className="tool-icon" />
        <img src={reactIcon} alt="React" className="tool-icon" />
        <img src={nodeIcon} alt="Node.js" className="tool-icon" />
        <img src={reduxIcon} alt="Redux" className="tool-icon" />
        <img src={gitIcon} alt="Git" className="tool-icon" />
        <img src={jiraIcon} alt="Jira" className="tool-icon" />
        <img src={unityIcon} alt="Unity" className="tool-icon" />
        <img src={csharpIcon} alt="C#" className="tool-icon" />
        <img src={pythonIcon} alt="Python" className="tool-icon" />
      </div>
    </div>
  );
}

export default Tools;
