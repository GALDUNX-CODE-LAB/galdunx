import React from "react";
import Abouvision from "./Abouvision";
import HelmetMetaData from "../../Metadata/Helmet";
import AboutHero from "./AboutHero";
import AboutIntro from "../../Components/Home/AboutIntro";
import Contform from "../ContactFile/Contform";
const About = () => {
  return (
    <main>
      <HelmetMetaData
        title="About Us - GaldunX"
        description="Learn more about GaldunX, our mission, vision, and the team that drives our success. We are dedicated to delivering top-notch digital solutions."
      />
      <AboutHero />
      <Abouvision />
      <AboutIntro />
      <Contform />
    </main>
  );
};

export default About;
