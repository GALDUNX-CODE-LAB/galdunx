import Header from "../../Components/SharedPages/Header";
import React from "react";
import Projects from "./Projects";
import HelmetMetaData from "../../Metadata/Helmet";

function Portfolio() {
  return (
    <main className="bg-black">
      <HelmetMetaData
        title="Our Portfolio - GaldunX"
        description="Explore our portfolio to see the diverse range of projects we have successfully delivered, including web apps, UI/UX designs, branding, and more."
      />
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
