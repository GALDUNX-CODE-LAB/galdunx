import React from "react";

import X from "../../Components/Imagefile/xc.png";
import circle from "../../Components/Imagefile/Ellipse 14.png";

export default function Header({ heading, desc }) {
  return (
    <header className="pt-10 pb-4 md:pt-20 md:pb-14 relative bg-black">
      <div className="absolute w-[100px] md:w-[300px] bottom-0 left-0 ">
        <img src={X} alt="name" />
      </div>{" "}
      <div className="absolute w-[100px] md:w-[300px] top-0 right-0 ">
        <img src={circle} alt="name" />
      </div>
      <div className="container max-w-7xl pb-14 pt-20 text-white space-y-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl md:leading-[2] font-bold ">
          {heading}
        </h1>
        <p>{desc}</p>
      </div>
    </header>
  );
}
