import React from "react";

import coderPicture from "./pictures/Nir.png";
import logo from "./pictures/logo256.png";

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
      <Tools />
      <Projects />
      <Quote />
      <LinksBar />
      <FooterBar />
    </div>
  );
}

export default App;
