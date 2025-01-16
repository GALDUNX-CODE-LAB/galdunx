import React from "react";
import Contform from "./Contform";
import HelmetMetaData from "../../Metadata/Helmet";

const Contact = () => {
  return (
    <main>
      <HelmetMetaData
        title="Contact Us - GaldunX"
        description="Get in touch with GaldunX. We are here to answer any questions you may have and to discuss how we can help your business succeed with our digital solutions."
      />

      <Contform />
    </main>
  );
};

export default Contact;
