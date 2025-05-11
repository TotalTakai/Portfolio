import React from "react";

//importing pictures
import coderPicture from "./pictures/Nir.png";
import logo from "./pictures/logo256.png";

//importing icons for tools
import htmlIcon from "./pictures/icons/html.png";
import cssIcon from "./pictures/icons/css.png";
import jsIcon from "./pictures/icons/javascript.png";
import reactIcon from "./pictures/icons/react.png";
import nodeIcon from "./pictures/icons/nodejs.png";
import gitIcon from "./pictures/icons/git.png";
import jiraIcon from "./pictures/icons/jira.png";
import reduxIcon from "./pictures/icons/redux.png";
import unityIcon from "./pictures/icons/unity.png";
import csharpIcon from "./pictures/icons/csharp.png";
import pythonIcon from "./pictures/icons/python.png";
import githubIcon from "./pictures/icons/github.svg";
import typescriptIcon from "./pictures/icons/typescript.png";

// Importing components
import HeaderBar from "./Components/headerBar";
import GeneralInfo from "./Components/generalInfo";
import Tools from "./Components/tools";
import Projects from "./Components/projects";
import Quote from "./Components/quote";
import LinksBar from "./Components/linksBar";
import FooterBar from "./Components/footerBar";

import "./styles/App.css";

// App is used as a container for all components
// It imports all components and renders them in the correct order
// It also imports the logo and coderPicture to be used in the components
function App() {
  return (
    <div className="App">
      <HeaderBar logo={logo} />
      <GeneralInfo coderPicture={coderPicture} />
      <Tools
        htmlIcon={htmlIcon}
        cssIcon={cssIcon}
        jsIcon={jsIcon}
        reactIcon={reactIcon}
        nodeIcon={nodeIcon}
        gitIcon={gitIcon}
        jiraIcon={jiraIcon}
        reduxIcon={reduxIcon}
        unityIcon={unityIcon}
        csharpIcon={csharpIcon}
        pythonIcon={pythonIcon}
        typescriptIcon={typescriptIcon}
      />
      <Projects />
      <Quote />
      <LinksBar />
      <FooterBar githubIcon={githubIcon} />
    </div>
  );
}

export default App;
