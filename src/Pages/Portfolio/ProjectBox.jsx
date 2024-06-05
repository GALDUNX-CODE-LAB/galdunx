import { Button } from "../../Components/ui/button";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

export default function ProjectBox({ title, desc, imgSrc, link }) {
  return (
    <div className="p-5 rounded-[30px] border border-pry flex flex-col items-center text-center gap-4">
      <div className="w-full">
        <img src={imgSrc} alt="project" className="w-full max-h-[250px] " />
      </div>
      <h4 className="font-semibold text-xl text-white">{title}</h4>
      <p className="text-gray-300">{desc}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Button className="flex md:gap-2">
          View Project <MdArrowOutward />
        </Button>
      </a>
    </div>
  );
}
