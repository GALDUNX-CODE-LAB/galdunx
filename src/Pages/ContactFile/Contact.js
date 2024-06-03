import React from "react";
import Contform from "./Contform";
import Eclipse from "../../Components/Imagefile/Ellipse 2.png";
import Eclipse2 from "../../Components/Imagefile/Ellipse 6.png";
import Newscont from "./Newscont";
import Header from "../../Components/SharedPages/Header";

const Contact = () => {
  return (
    <main>
      <Header heading={"Contact"} desc={"Get in touch with us"} />

      <Contform />
      {/* <Newscont /> */}
    </main>
  );
};

export default Contact;
