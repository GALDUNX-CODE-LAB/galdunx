import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { FramerContainer } from "../SharedPages/FramerContainer";

export default function Industries() {
  const expertiseAreas = [
    {
      title: "SaaS",
      text: "We help you create SaaS platforms that are intuitive, scalable, and tailored to meet your users' needs, ensuring they stay engaged and satisfied with your product.",
    },
    {
      title: "Healthcare",
      text: "We develop patient-centric designs that simplify complex processes, enhance patient outcomes, and ensure secure, compliant handling of sensitive information, all while improving overall user satisfaction.",
    },
  ];

  const expertiseAreas2 = [
    {
      title: "Web3",
      text: "We craft decentralized solutions and friendly interfaces to help you unlock the full potential of Web3 technologies, fostering trust and engagement in the decentralized ecosystem.",
    },
    {
      title: "Blockchain",
      text: "Our expertise in blockchain ensures secure, transparent, and efficient solutions, enabling you to innovate with confidence while building trust in a decentralized world.",
    },
  ];

  return (
    <div className="wrap  bg-white py-16">
      <div className="container">
        <div className="mb-10">
          <h2 className="underline mb-2 font-semibold">Our Expertise</h2>
          <h3 className="text-3xl lg:text-6xl font-bold lg:w-[70%]">
            Discover the industries we specialize in
          </h3>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-5">
          <div className="flex  flex-col gap-5">
            {expertiseAreas.map((i, index) => (
              <FramerContainer
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 * index }}
                viewport={{ once: true }}
                className="card cursor-pointer group hover:bg-secondary flex flex-col justify-between lg:h-[250px] rounded-3xl bg-neutral-200 w-full p-10"
                key={index}
              >
                <div className="header flex justify-between">
                  <h1 className="text-4xl font-semibold group-hover:text-pry transition-all duration-300">
                    {i.title}
                  </h1>{" "}
                  <HiArrowUpRight
                    size={30}
                    className="group-hover:text-white transition-all duration-300"
                  />
                </div>

                <p className="text-lg group-hover:text-gray-400 transition-all duration-300">
                  {i.text}
                </p>
              </FramerContainer>
            ))}
          </div>

          <div className="flex flex-col gap-5  lg:mt-16">
            {expertiseAreas2.map((i, index) => (
              <FramerContainer
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 * index }}
                className="card cursor-pointer group hover:bg-secondary flex flex-col justify-between lg:h-[250px] rounded-3xl bg-neutral-200 w-full p-10"
                key={index}
              >
                <div className="header flex justify-between">
                  <h1 className="text-4xl font-semibold group-hover:text-pry transition-all duration-300">
                    {i.title}
                  </h1>{" "}
                  <HiArrowUpRight
                    size={30}
                    className="group-hover:text-white transition-all duration-300"
                  />
                </div>

                <p className="text-lg group-hover:text-gray-400 transition-all duration-300">
                  {i.text}
                </p>
              </FramerContainer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
