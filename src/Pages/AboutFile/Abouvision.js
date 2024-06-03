import React from "react";
import realworld from "../../Components/Imagefile/realworld.png";
import missionImage from "../../Components/Imagefile/mission.png";
const Abouvision = () => {
  return (
    <div className="bg-[#1C1C1C] py-20">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img src={realworld} alt="name" />
          </div>
          <div className="text-left">
            <h1 className="text-3xl text-[#D3FF25] mb-4 font-bold">
              Our Vision
            </h1>
            <p className="text-white">
              Our vision is to be a global leader in technology solutions,
              driving innovation and transforming the digital landscape. We
              aspire to empower businesses and individuals with cutting-edge
              technology that enhances efficiency, fosters creativity, and
              facilitates growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl text-[#D3FF25] mb-4 font-bold">
              Our Mission
            </h1>
            <p className="text-white">
              Our mission is to deliver exceptional technology solutions that
              meet the evolving needs of our clients. We are committed to
              excellence, innovation, and customer satisfaction. Through our
              comprehensive suite of services, we aim to provide businesses with
              the tools they need to succeed in a competitive digital world.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <img src={missionImage} alt="name" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouvision;
