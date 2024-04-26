import React from "react";
import shake from "../../Components/Imagefile/shakehand.png";
const Approachserve = () => {
  return (
    <div className="py-5 px-8 md:px-20 md:py-[4%] flex flex-col-reverse md:flex-row items-center justify-center gap-5 md:gap-0 md:justify-between bg-gradient-to-tr from-[#000000] to-[#173105]">
      <div className="w-[100%] md:w-[45%]">
        <h1 className="text-[30px] lg:text-[48px] md:text-[40px] font-bold text-white mb-[5%]">
          We <span className="text-[#B9DE2C] ">Tailor</span> Our Approach To Your Needs
        </h1>
        <p className="text-white">
          okay so my bro be liking rubbish songs and its fucking annoying but
          you know what life is a fucking gift and those gift are wonderfu and
          elegant. ayyy shout out to dem mandem yea , bruv is a fucking saint
          and a ducking person dilg like a bullex and a raskal balance the joy
          in your life and stay happy okay okay so my bro be liking rubbish
          songs and its fucking annoying but you know what life is a fucking
          gift and those gift are wonderfu and elegant. ayyy shout out to dem
          mandem yea , bruv is a fucking saint and a ducking person dilg like a
          bullex and a raskal balance the joy in your life and stay happy okay
        </p>
      </div>
      <div className="w-[100%] md:w-[45%] h-[400px]">
        <img src={shake} alt="name" className="h-[100%] w-[100%]"/>
      </div>
    </div>
  );
};

export default Approachserve;
