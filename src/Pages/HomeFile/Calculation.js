import React from "react";
import { records } from "../../Components/Data/Arrays";

const Calculation = () => {
  return (
    <div className="py-5 px-8 md:px-20 md:py-[4%] bg-gradient-to-bl from-[#173105] relative to-[#000000] flex flex-wrap justify-between">
      {records.map((x) => {
        return (
          <div key={x.id}>
            <h1 className="uniqueone text-white text-[60px] font-extrabold">
              {x.value}
            </h1>
            <h3 className="text-white">{x.name}</h3>
          </div>
        );
      })}
      <div className="absolute uniqueone rotateimage top-[5%] text-[40px]  font-extrabold right-[5%]">
        +
      </div>
      <div className="absolute  uniqueone  bottom-[3%] left-[5%] text-[40px]  font-extrabold right-[5%]">
        +
      </div>
    </div>
  );
};

export default Calculation;
