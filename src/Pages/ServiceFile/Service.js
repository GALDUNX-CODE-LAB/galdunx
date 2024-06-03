import React from "react";
import Designservice from "./Designservice";
import Thinkserve from "./Thinkserve";
import Serveteam from "./Serveteam";
import Developserve from "./Developserve";
import Approachserve from "./Approachserve";
import Header from "../../Components/SharedPages/Header";
const Service = () => {
  return (
    <main>
      <Header
        heading={"Our Exceptional Digital Services"}
        desc=" Discover the range of services we offer to drive your business forward"
      />
      <Designservice />
      <Thinkserve />
      <Serveteam />
      <Developserve />
      <Approachserve />
    </main>
  );
};

export default Service;
