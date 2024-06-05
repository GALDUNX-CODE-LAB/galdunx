import React from "react";

import movieshow from "../../Assets/Images/web1.png";
import imageGen from "../../Assets/Images/web3.png";
import nft from "../../Assets/Images/web4.png";
import ecommerce from "../../Assets/Images/web2.png";
import travel from "../../Assets/Images/ui1.png";
import logo from "../../Assets/Images/logo1.png";
import fruits from "../../Assets/Images/ui2.png";
import therapy from "../../Assets/Images/ui3.png";
import branding from "../../Assets/Images/graphic1.png";

import ProjectBox from "./ProjectBox";

export default function Projects() {
  const projects = [
    {
      id: 1,
      category: "Web Development",
      title: "NFT Marketplace",
      description:
        "A decentralized NFT marketplace allowing users to buy, sell, and mint unique digital assets.",
      imageUrl: nft,
      projectLink: "",
    },
    {
      id: 2,
      category: "Web Development",
      title: "Movie Streaming Platform",
      description:
        "A movie streaming platform with a vast library of films and TV shows, featuring personalized recommendations and user reviews.",
      imageUrl: movieshow,
      projectLink: "https://moviesshow.vercel.app/",
    },
    {
      id: 3,
      category: "Web Development",
      title: "AI Image Generator",
      description:
        "An AI-powered platform that generates high-quality images based on user inputs, utilizing advanced machine learning algorithms.",
      imageUrl: imageGen,
      projectLink: "https://pixelart-ai.web.app/",
    },
    {
      id: 4,
      category: "Web Development",
      title: "E-commerce Website",
      description:
        "A fully functional e-commerce website with a seamless shopping experience and secure payment integration.",
      imageUrl: ecommerce,
      projectLink: "",
    },
    {
      id: 5,
      category: "UI/UX Design",
      title: "Travel Mobile App UI/UX",
      description:
        "A user-friendly travel mobile app UI/UX design for booking flights, hotels, and rental cars.",
      imageUrl: travel,
      projectLink: "",
    },
    {
      id: 6,
      category: "UI/UX Design",
      title: "Therapy AI Mobile App UI/UX",
      description:
        "An intuitive UI/UX design for a mobile app offering AI-powered therapy sessions and mental health resources.",
      imageUrl: therapy,
      projectLink: "",
    },
    {
      id: 7,
      category: "UI/UX Design",
      title: "Fruit Finder UI/UX",
      description:
        "A clean and engaging UI/UX design for an app that helps users find and identify different types of fruits.",
      imageUrl: fruits,
      projectLink: "",
    },
    {
      id: 8,
      category: "Graphic Design",
      title: "Branding Package",
      description:
        "A comprehensive branding package including logo, business cards, and marketing materials for a startup.",
      imageUrl: branding,
      projectLink: "",
    },
    {
      id: 9,
      category: "Logo Design",
      title: "Tech Startup Logo",
      description:
        "A modern and dynamic logo designed for a tech startup, capturing innovation and forward-thinking.",
      imageUrl: logo,
      projectLink: "",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectBox
            desc={project.description}
            title={project.title}
            imgSrc={project.imageUrl}
            link={project.projectLink}
            key={project.id}
          />
        ))}
      </div>
    </section>
  );
}
