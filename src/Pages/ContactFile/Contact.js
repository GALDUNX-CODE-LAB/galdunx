import React from "react";
import Contform from "./Contform";
import Eclipse from "../../Components/Imagefile/Ellipse 2.png";
import Eclipse2 from "../../Components/Imagefile/Ellipse 6.png";
import Newscont from "./Newscont";
import Header from "../../Components/SharedPages/Header";
import HelmetMetaData from "../../Metadata/Helmet";

const Contact = () => {
  return (
    <main>
      <HelmetMetaData
        title="Contact Us - GaldunX"
        description="Get in touch with GaldunX. We are here to answer any questions you may have and to discuss how we can help your business succeed with our digital solutions."
      />
      <Header heading={"Contact"} desc={"Get in touch with us"} />

      <Contform />
      {/* <Newscont /> */}
    </main>
  );
};

export default Contact;
