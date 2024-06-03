import React from "react";
import think from "../../Components/Imagefile/thinker.png";

const Thinkserve = () => {
  return (
    <section className="py-20 bg-gradient-to-t from-[#0E1004] to-[#8BA12C]">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-8">
          <div>
            <img src={think} alt="name" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
              What is it like to work with{" "}
              <span className="text-[#D3FF25]"> us?</span>
            </h1>
            <p className="text-white text-[15px] md:text-[18px]">
              At Galdunx, we deliver top-tier technology solutions tailored to
              your business needs. Our expert teams excels in cutting-edge tools
              like Next.js, React, Angular, Figma, Material UI, Node.js, PHP,
              Firebase, ensuring innovative and high-quality results. We
              prioritize underdtanding your objectives and maintaining a
              transparent, client-centric approach, guaranteeing excellence from
              concept to completion. Partner with us to navigate the digital
              landscape and achieve your goals with confidence. Contact us today
              to transform your ideas into reality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thinkserve;
