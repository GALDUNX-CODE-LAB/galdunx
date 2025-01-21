import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const IndustryCard = ({ text, title }) => {
  return (
    <div className="card cursor-pointer flex flex-col group hover:bg-secondary justify-between lg:h-[250px] rounded-3xl bg-neutral-200 w-full p-10 transition-all duration-300">
      <div className="header flex justify-between">
        <h1 className="text-4xl font-semibold group-hover:text-pry transition-all duration-300">
          {title}
        </h1>{" "}
        <HiArrowUpRight
          size={30}
          className="group-hover:text-white transition-all duration-300"
        />
      </div>

      <p className="text-lg group-hover:text-gray-400 transition-all duration-300">
        {text}
      </p>
    </div>
  );
};

export default IndustryCard;
