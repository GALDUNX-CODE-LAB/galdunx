import React from "react";
import Eclipse from "../../Components/Imagefile/Ellipse 2.png";
import Eclipse2 from "../../Components/Imagefile/Ellipse 6.png";
import Abouvision from "./Abouvision";
import Abousuccess from "./Abousuccess";
import Header from "../../Components/SharedPages/Header";
const About = () => {
  return (
    <main>
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
