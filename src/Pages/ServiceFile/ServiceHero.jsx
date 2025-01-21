import { FramerContainer, FramerHeader } from "../../Components/SharedPages/FramerContainer";
import React from "react";

function ServiceHero() {
  return (
    <div className="wrap py-32">
      <div className="container">
        <div className="text-wrap text-white">
          <FramerHeader
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{once: true}}
          className="text-4xl lg:text-6xl font-bold text-center">
            Experience the full potential <br />
            <span className="text-pry underline underline-offset-8">
              of partnering with
            </span>{" "}
            <br />
            Galdun
            <span className=" underline underline-offset-8">X</span>
          </FramerHeader>
        </div>

        <div className="wrap flex justify-end mt-10">
          <FramerContainer 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8,  delay: 0.5 }}
          viewport={{once: true}}
          className="lg:w-[50%] text-lg">
            <p className="text-gray-300">
              Discover a team of dedicated professionals who are as passionate
              about your product as you are, and explore the areas where we can
              support your success.
            </p>

            <a href="#contact">
              <button className="px-5 p-3 rounded-full bg-pry text-sm mt-3">
                {" "}
                Let's Talk
              </button>
            </a>
          </FramerContainer>
        </div>
      </div>
    </div>
  );
}

export default ServiceHero;
