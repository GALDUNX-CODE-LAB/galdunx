import { CiBoxList } from "react-icons/ci";
import { FaCalendar, FaCode, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { PiDiamondsFourDuotone } from "react-icons/pi";
import { IoRocketSharp, IoSettingsSharp } from "react-icons/io5";
import { GiBleedingEye, GiLightBulb } from "react-icons/gi";
import { TbBuildingFactory } from "react-icons/tb";
import figmalogo from "../Imagefile/figmalogo.png";
import awslogo from "../Imagefile/awslogo.png";
import wordpresslogo from "../Imagefile/wordpresslogo.png";
import buildlogo from '../Imagefile/build.png'
import bulblogo from '../Imagefile/bulblogo.png'
import envision from '../Imagefile/envisiongrey.png'
import prooflogo from '../Imagefile/proof.png'
import speakerlogo from '../Imagefile/speaker.png'
import brightlogo from '../Imagefile/bright.png'
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
        name:'facebook',
        logo: <FaFacebook/>

    },
      {
        id: 2,
        name:'instagram',
        logo: <FaInstagram />

    },
    {
        id: 3,
        name:'twitter',
        logo: <FaTwitter />

    },
    {
        id: 4,
        name:'linkedin',
        logo: <FaLinkedin />

    },
]
export const essential = [
  {
    id: 1,
    name: "Planning",
    writeup:'At the start of each project, we work with our customers to build a solid project plan. The initial Scope document can come from the client or a combined process of phone calls and in-person meetings.',
    image: <FaCalendar />,
  },
  {
    id: 2,
    name: "Wireframing",
    writeup:'Once the project plan and scope have been finalized, our wireframing team takes over to determine the placement of all objects on each page of the application, whether it is a consumer mobile app or a backend business application. This is an important stage where we come to a final agreement on what will be placed on each page for the User to access.',
    image: <CiBoxList />,
  },
  {
    id: 3,
    name: "Design",
    writeup:'After the wireframes for all pages have been finalized, our design team takes over to create the final appearance and functionality of the application. This is an exciting stage of the project where you can see the entire application come to life. We will provide you with clickable versions to fully experience everything the user goes through before we begin coding.',
    image: <PiDiamondsFourDuotone />,
  },
  {
    id: 4,
    name: "Code",
    writeup:'With the wireframes and designs finalized, we begin coding the application to make it functional. As an Agile development shop, we break down the project into baskets of features called Sprints. This approach allows our customers to regularly review the progress of their software development process and provide feedback at the end of each Sprint. We value your input and involvement throughout the entire development process.',    
    image: <FaCode />,
  },
  {
    id: 5,
    name: "Testing",
    writeup:'The testing process for mobile and software applications is a crucial step in ensuring that the product is functional, reliable, and user-friendly. Typically, the process involves several stages, where various techniques and tools are employed to identify defects, bugs, and usability issues. The goal is to detect and correct any issues before the application is released to the public, ultimately improving the user experience and ensuring the success of the product.',
    image: <IoSettingsSharp />,
  },
  {
    id: 6,
    name: "Development",
    writeup:'After the application is completed, approved by our internal QA, project management and the client – we are ready to deploy the code to its final destination. Hosting options vary from client-owned servers to web or cloud hosting. We guide clients through the options and handle the final stages.',
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
    logo: figmalogo,
    name: "Design with Adobe's Figma",
    writeup: "from a black canvas o clean creative prototype",
  },
  {
    id: 2,
    logo: awslogo,
    name: "Cloud Computing",
    writeup: "Building Flexible, Scalable And Cloud-Effective Solution",
  },
  {
    id: 3,
    logo: wordpresslogo,
    name: "Word Press Website",
    writeup: "For Highly Customable Business or Eccomemerce CMS site",
  },
  {
    id: 4,
    logo: figmalogo,
    name: "Fullstack Application",
    writeup: "Fast Modern SOE Friendly Appilication",
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
    value: '22 +',
    name: "Global Suppoters",
     icon: '',
  },
  {
    id: 3,
    value: 63,
    name: "Completed Projects",
     icon: <TiPlusOutline />,
  },
  {
    id: 4,
    value: '56 +',
    name: "Public Repository",
     icon: '',
  },
];

