import { CiBoxList } from "react-icons/ci";
import {
  FaCalendar,
  FaCode,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { PiDiamondsFourDuotone } from "react-icons/pi";
import { IoRocketSharp, IoSettingsSharp } from "react-icons/io5";
import { GiBleedingEye, GiLightBulb } from "react-icons/gi";
import { TbBuildingFactory } from "react-icons/tb";
import nodelogo from "../Imagefile/nodeess.png";
import awslogo from "../Imagefile/awsess.png";
import javascript from "../Imagefile/javascript.png";
import buildlogo from "../Imagefile/build.png";
import bulblogo from "../Imagefile/bulblogo.png";
import envision from "../Imagefile/envisiongrey.png";
import prooflogo from "../Imagefile/proof.png";
import speakerlogo from "../Imagefile/speaker.png";
import brightlogo from "../Imagefile/bright.png";
import graphics1 from "../Imagefile/imagedes1.png";
import graphics2 from "../Imagefile/imagedes3.png";
import graphics3 from "../Imagefile/imagedes2.png";
import php from "../Imagefile/phpess.png";
import angular from "../Imagefile/angular.png";
import htmlcss from "../Imagefile/htmlcss.png";
import java from "../Imagefile/java.png";
import reactlogo from "../Imagefile/reactess.png";
import { TiPlusOutline } from "react-icons/ti";

export const navlinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Service",
    link: "/service",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },
];
export const socialLinks = [
  {
    id: 1,
    name: "facebook",
    logo: <FaFacebook />,
  },
  {
    id: 2,
    name: "instagram",
    logo: <FaInstagram />,
  },
  {
    id: 3,
    name: "twitter",
    logo: <FaTwitter />,
  },
  {
    id: 4,
    name: "linkedin",
    logo: <FaLinkedin />,
  },
];
export const essential = [
  {
    id: 1,
    name: "Planning",
    writeup:
      "At the start of each project, we work with our customers to build a solid project plan. The initial Scope document can come from the client or a combined process of phone calls and in-person meetings.",
    image: <FaCalendar />,
  },
  {
    id: 2,
    name: "Wireframing",
    writeup:
      "Once the project plan and scope have been finalized, our wireframing team takes over to determine the placement of all objects on each page of the application, whether it is a consumer mobile app or a backend business application. This is an important stage where we come to a final agreement on what will be placed on each page for the User to access.",
    image: <CiBoxList />,
  },
  {
    id: 3,
    name: "Design",
    writeup:
      "After the wireframes for all pages have been finalized, our design team takes over to create the final appearance and functionality of the application. This is an exciting stage of the project where you can see the entire application come to life. We will provide you with clickable versions to fully experience everything the user goes through before we begin coding.",
    image: <PiDiamondsFourDuotone />,
  },
  {
    id: 4,
    name: "Code",
    writeup:
      "With the wireframes and designs finalized, we begin coding the application to make it functional. As an Agile development shop, we break down the project into baskets of features called Sprints. This approach allows our customers to regularly review the progress of their software development process and provide feedback at the end of each Sprint. We value your input and involvement throughout the entire development process.",
    image: <FaCode />,
  },
  {
    id: 5,
    name: "Testing",
    writeup:
      "The testing process for mobile and software applications is a crucial step in ensuring that the product is functional, reliable, and user-friendly. Typically, the process involves several stages, where various techniques and tools are employed to identify defects, bugs, and usability issues. The goal is to detect and correct any issues before the application is released to the public, ultimately improving the user experience and ensuring the success of the product.",
    image: <IoSettingsSharp />,
  },
  {
    id: 6,
    name: "Development",
    writeup:
      "After the application is completed, approved by our internal QA, project management and the client – we are ready to deploy the code to its final destination. Hosting options vary from client-owned servers to web or cloud hosting. We guide clients through the options and handle the final stages.",
    image: <IoRocketSharp />,
  },
];

export const visionarray = [
  {
    id: 1,
    name: "We Think With You",
    writeup:
      "Lorem ipsum dolor sit, . Officia neque consectetur,  expedita nihil similique mollitia, dignissimos voluptas tenetur perferendis nostrum quis! Vero vitae aperiam eos excepturi quia numquam modi dolores",
    image: <GiLightBulb />,
  },
  {
    id: 2,
    name: "We Envision With You",
    writeup:
      "Lorem ipsum dolor sit, . Officia neque consectetur,  expedita nihil similique mollitia, dignissimos voluptas tenetur perferendis nostrum quis! Vero vitae aperiam eos excepturi quia numquam modi dolores",
    image: <GiBleedingEye />,
  },
  {
    id: 3,
    name: "We Build With You",
    writeup:
      "Lorem ipsum dolor sit, . Officia neque consectetur,  expedita nihil similique mollitia, dignissimos voluptas tenetur perferendis nostrum quis! Vero vitae aperiam eos excepturi quia numquam modi dolores",
    image: <TbBuildingFactory />,
  },
];
export const servicebutton = [
  {
    id: 1,
    name: "Web Application",
  },
  {
    id: 2,
    name: "Mobile Appilication",
  },
  {
    id: 3,
    name: "Business Platforms",
  },
  {
    id: 4,
    name: "UI/UX Design",
  },
  {
    id: 5,
    name: "Software Support",
  },
];

export const worktools = [
  {
    id: 1,
    logo: nodelogo,
  },
  {
    id: 2,
    logo: awslogo,
  },
  {
    id: 3,
    logo: javascript,
  },
  {
    id: 4,
    logo: reactlogo,
  },
  {
    id: 5,
    logo: php,
  },
  {
    id: 6,
    logo: htmlcss,
  },
  {
    id: 7,
    logo: angular,
  },
  {
    id: 8,
    logo: java,
  },
];

