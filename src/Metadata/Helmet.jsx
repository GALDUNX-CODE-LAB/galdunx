import React from "react";
import { Helmet } from "react-helmet";
import og from "../Assets/Images/GaldunX1.png";
import favicon from "../Assets/Images/favicon.png";

const HelmetMetaData = ({ title, description }) => {
  const siteUrl = "https://www.galdunx.com";
  const defaultImage = og;
  const siteName = "GaldunX";
  const keywords =
    "GaldunX, web development, app development, UI/UX design, blockchain, digital solutions";
  const author = "GaldunX";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Favicon */}
      <link rel="icon" href={favicon} type="image/x-icon" />

      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content={defaultImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />

      {/* Additional tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
};

export default HelmetMetaData;
