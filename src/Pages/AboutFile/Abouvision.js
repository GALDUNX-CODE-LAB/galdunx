import React from "react";
import {FramerContainer, FramerHeader3} from "../../Components/SharedPages/FramerContainer";
import realworld from "../../Components/Imagefile/realworld.png";
const Abouvision = () => {
  return (
    <div className=" text-white bg-black bg-opacity-10 py-16">
      <div className="container">
        <div className="mb-10">
          <h2 className="underline mb-2 font-semibold">Our Mission</h2>
          <FramerHeader3
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.8 }}
            viewport={{once: true}}
          className="text-3xl lg:text-5xl font-bold lg:w-[70%]">
            To empower startups and SMEs by delivering innovative, user-focused
            <span className="text-pry underline underline-offset-8">
              design and development solutions
            </span>{" "}
            that drive growth, enhance user experiences, and create products
            that{" "}
            <span className="text-pry underline underline-offset-8">
              stand out
            </span>{" "}
            in competitive markets.
          </FramerHeader3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
          <FramerContainer
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{once: true}}
          >
            <img src={realworld} alt="name" />
          </FramerContainer>
          <div className="text-left">
            <h1 className="text-3xl lg:text-5xl mb-4 font-bold">
              About{" "}
              <span className="text-pry underline underline-offset-8">
                GaldunX
              </span>
            </h1>
            <p className="text-white text-lg">
              Established in 2023 as a web development agency, GaldunX has
              rapidly evolved into a full-service digital agency. Our mission is
              to onboard exceptional talent and deliver outstanding results for
              clients and companies. <br /> <br />
              In just a few months, we've assembled a skilled and dedicated team
              with an average of over three years of experience, all united by a
              shared commitment to building high-quality products and providing
              top-notch services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouvision;