export const records = [
  {
    id: 1,
    value: 8,
    name: "Years Experience",
    icon: <TiPlusOutline />,
  },
  {
    id: 2,
    value: "22 +",
    name: "Global Suppoters",
    icon: "",
  },
  {
    id: 3,
    value: 63,
    name: "Completed Projects",
    icon: <TiPlusOutline />,
  },
  {
    id: 4,
    value: "56 +",
    name: "Public Repository",
    icon: "",
  },
];

export const think = [
  {
    id: 1,
    name: "We Think Strategically",
    writeup:
      "We delve into understanding your ideas and business objectives. This phase involves brainstorming and concept development to align with your vision.",
    image: bulblogo,
  },
  {
    id: 2,
    name: "We Envision the Future",
    writeup:
      "In this phase, we visualize the project roadmap and design prototypes. We ensure that the envisioned solution is practical and meets your business goals.",

    image: envision,
  },
  {
    id: 3,
    name: "We Build with Precision",
    writeup:
      "Our team brings your vision to life by developing robust and scalable solutions. We use cutting-edge technologies to build high-quality applications.",
    image: buildlogo,
  },
];

export const dservice = [
  {
    id: 1,
    name: "Web Application",
    writeup:
      "We create custom web applicatons as new system, or as a backend to existing applications. We can build your application from scratch, or rebuild a previous application into a modern web-based system",
  },

  {
    id: 2,
    name: "UI/ UX Design",
    writeup:
      "The first phase of any project with Galdunx is the planning phase, and the User Experience and interface design are often the most important part. We collaborate closely with you on designing the initial wireframe, and ultimately produce the final high-fidelity design to be used in your application ",
  },
  {
    id: 3,
    name: "Graphics Design",
    writeup:
      "Galdunx: Elevating brands with creative graphic design solutions for logos, Brand Identity, social media, and more.",
  },
  {
    id: 4,
    name: "Software Support",
    writeup:
      "From hosting to maintainence to code support, we can custom-tailor a package that make sense for your business or project, at a budget you can work with. Our senior-level engineers provide 24/7 emergency response support, and proactive support to help avoid costly surprises or downtime",
  },
];

export const Teamserve = [
  {
    id: 1,
    name: "Efficient Team Communication",
    writeup:
      "Efficient team communication is our cornerstone. Using advanced collaboration tools, we ensure seamless cordination, quick response, and timely updates, keeping your projects on track. Our commitment to clear communication guarantees you're informed and engaged throughout the process",
    image: speakerlogo,
  },
  {
    id: 2,
    name: "Research Driven Success",
    writeup:
      "At Galdunx, research-driven success is our foundation. By leveraging in-depth research and data analysis, we ensure our solutions are innovative and tailored to your specific needs. this commitment to research allows us to stay ahead of industry trends and deliver expectional results",
    image: brightlogo,
  },
  {
    id: 3,
    name: "Future Proof Devlopment",
    writeup:
      "In an ever-evolving digital landscape, Future-proof development is our promise. We leverage the latest technologies and best practices to create scalable sustainable solutions that stand the test of time. Our commitment to future proofing ensures your project remain relevant and adaptable to evolving market trends",
    image: prooflogo,
  },
];

export const devservice = [
  {
    id: 1,
    name: "Web Development",
    writeup:
      "Redefine your online presence with Galdunx exceptional web development services. Transform your digital strategy with bespoke web solutions that stands out",
    initialbutton: "Website",
    seccondbutton: "Web App",
  },
  {
    id: 2,
    name: "Mobile Dvelopment",
    writeup:
      "Transform your mobile strategy and engage your audience with innovative, custom-built solutions. Our talented team creates high performance, user-friendly mobile apps tailored to your business needs",
    initialbutton: "Cross Platforms",
    seccondbutton: "Native Ios & Andriod",
  },
  {
    id: 3,
    name: "Gitbooks",
    writeup:
      "Our skilled team craft engaging, well structured content, making your knowledge base accesible and easy easy to navigate. We provide end-to-end service, from initial setup to customization and development, tailored to your needs.",
    initialbutton: "Researching",
  },
  {
    id: 4,
    name: "Blockchain Development",
    writeup:
      "Unlock the potential of blockchain with Galdunx. Our expert team develops secure, transparent, and cutomized blockchainn solution, including DApps, smart contract, and comprehensive blockchain strategies",
    initialbutton: "Token Development",
    seccondbutton: "Smart Contract Development",
  },
];

export const successdiv = [
  {
    id: 1,
    name: "Graphics Design",
    image: graphics1,
    writeup:
      "Galdunx: Elevating brands with creative graphic design solutions for logos,  Brand Identity, social media, and more.",
  },
  {
    id: 2,
    name: "Web Design",
    image: graphics2,
    writeup:
      "Galdunx: Where every pixel counts. We specialize in crafting bespoke websites that not only captivate but also convert.",
  },
  {
    id: 3,
    name: "UI/UX Design",
    image: graphics3,
    writeup:
      "Galdunx also specializes in UI/UX design, creating seamless digital experiences that delight users and drive engagement.",
  },
  {
    id: 4,
    name: "Mobile Application",
    image: graphics2,
    writeup:
      "Galdunx: Where every pixel counts. We specialize in crafting bespoke websites that not only captivate but also convert.",
  },
];
