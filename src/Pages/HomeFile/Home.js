import React from "react";
// import image from '../../Components/background.svg'
import Swiperpage from "./Essential";
import Essential from "./Essential";
import Vision from "./Vision";
import Homeservice from "./Homeservice";
import Tools from "./Tools";
import Calculation from "./Calculation";
import Envisionpage from "./Envisionpage";
import phoneimg from "../../Components/Imagefile/iPhone 15@2x.png";
import Hero from "../../Components/Home/Hero";
import AboutIntro from "../../Components/Home/AboutIntro";
import WhatWeDo from "../../Components/Home/WhatWeDo";
import ToolsWeUse from "../../Components/Home/ToolsWeUse";
import HelmetMetaData from "../../Metadata/Helmet";
// const image = 'https://assets-global.website-files.com/64350ccbd2c687494da08367/6437840810e84f02e12a08f2_background-grid.svg'
const Home = () => {
  return (
    <>
      <HelmetMetaData
        title="GaldunX - Home"
        description="Welcome to GaldunX, your trusted partner for cutting-edge digital solutions. We specialize in web development, app development, UI/UX design, and blockchain technology."
      />
      <Hero />
      <AboutIntro />
      <WhatWeDo />
      <ToolsWeUse />
      <Essential />
      {/* <Vision/> */}
      {/* <Homeservice /> */}
      {/* <Tools /> */}
      {/* <Calculation /> */}
      <Envisionpage />
    </>
  );
};

export default Home;
