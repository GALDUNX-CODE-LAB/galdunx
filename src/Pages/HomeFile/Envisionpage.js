import React from "react";
import { think } from "../../Components/Data/Arrays";

const Envisionpage = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container max-w-6xl grid grid-cols-1 gap-y-8 gap-x-4 md:grid-cols-3">
        {think.map((x, index) => {
          return (
            <div
              key={x.id}
              className={`flex flex-col gap-4 items-center text-center py-8 border-r-0 md:border-r last:border-r-0 ${
                index + 1 === 1 || index + 1 === 2 ? "md:pr-4" : ""
              }`}
            >
              <div>
                <img src={x.image} alt={x.name} className="w-full" />
              </div>
              <h4 className="font-semibold text-xl">{x.name}</h4>
              <p className="text-gray-300">{x.writeup}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Envisionpage;
