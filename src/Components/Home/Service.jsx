import React from "react";
import FramerContainer from "../SharedPages/FramerContainer";

const Service = ({ icon, title, description, index }) => {
  return (
    <FramerContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: index * 0.2 }}        
        viewport={{once: true}}
    className="flex lg:flex-nowrap flex-wrap lg:flex-row flex-col-reverse lg:items-center border p-5 rounded-xl hover:bg-[#262626] gap-4 group transition-colors duration-300">
      <div className="wrap">
        <h4 className="font-semibold text-xl group-hover:text-pry transition-colors duration-300">
          {title}
        </h4>
        <p className="group-hover:text-gray-300 transition-colors duration-300 text-black">
          {description}
        </p>
      </div>
      <div className="wrap">
        <div className="group-hover:bg-white transition-colors duration-300 bg-pry w-28 h-28 flex items-center justify-center rounded-full ">
          {icon}
        </div>
      </div>
    </FramerContainer>
  );
};

export default Service;
