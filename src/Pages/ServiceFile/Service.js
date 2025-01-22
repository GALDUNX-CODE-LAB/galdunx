import React from "react";
import HelmetMetaData from "../../Metadata/Helmet";
import ServiceHero from "./ServiceHero";
import Envisionpage from "../HomeFile/Envisionpage";
import OurServices from "./OurServices";
import Contform from "../ContactFile/Contform";
const Service = () => {
  return (
    <main>
      <HelmetMetaData
        title="Our Services - GaldunX"
        description="Discover the range of services we offer to drive your business forward, including web development, app development, UI/UX design, and blockchain solutions."
      />
      <ServiceHero />
      <Envisionpage />
      <OurServices />
      <Contform />
    </main>
  );
};

export default Service;
