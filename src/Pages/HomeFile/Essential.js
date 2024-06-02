import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCode,
  FaPencilRuler,
  FaRegLightbulb,
  FaRocket,
  FaSearch,
  FaVials,
} from "react-icons/fa";
import { essential } from "../../Components/Data/Arrays";
import { MdArrowOutward } from "react-icons/md";
import { Button } from "../../Components/ui/button";
import { Link } from "react-router-dom";

const Essential = () => {
  const processes = [
    {
      id: 1,
      title: "Discovery",
      description:
        "We begin by deeply understanding your business needs, project goals, and target audience. This foundational step ensures we are aligned with your vision and sets the stage for a successful project.",
      icon: <FaSearch />,
    },
    {
      id: 2,
      title: "Planning",
      description:
        "Our team strategizes the project roadmap, defining clear milestones and deliverables. This phase involves meticulous planning to ensure a smooth development process and timely delivery.",
      icon: <FaRegLightbulb />,
    },
    {
      id: 3,
      title: "Design",
      description:
        "We focus on creating intuitive and engaging designs that provide an excellent user experience. Our design process includes wireframing, prototyping, and iterating based on your feedback.",
      icon: <FaPencilRuler />,
    },
    {
      id: 4,
      title: "Development",
      description:
        "Our development phase is dedicated to building scalable and robust solutions. Using the latest technologies, we ensure that your application is efficient, secure, and ready for growth.",
      icon: <FaCode />,
    },
    {
      id: 5,
      title: "Testing",
      description:
        "We conduct rigorous testing to ensure the highest quality. This includes functionality, performance, and security tests to make sure your application meets all standards and performs flawlessly.",
      icon: <FaVials />,
    },
    {
      id: 6,
      title: "Launch",
      description:
        "After thorough testing, we deploy your solution and provide ongoing support. We ensure a smooth launch and are available to assist with any post-launch needs, ensuring your project's success.",
      icon: <FaRocket />,
    },
  ];
  return (
    <section className="bg-black py-10">
      <div className="container max-w-6xl flex-col md:flex-row flex gap-10  md:items-center">
        <div className="w-[100%] md:w-[25%]  text-white space-y-5">
          <h3 className="text-3xl font-bold">Our Creative Workflow</h3>
          <div>
            <Link to="/contact">
              <Button className="flex gap-2 w-auto">
                Get In Touch <MdArrowOutward />
              </Button>
            </Link>
          </div>
          {/* <button className='bg-[#7a58ff] px-4 py-2.5 rounded-3xl text-white text-[25px] md:text-sm'> </button>÷ */}
        </div>
        <div className="w-[100%] md:w-[75%] flex items-center  py-3 px-3  flex-col gap-7  first">
          {processes.map((process) => {
            return (
              <div
                key={process.id}
                className="flex gap-10 w-full  text-gray-400 hover:text-white"
              >
                <div className="p-[20px] h-[80px] rounded-full ring-2 items-center ring-gray-400 hover:ring-white text-[40px]">
                  {process.icon}
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <h4 className="text-2xl font-bold mb-2">{process.title}</h4>
                    <button>{process.id}</button>
                  </div>
                  <p>{process.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Essential;
