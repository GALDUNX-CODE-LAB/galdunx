import React from "react";
import { successdiv } from "../../Components/Data/Arrays";
import AliceCarousel from "react-alice-carousel";
import xright from "../../Components/Imagefile/xright.png";

const Abousuccess = () => {
  const items = successdiv.map((x) => {
    return (
      <div
        key={x.id}
        className="relative text-white ml-10 my-7 ring-gray-600 ring-1 rounded-[36px] text-center shadow-md py-6 px-4"
      >
        <img src={x.image} alt={x.name} className="block w-[100%] mb-6" />
        <h4 className="font-semibold text-xl mb-3">{x.name}</h4>
        <p className="text-gray-300">{x.writeup}</p>
      </div>
    );
  });
  const responsive = {
    0: {
      items: 1,
    },
    768: {
      items: 3,
    },
  };
  return (
    <section className="py-14 bg-black text-white relative">
      {/* <div className="absolute top-[10%] left-15">
        <img src={ximage} />
      </div> */}

      <div className="container max-w-7xl">
        <div className="mb-10">
          <h2 className="text-pry underline mb-2">WHAT WE DO</h2>
          <h3 className="text-3xl font-bold">Our Services</h3>
        </div>
      </div>

      <div className="absolute w-[100px] md:w-[250px] bottom-[-5%] md:bottom-[-20%] right-0 ">
        <img src={xright} alt="name" />
      </div>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1500}
        animationDuration={1000}
        disableDotsControls
        responsive={responsive}
        items={items}
        autoPlay
        disableButtonsControls
        // renderNextButton={()=>{
        //     return <FaArrowRight className='abolute right-0 bottom-[50%]'/>
        // }}
      />
    </section>
  );
};

export default Abousuccess;
