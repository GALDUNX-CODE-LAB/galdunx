import React from "react";
// import image from '../../Components/background.svg'
import Essential from "./Essential";
import Hero from "../../Components/Home/Hero";
import AboutIntro from "../../Components/Home/AboutIntro";
import WhatWeDo from "../../Components/Home/WhatWeDo";
import Industries from "../../Components/Home/Industries";
import HelmetMetaData from "../../Metadata/Helmet";
import Contform from "../ContactFile/Contform";
// const image = 'https://assets-global.website-files.com/64350ccbd2c687494da08367/6437840810e84f02e12a08f2_background-grid.svg'
const Home = () => {
  return (
    <>
      <HelmetMetaData
        title="GaldunX - Home"
        description="Welcome to GaldunX, your trusted partner for cutting-edge digital solutions. We specialize in web development, app development, UI/UX design, and blockchain technology."
      />
      <Hero />
      <WhatWeDo />
      <Industries />
      <AboutIntro />
      {/* <ToolsWeUse /> */}
      <Essential />
      {/* <Vision/> */}
      {/* <Homeservice /> */}
      {/* <Tools /> */}
      {/* <Calculation /> */}
      {/* <Envisionpage /> */}
      <Contform />
    </>
  );
};

export default Home;
