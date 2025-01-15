import Service from "../../Components/Home/Service";
import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPencilRuler,
  FaCube,
  FaBook,
} from "react-icons/fa";

function OurServices() {
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
    {
      title: "Project Documentation",
      description:
        "We write documentation for any project, Ideas or enterprise application.",
      icon: <FaBook size={60} className="text-black text-3xl" />,
    },
  ];

  return (
    <section className="py-14  text-[#262626] bg-white">
      <div className="container">
        <div className="mb-10">
          <h2 className="underline mb-2 font-semibold">Our service</h2>
          <h3 className="text-3xl lg:text-6xl font-bold lg:w-[70%]">
            Here's a list of what we can do for you
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {services.map((service) => (
            <Service
              description={service.description}
              icon={service.icon}
              title={service.title}
              key={service.title}
            />
          ))}
        </div>

        {/* Our Work Section */}
        <div className="wrap mt-16">
          <div className="flex gap-5 lg:flex-nowrap flex-wrap justify-between">
            <p className="font-syne text-lg">Portfolio</p>
            <h1 className="text-3xl lg:text-6xl lg:w-1/2 font-semibold">
              View Our Previous Work
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

export default OurServices;
