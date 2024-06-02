import React from "react";
import WomanImg from "../../Assets/Images/woman.png";
import { MdArrowOutward } from "react-icons/md";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function AboutIntro() {
  return (
    <section className="py-20 bg-black text-white" id="about-intro">
      <div className="container max-w-6xl">
        <div className="mb-10">
          <h2 className="text-pry underline mb-2">WHO ARE WE?</h2>
          <h3 className="text-3xl font-bold">About Us</h3>
        </div>
        <div className=" flex justify-between items-center flex-col md:flex-row gap-8">
          <div className="w-[100%] md:w-[50%]">
            <img src={WomanImg} alt="a programmer" className="w-full" />
          </div>
          <div className="w-[100%] md:w-[50%]">
            <h4 className="text-2xl font-bold mb-3">
              We Create Impactful Digital Experiences
            </h4>
            <p className="mb-4">
              GaldunX is a software development agency dedicated to transforming
              your ideas into innovative digital solutions. With a team of
              expert developers, designers, and strategists, we specialize in
              delivering web and mobile applications tailored to your business
              needs. Our mission is to empower your growth through technology,
              ensuring high quality, reliability, and efficiency in every
              project we undertake.
            </p>
            <div>
              <Link to="about">
                <Button className="flex gap-2">
                  Read More <MdArrowOutward />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
