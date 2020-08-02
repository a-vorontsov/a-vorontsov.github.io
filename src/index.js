import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import About from "./components/about";
import Home from "./components/home";
import Contact from "./components/contact";
import Projects from "./components/projects";

function App() {
  return (
    <div className="container-fluid">
      <Router basename={process.env.PUBLIC_URL}>
        <Home path="/" exact />
        <About path="/about" />
        <Contact path="/contact" />
        <Projects path="/projects" />
      </Router>
      <footer className="fadein footer text-center">
        Copyright© {new Date().getFullYear()}, Aleksandr Vorontsov
      </footer>
    </div>
  );
}

const app = document.getElementById("root");
if (app.hasChildNodes()) {
  ReactDOM.hydrate(<App />, app);
} else {
  ReactDOM.render(<App />, app);
}
