import React from "react";
import { dservice } from "../../Components/Data/Arrays";

const Designservice = () => {
  return (
    <div className="py-5 px-8 md:px-20 md:py-[4%] bg-[#1C1C1C]">
      <h1 className="mb-[3%] text-white text-[30px] md:text-[48px] font-extrabold">
        <span className="text-[#D3FF25] ">Design</span> Service
      </h1>

      <div className="flex flex-col md:flex-row flex-wrap gap-5 md:gap-10">
        {dservice.map((x) => {
          return (

            <div key={x.id} className="bg-gradient-to-bl from-[#D3FF25] to-[#333131B2] p-[2px]  rounded-xl w-[100%] md:w-[45%]">
                <div className="bg-[#1C1C1C] p-[5%] rounded-xl w-[100%] h-[100%]">
                    <h1 className="mb-[5%] text-white text-[20px] font-bold md:text-[30px]">{x.name}</h1>
              <p className="text-[#BCB2B2] text-[15px] md:text-[18px] w-[100%] lg:w-[70%]">
                {x.writeup}
              </p>
                </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Designservice;
