import React from "react";
import { think } from "../../Components/Data/Arrays";
import { FramerContainer } from "../../Components/SharedPages/FramerContainer";

const Envisionpage = () => {
  return (
    <section className="text-white py-20 bg-black bg-opacity-10">
      <div className="container grid grid-cols-1 gap-y-8 gap-x-4 md:grid-cols-3">
        {think.map((x, index) => {
          return (
            <FramerContainer
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
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
            </FramerContainer>
          );
        })}
      </div>
    </section>
  );
};

export default Envisionpage;
