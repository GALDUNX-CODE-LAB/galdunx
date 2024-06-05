import React from "react";
import Eclipse from "../../Components/Imagefile/Ellipse 2.png";
import Eclipse2 from "../../Components/Imagefile/Ellipse 6.png";
import Abouvision from "./Abouvision";
import Abousuccess from "./Abousuccess";
import Header from "../../Components/SharedPages/Header";
import HelmetMetaData from "../../Metadata/Helmet";
const About = () => {
  return (
    <main>
      <HelmetMetaData
        title="About Us - GaldunX"
        description="Learn more about GaldunX, our mission, vision, and the team that drives our success. We are dedicated to delivering top-notch digital solutions."
      />
      <Header
        heading="Who We Are"
        desc="Learn more about our journey, our values, and the dedicated team behind Galdunx"
      />
      <Abouvision />
      <Abousuccess />
    </main>
  );
};

export default About;
