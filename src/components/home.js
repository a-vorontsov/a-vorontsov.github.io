import React from "react";
import { Link } from "@reach/router";

export default function Home() {
  return (
    <div className="header fadein vertical-center">
      <div className="text-center horizontal-center">
        <div className="gradient-text">
          <h1>Aleksandr Vorontsov</h1>
          <div>
            <Link to="/">Home</Link>
            &nbsp;|&nbsp;
            <Link to="/about">About</Link>
            &nbsp;|&nbsp;
            <Link to="/projects">Projects</Link>
            &nbsp;|&nbsp;
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="p--16">
          <a
            className="purple h4 p--8 icon-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/aleksvorontsov"
          >
            <img height={25} src={"/images/linkedin.svg"} alt="linkedin logo" />
          </a>
          <a
            className="purple h4 p--8 icon-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/a-vorontsov"
          >
            <img height={25} src={"/images/github.svg"} alt="github logo" />
          </a>
          <a
            className="purple h4 p--8 icon-link"
            target="_blank"
            rel="noopener noreferrer"
            href="/AleksandrVorontsov-CV.pdf"
          >
            <img height={25} src={"/images/cv.svg"} alt="CV logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