export const think = [
    {
        id: 1,
        name:'We Think With You',
        writeup:'Innovation Strategy Digital Product Strategy Technology Architecture Information Architecture',
        image: bulblogo
    },
      {
        id: 2,
        name:'We Envision With You',
        writeup:'Idigital Product Design UX Research And Design Brand Identity Design Website Design',
        image: envision
    },
       {
        id: 3,
        name:'We Build With You',
        writeup:'Web App Development Magento DDevelopment Wordpress Development Mobile App Devlopment',
        image: buildlogo
    },
]


export const dservice = [
    {
        id: 1,
        name: 'Web App Design',
        writeup:'im the big breet so stay away from me cause i got den balls to crush you danu dabu stay safe in these street'
    },
     {
        id: 2,
        name: 'Mobile Design',
        writeup:'im the big breet so stay away from me cause i got den balls to crush you danu dabu stay safe in these street'
    },
     {
        id: 3,
        name: 'Website Design',
        writeup:'im the big breet so stay away from me cause i got den balls to crush you danu dabu stay safe in these street'
    },
     {
        id: 4,
        name: 'Graphics Design',
        writeup:'im the big breet so stay away from me cause i got den balls to crush you danu dabu stay safe in these street'
    },
]


export const Teamserve = [
    {
        id: 1,
        name:'Efficient Team Communication',
        writeup:"nahhhhhh niggas be hating and be lackin asf manyall think bussing a nut is cool until you die ohh my day man he lacking and hes tryna go dee into the loght of chicken ass and cay and shout omg!!!!! ayyy listen yea, mandem got the g’s and i’m coming with the smoke to burn you down and you shall cry like a fucking baby you fucking idiocit donkey allow me.",
        image: speakerlogo,
    },
    {
        id: 2,
        name:'Research Driven Success',
        writeup:"nahhhhhh niggas be hating and be lackin asf manyall think bussing a nut is cool until you die ohh my day man he lacking and hes tryna go dee into the loght of chicken ass and cay and shout omg!!!!! ayyy listen yea, mandem got the g’s and i’m coming with the smoke to burn you down and you shall cry like a fucking baby you fucking idiocit donkey allow me.",
        image: brightlogo,
    },
      {
        id: 3,
        name:'Future Proof Devlopment',
        writeup:"nahhhhhh niggas be hating and be lackin asf manyall think bussing a nut is cool until you die ohh my day man he lacking and hes tryna go dee into the loght of chicken ass and cay and shout omg!!!!! ayyy listen yea, mandem got the g’s and i’m coming with the smoke to burn you down and you shall cry like a fucking baby you fucking idiocit donkey allow me.",
        image : prooflogo
    },
]

export const devservice =[
    {
        id: 1,
        name:'Web Devlopment',
        writeup:"life is like an egg shall it’s very easy to crack like a crack head that’s in love with cocaine daymmmm!!!! not even gon lie bruv like is a fucking film in a world of underdtanding shit ",
        initialbutton: 'Website',
        seccondbutton: 'Web App'
    },
        {
        id: 2,
        name:'Mobile Dvelopment',
        writeup:"life is like an egg shall it’s very easy to crack like a crack head that’s in love with cocaine daymmmm!!!! not even gon lie bruv like is a fucking film in a world of underdtanding shit ",
        initialbutton: 'Cross Platforms',
        seccondbutton: 'Native Ios & Andriod'
    },
        {
        id: 3,
        name:'Gitbooks',
        writeup:"life is like an egg shall it’s very easy to crack like a crack head that’s in love with cocaine daymmmm!!!! not even gon lie bruv like is a fucking film in a world of underdtanding shit ",
        initialbutton: 'Researching',
    },
      {
        id: 4,
        name:'Blockchain Development',
        writeup:"life is like an egg shall it’s very easy to crack like a crack head that’s in love with cocaine daymmmm!!!! not even gon lie bruv like is a fucking film in a world of underdtanding shit ",
        initialbutton: 'Token Development',
        seccondbutton: 'Smart Contract Development'
    },
]

