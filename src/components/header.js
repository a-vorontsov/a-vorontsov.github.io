import React from "react";
import { Link } from "@reach/router";

export default function Header() {
  return (
    <div className="nav">
      <div className="gradient-text">
        <Link to="/">Home</Link>
        &nbsp;|&nbsp;
        <Link to="/about">About</Link>
        &nbsp;|&nbsp;
        <Link to="/projects">Projects</Link>
        &nbsp;|&nbsp;
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
