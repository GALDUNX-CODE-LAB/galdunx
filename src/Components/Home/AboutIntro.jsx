import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default function AboutIntro() {
  return (
    <section className="py-20 text-white" id="about-intro">
      <div className="container">
        <div className="mb-10">
          <h2 className="underline mb-2 font-semibold">Testimonies</h2>
          <h3 className="text-3xl lg:text-6xl font-bold lg:w-[70%]">
            What{" "}
            <span className="text-pry underline underline-offset-8">
              People say
            </span>{" "}
            about us
          </h3>
        </div>

        <SwiperContainer />

        <div className="flex p-10">
          <a
            href="#contact"
            className="text-5xl lg:text-7xl font-bold border border-pry text-center w-full rounded-full p-10 hover:bg-pry hover:text-secondary transition-all duration-300"
          >
            Get Quote
          </a>
        </div>
      </div>
    </section>
  );
}

export function SwiperContainer() {
  const dum = [1, 2, 3, 3, 3, 3, 3, 3];
  return (
    <>
      <div className="wrap hidden lg:block py-16">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {dum.map((i, index) => (
            <SwiperSlide key={index}>
              <div className="card border border-neutral-500 p-5 rounded-3xl">
                <RiDoubleQuotesL className="text-pry" />
                <p className="px-4 font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam enim eaque laudantium quae, id, sunt at quibusdam
                  doloremque neque et itaque inventore ducimus. Voluptatum
                  soluta praesentium velit libero, animi ab!
                </p>
                <div className="flex justify-end">
                  <RiDoubleQuotesR className="text-pry" />
                </div>

                <div className="flex gap-3">
                  <div className="img-wrap relative h-[50px] w-[50px] rounded-full bg-black overflow-hidden">
                    <img
                      src="/og.png"
                      alt="Left"
                      className="h-full w-full absolute object-cover "
                    />
                  </div>
                  <div className="text-wrap">
                    <p className="font-semibold">John Romeo</p>
                    <small>Head of Marketing at Copper Rock</small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="wrap lg:hidden py-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {dum.map((i, index) => (
            <SwiperSlide key={index}>
              <div className="card border border-neutral-500 p-5 rounded-3xl">
                <RiDoubleQuotesL className="text-pry" />
                <p className="px-4 font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam enim eaque laudantium quae, id, sunt at quibusdam
                  doloremque neque et itaque inventore ducimus. Voluptatum
                  soluta praesentium velit libero, animi ab!
                </p>
                <div className="flex justify-end">
                  <RiDoubleQuotesR className="text-pry" />
                </div>

                <div className="flex gap-3">
                  <div className="img-wrap relative h-[50px] w-[50px] rounded-full bg-black overflow-hidden">
                    <img
                      src="/og.png"
                      alt="Left"
                      className="h-full w-full absolute object-cover "
                    />
                  </div>
                  <div className="text-wrap">
                    <p className="font-semibold">John Romeo</p>
                    <small>Head of Marketing at Copper Rock</small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
