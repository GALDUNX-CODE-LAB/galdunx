import React from "react";
import realworld from "../../Components/Imagefile/realworld.png";
import missionImage from "../../Components/Imagefile/missionimg.png";
const Abouvision = () => {
  return (
    <div className="bg-[#d9d9d90c] text-center py-5 px-8  ring-gray-600 ring-1 md:px-20 md:py-[4%] rounded-3xl">
      <div className="flex items-center justify-center">
        <p className="text-white self-center text-center w-[100%] md:w-[70%]">
          What sets us apart is not just our technical prowess but also our
          unwavering focus on understanding the unique challenges and
          aspirations of our clients.
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-[3%] gap-10">
        <div className="w-[100] md:w-[45%] ">
          <img
            src={realworld}
            alt="name"
            className="outline outline-[#D3FF25] rounded-3xl py-1 px-3"
          />
        </div>
        <div className="w-[100] md:w-[45%] text-left">
          <h1 className="text-[30px] md:text-[40px]  text-[#D3FF25] mb-[1%] font-bold md:font-extrabold">
            Our Vision
          </h1>
          <p className="text-white">
            To become the foremost innovator in enhancing lives through
            cutting-edge technology, empowering our clients with sustainable
            solutions that inspire progress and elevate experiences.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row mt-[5%] gap-10">
        <div className="w-[100] md:w-[45%] text-left">
          <h1 className="text-[30px] md:text-[40px]  text-[#D3FF25] mb-[1%] font-bold md:font-extrabold">
            Our Mission
          </h1>
          <p className="text-white">
            At Galdunx, we are dedicated to leveraging our expertise in
            technology to deliver transformative solutions tailored to our
            clients' needs. We are committed to fostering long- term
            partnerships, driving innovation, and creating value that propels
            both our clients and our organization towards mutual success.
          </p>
        </div>

        <div className="w-[100] md:w-[45%] ">
          <img
            src={missionImage}
            alt="name"
            className="outline outline-[#D3FF25] rounded-3xl py-0.5 px-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Abouvision;
