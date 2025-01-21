import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPencilRuler,
  FaCube,
} from "react-icons/fa";
import Service from "./Service";
import { Link } from "react-router-dom";

function WhatWeDo() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom web applications tailored to your business needs. Scalable and secure backend systems.",
      icon: <FaLaptopCode size={60} className="text-black text-3xl" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile apps. Seamless user experiences on iOS and Android.",
      icon: <FaMobileAlt size={60} className="text-black text-3xl" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Intuitive and engaging interfaces. User-centered design for optimal usability.",
      icon: <FaPencilRuler size={60} className="text-black text-3xl" />,
    },
    {
      title: "Blockchain Development",
      description:
        "Decentralized applications (dApps) and smart contracts. Secure and transparent blockchain solutions.",
      icon: <FaCube size={60} className="text-black text-3xl" />,
    },
  ];

  return (
    <section className="py-14  text-[#262626] bg-white">
      <div className="container">
        <div className="mb-10">
          <h2 className="underline mb-2 font-semibold">WHAT WE DO</h2>
          <h3 className="text-3xl lg:text-6xl font-bold lg:w-[70%]">
            Boost your business with our key services
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {services.map((service, i) => (
            <Service
              description={service.description}
              icon={service.icon}
              title={service.title}
              index={i}
              key={service.title}
            />
          ))}
        </div>
        <div className="flex justify-center p-5">
          <Link to={"/services"} className="flex">
            <button className=" rounded-full text-sm bg-pry h-[100px] w-[100px] px-5 hover:bg-secondary hover:text-pry transition-colors duration-300">
              See All Services
            </button>
          </Link>
        </div>

        {/* Our Work Section */}
        <div className="wrap mt-16">
          <div className="flex lg:flex-nowrap flex-wrap justify-between">
            <p className="font-syne text-lg">Projects</p>
            <h1 className="text-3xl lg:text-6xl lg:w-1/2 font-semibold">
              See the results of our work across{" "}
              <span className="bg-pry underline underline-offset-8 font-syne">
                industries
              </span>
            </h1>
          </div>

          <p className="text-lg text-gray-400 text-center mt-5">
            Coming soon...
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
