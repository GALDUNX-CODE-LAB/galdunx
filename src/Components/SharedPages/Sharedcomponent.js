import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { CTA } from "./CTA";

const Sharedcomponent = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <CTA />
      <Footer />
    </>
  );
};

export default Sharedcomponent;
