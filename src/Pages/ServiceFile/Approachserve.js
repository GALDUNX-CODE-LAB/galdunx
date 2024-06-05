import React from "react";
import shake from "../../Components/Imagefile/shakehand.png";
const Approachserve = () => {
  return (
    <section className="py-20 bg-gradient-to-tr from-[#000000] to-[#173105]">
      <div className="container max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-5 md:gap-0 md:justify-between ">
          <div className="w-[100%] md:w-[45%]">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
              We <span className="text-[#D3FF25] ">Tailor</span> Our Approach To
              Your Needs
            </h1>
            <p className="text-white text-[15px] md:text-[18px]">
              Your vision is our blueprint at Galdunx. We believe that every
              client is unique, and so is every project. By deeply understanding
              your specific goals and challenges, we tailor our approach to meet
              your unique needs, ensuring that every solution is perfectly
              customized for your business. Our commitment to personalization
              means that each project is meticulously aligned with your
              objectives, delivering results that not meets but exceed your
              expectations
            </p>
          </div>
          <div className="w-[100%] md:w-[45%] h-[400px]">
            <img src={shake} alt="name" className="h-[100%] w-[100%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approachserve;
