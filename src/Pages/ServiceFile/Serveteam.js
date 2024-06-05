import React from "react";
import xright from "../../Components/Imagefile/xright.png";
import { Teamserve } from "../../Components/Data/Arrays";

const Serveteam = () => {
  return (
    <section className="py-20 bg-black text-white relative">
      <div className="absolute w-[100px] md:w-[250px] bottom-0 right-0 ">
        <img src={xright} alt="name" />
      </div>
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {Teamserve.map((x) => {
            return (
              <div key={x.id}>
                <div className="mb-6">
                  <img src={x.image} />
                </div>
                <h4 className="font-semibold text-xl mb-3">{x.name}</h4>
                <p className="text-gray-300">{x.writeup}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Serveteam;
