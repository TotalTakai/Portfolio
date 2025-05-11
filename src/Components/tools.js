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
  typescriptIcon,
}) {
  return (
    <div className="tools">
      <div className="tools-container">
        <div className="small-container">
          <div className="icon-container">
            <img src={htmlIcon} alt="HTML" className="tool-icon" />
            <p>html</p>
          </div>
          <div className="icon-container">
            <img src={cssIcon} alt="CSS" className="tool-icon" />
            <p>css</p>
          </div>
          <div className="icon-container">
            <img src={jsIcon} alt="JavaScript" className="tool-icon" />
            <p>javascript</p>
          </div>
        </div>
        <div className="small-container">
          <div className="icon-container">
            <img src={reactIcon} alt="React" className="tool-icon" />
            <p>React</p>
          </div>
          <div className="icon-container">
            <img src={nodeIcon} alt="Node.js" className="tool-icon" />
            <p>Node.js</p>
          </div>
          <div className="icon-container">
            <img src={reduxIcon} alt="Redux" className="tool-icon" />
            <p>Redux</p>
          </div>
        </div>
        <div className="small-container">
          <div className="icon-container">
            <img src={gitIcon} alt="Git" className="tool-icon" />
            <p>Git</p>
          </div>
          <div className="icon-container">
            <img src={jiraIcon} alt="Jira" className="tool-icon" />
            <p>Jira</p>
          </div>
          <div className="icon-container">
            <img src={unityIcon} alt="Unity" className="tool-icon" />
            <p>Unity</p>
          </div>
        </div>
        <div className="small-container">
          <div className="icon-container">
            <img src={csharpIcon} alt="C#" className="tool-icon" />
            <p>C#</p>
          </div>
          <div className="icon-container">
            <img src={pythonIcon} alt="Python" className="tool-icon" />
            <p>Python</p>
          </div>
          <div className="icon-container">
            <img src={typescriptIcon} alt="TypeScript" className="tool-icon" />
            <p>TypeScript</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
