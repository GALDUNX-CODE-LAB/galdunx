import React from "react";
import Eclipse from '../../Components/Imagefile/Ellipse 2.png'
import Eclipse2 from '../../Components/Imagefile/Ellipse 6.png'
import Abouvision from "./Abouvision";
import Abousuccess from "./Abousuccess";
const About = () => {
  return (
    <div className="bg-[#1C1C1C] relative">
        <div className="absolute top-[40%] right-0">
            <img src={Eclipse}/>
        </div>
        <div className="absolute bottom-[20%] left-0">
            <img src={Eclipse2}/>
        </div>
      <div className="text-center flex flex-col justify-center py-5 px-8 md:px-2  md:py-[4%]">
        <h1 className="text-[30px] md:text-[40px]  text-[#D3FF25] mb-[1%] font-bold md:font-extrabold text-center">
          About Us
        </h1>
      </div>
      <Abouvision/>
      <Abousuccess/>
    </div>
  );
};

export default About;
