import React from "react";
import Header from "./header";
import Project from "./projects/project";
const projects = require("../projects.json");

export default function Projects() {
  return (
    <div className="text-center">
      <Header />
      <div className="vertical-center fadein">
        <div className="horizontal-center col-12 col-md-8 col-md-offset-2">
          <h1>Projects</h1>
          <div className="row">
            {projects.map((p, key) => (
              <Project key={key} project={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
