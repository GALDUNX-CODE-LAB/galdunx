import React from "react";

import { Button } from "../ui/button";

import { FaCircleArrowDown } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <section className="hero relative py-28 min-h-screen text-white text-center">
      <div className="container max-w-3xl py-20 mx-auto">
        <div className="w-full space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-6xl leadind-[2] font-semibold">
            Software solutions for a connected world
          </h1>
          <p>
            Expert development for web, mobile, and enterprise applications.
            From concept to completion, we bring your Ideas to life
          </p>
          <div className="flex gap-3 justify-center">
            <Button variant="outline" className="flex gap-2">
              Demo <MdArrowOutward />
            </Button>
            <Button className="flex gap-2">
              Get Started <MdArrowOutward />
            </Button>
          </div>
        </div>
      </div>
      <ScrollLink to="about-intro" smooth={true} offset={-64}>
        <button className="absolute left-1/2 translate-x-1/2 bottom-14">
          <FaCircleArrowDown className="text-pry text-2xl" />
        </button>
      </ScrollLink>
    </section>
  );
}

export default Hero;
