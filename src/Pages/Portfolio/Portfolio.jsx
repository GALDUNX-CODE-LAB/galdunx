import Header from "../../Components/SharedPages/Header";
import React from "react";
import Projects from "./Projects";

function Portfolio() {
  return (
    <main className="bg-black">
      <Header
        heading={"Explore Our Portfolio"}
        desc={
          "Discover the range of projects we have worked on and see how we have helped our clients achieve their goals."
        }
      />
      <div className="container max-w-7xl">
        <Projects />
      </div>
    </main>
  );
}

export default Portfolio;
