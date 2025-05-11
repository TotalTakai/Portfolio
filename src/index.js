import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/global.css";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
AOS.init({
  duration: 1000, // Animation duration in ms
  once: true, // Whether animation should happen only once
});
