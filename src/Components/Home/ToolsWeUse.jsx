import React from "react";
import Figma from "../../Assets/Images/figma.svg";
import NextIcon from "../../Assets/Images/next.svg";
import Solidity from "../../Assets/Images/solidity.svg";
import ReactIcon from "../../Assets/Images/react-native.svg";
import ToolBox from "./ToolBox";

function ToolsWeUse() {
  const tools = [
    {
      title: "Fullstack Applications",
      description:
        "We build robust, scalable fullstack applications using Next.js, ensuring performance and SEO optimization.",
      icon: NextIcon,
      alt: "Next.js",
    },
    {
      title: "UI/UX Web and Mobile Design",
      description:
        "Our team uses Figma to create intuitive and engaging user interfaces, ensuring a seamless user experience.",
      icon: Figma,
      alt: "Figma",
    },
    {
      title: "App Development",
      description:
        "We develop cross-platform mobile applications using React Native, delivering native performance and reliability.",
      icon: ReactIcon,
      alt: "React Native",
    },
    {
      title: "Blockchain Development",
      description:
        "Our experts utilize Solidity to develop smart contracts and decentralized applications, ensuring security and efficiency.",
      icon: Solidity,
      alt: "Solidity",
    },
  ];

  return (
    <section className="py-14 bg-black text-white">
      <div className="container max-w-6xl">
        <div className="mb-10">
          <h2 className="text-pry underline mb-2">TOOLS WE USE</h2>
          <h3 className="text-3xl font-bold">Our Toolkit</h3>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {tools.map((tool) => (
            <ToolBox
              key={tool.title}
              alt={tool.alt}
              description={tool.description}
              src={tool.icon}
              title={tool.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolsWeUse;
