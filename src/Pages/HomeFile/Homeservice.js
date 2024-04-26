import React from "react";
import { servicebutton } from "../../Components/Data/Arrays";

const Homeservice = () => {
  return (
    <div className="py-5 px-8 md:px-20 md:py-[4%] flex-col text-center flex gap-3 items-center bg-gradient-to-b from-[#4B7B2A] to-[#343633]">
      <h1 className="text-[30px] md:text-[40px] md:w-[75%]  text-white font-bold md:font-extrabold text-center">
        Building <span className="text-[#B9DE2C]">top quality </span>software & apps for over seventeen years
      </h1>
      <div className="flex gap-5 flex-wrap self-center mt-5  items-center justify-center">
        {servicebutton.map((x) => {
          return (
            <button
              key={x.id}
              className="p-[7px] md:p-[10px] ring-2 ring-white rounded-2xl hover:ring-0 hover:text-black text-white text-[15px] hover:bg-[#B9DE2C] "
            >
              {x.name}
            </button>
          );
        })}
      </div>

      <h3 className="text-white mt-[4%] md:w-[70%] "> Revolutionize your business with our mobile app and software development expertise, delivering innovative solutions to elevate your brand and boost your bottom </h3>

      <button className="text-[17px] md:text-[25px] bg-white font-bold px-[15px] py-[10px] mt-[3%] rounded-3xl hover:bg-[#B9DE2C] hover:text-white "> More about our service </button>
    </div>
  );
};

export default Homeservice;
