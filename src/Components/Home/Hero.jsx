import React from "react";

function Hero() {
  return (
    <div className="wrap py-32">
      <div className="container">
        <div className="wrap flex flex-wrap lg:flex-nowrap lg:gap-3 mb-5">
          <p className="text-white text-lg">Your go-to team for: </p>
          <div className="wrap space-x-3">
            <button className="px-2 text-sm rounded-full bg-white text-black">
              Website
            </button>
            <button className="px-2 text-sm rounded-full bg-white text-black">
              Web/Mobile App
            </button>
            <button className="px-2 text-sm rounded-full bg-white text-black">
              Designs
            </button>
          </div>
        </div>

        <div className="text-wrap text-white">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Innovative Design & Development Solutions{" "}
            <span className="text-pry underline underline-offset-8">
              Empowering
            </span>{" "}
            Exceptional SMEs &{" "}
            <span className=" underline underline-offset-8">Startups</span>
          </h1>
        </div>

        <div className="wrap flex justify-end mt-10">
          <div className="lg:w-[50%] text-lg">
            <p className="text-gray-300">
              <span className="text-pry underline underline-offset-8">
                Driving your growth{" "}
              </span>
              by expanding market share, securing funding, and surpassing
              competitors. Powered by a 98%{" "}
              <span className="text-pry underline underline-offset-8">
                client satisfaction
              </span>
              rate, over $1B in client investments, and a commitment to
              user-focused innovation.
            </p>

            <a href="#contact">
              {" "}
              <button className="px-5 p-3 rounded-full bg-pry text-sm mt-3 font-semibold">
                {" "}
                Let's Talk
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
