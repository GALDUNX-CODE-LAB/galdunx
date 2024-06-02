import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPencilRuler,
  FaCube,
  FaNetworkWired,
} from "react-icons/fa";
import Service from "./Service";

function WhatWeDo() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom web applications tailored to your business needs. Scalable and secure backend systems.",
      icon: <FaLaptopCode className="text-black text-3xl" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile apps. Seamless user experiences on iOS and Android.",
      icon: <FaMobileAlt className="text-black text-3xl" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Intuitive and engaging interfaces. User-centered design for optimal usability.",
      icon: <FaPencilRuler className="text-black text-3xl" />,
    },
    {
      title: "Blockchain Development",
      description:
        "Decentralized applications (dApps) and smart contracts. Secure and transparent blockchain solutions.",
      icon: <FaCube className="text-black text-3xl" />,
    },
  ];

  return (
    <section className="py-14 bg-black text-white">
      <div className="container max-w-6xl">
        <div className="mb-10">
          <h2 className="text-pry underline mb-2">WHAT WE DO</h2>
          <h3 className="text-3xl font-bold">Our Services</h3>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {services.map((service) => (
            <Service
              description={service.description}
              icon={service.icon}
              title={service.title}
              key={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
