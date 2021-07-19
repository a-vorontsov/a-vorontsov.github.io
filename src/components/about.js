import React from "react";
import Header from "./header";

export default function About() {
  return (
    <div className="text-center">
      <Header />
      <div className="vertical-center fadein">
        <div className="horizontal-center col-12 col-md-10 col-md-offset-1">
          <h2>About</h2>
          <p>
            I am a Software Engineering Intern at Visa and First Class Honours BSc Computer Science graduate from King's College
            London.
          </p>
        </div>
      </div>
    </div>
  );
}
