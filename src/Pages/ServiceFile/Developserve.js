import React from "react";
import { developmentServices } from "../../Components/Data/Arrays";

const Designservice = () => {
  return (
    <section className="py-16 md:py-20 bg-black text-white">
      <div className="container max-w-7xl">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#D3FF25] ">Development</span> Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {developmentServices.map((x) => {
            return (
              <div
                key={x.id}
                className="bg-gradient-to-bl from-[#D3FF25] to-[#333131B2] p-[2px]  rounded-xl"
              >
                <div className="bg-black p-4 rounded-xl w-[100%] h-[100%]">
                  <h4 className="font-semibold text-xl mb-3">{x.title}</h4>
                  <p className="text-gray-300">{x.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Designservice;
