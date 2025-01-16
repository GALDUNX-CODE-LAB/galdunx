import React from "react";

function AboutHero() {
  return (
    <div className="wrap py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-wrap text-white">
            <h1 className="text-4xl lg:text-6xl font-bold">
              GaldunX - Digital{" "}
              <span className="text-pry underline underline-offset-8">
                Design
              </span>{" "}
              <br />& Development <br />
              <span className=" text-pry underline underline-offset-8">
                Agency
              </span>
            </h1>

            <div className="wrap flex mt-10">
              <div className="text-lg">
                <p className="text-gray-300">
                  A team of skilled professionals combining expertise in
                  Business Analysis, UI/UX Design, and Development to create
                  products that captivate and delight users.
                </p>
              </div>
            </div>
          </div>

          <div className="img-wrap flex justify-end">
            <img src="/gdx.png" alt="GaldunX" className="w-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
