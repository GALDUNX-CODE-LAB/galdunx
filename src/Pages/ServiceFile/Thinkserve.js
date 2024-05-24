import React from "react";
import think from "../../Components/Imagefile/thinker.png";

const Thinkserve = () => {
  return (
    <div className="py-5 px-8 md:px-20 md:py-[4%] bg-gradient-to-t from-[#0E1004] to-[#8BA12C] flex flex-col md:flex-row items-center justify-between">
      <div className="w-[100%] md:w-[45%]">
        <img src={think} alt="name" />
      </div>
      <div className="w-[100%] md:w-[45%]">
        <h1 className="text-[30px] lg:text-[48px] md:text-[40px] font-bold text-white mb-[5%]">
          What Is It Like To Work With <span className="text-[#D3FF25]"> Us</span>
        </h1>
        <p className="text-white text-[15px]">
         At Galdunx, we deliver top-tier technology solutions tailored to your business needs. Our expert teams excels in cutting-edge
         tools like Next.js, React, Angular, Figma, Material UI, Node.js, PHP, Firebase, ensuring innovative and high-quality results. We 
         prioritize underdtanding your objectives and maintaining a transparent, client-centric approach, guaranteeing excellence from concept to completion.
         Partner with us to navigate the digital landscape and achieve your goals with confidence. Contact us today to transform your ideas into reality
        </p>
      </div>
    </div>
  );
};

export default Thinkserve;
