import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { navlinks, socialLinks } from "../Data/Arrays";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
  return (
    <div className="py-[7%] px-8 md:px-20  bg-[#1C1C1C]">
      <h2 className="text-[#7F7878] text-[20px] md:text-[35px] font-semibold">Excited?</h2>
      <h1 className="text-[30px] md:text-[60px] lg:text-[70px] text-white font-bold mb-2 flex items-center gap-0 md:gap-3">
        Let's Work Together! 
        <CiCirclePlus onClick={()=> navigate('/contact') } className="hover:text-[#B9DE2C] hover:cursor-pointer" />{" "}
      </h1>
      <p className="text-white text-[15px] md:text-[18px] mb-[7%] md:mb-[5%] w-[100%] md:w-[60%] lg:w-[35%] text-left">
        Our success in collaborating with client is determined by effictive
        communication, mutual understanding and a share commitment in achieving
      </p>
      <div className="flex flex-col justify-between md:flex-row border-b-[3px] pb-[10%] md:pb-[7%]">
        <div className="w-[100%] md:w-[70%] flex flex-wrap gap-0  md:gap-10 items-center justify-center md:justify-start">
            {
                navlinks.map((x)=>{
                    return(
                        <Link to={x.link} className="text-white text-[18px] md:text-[20px] mb-4 mr-7 md:mb-0 md:mr-0 hover:text-[#B9DE2C]">{x.name}</Link>
                    )
                })
            }
        </div>
        <div className="w-[100%] md:w-[30%] flex flex-wrap gap-7 md:gap-10 items-center justify-center md:justify-end">
                {
                    socialLinks.map((x)=>{
                              return(
                        <a href="#" className="text-white text-[20px] md:text-[25px] lg:text-[30px] hover:text-[#B9DE2C]">{x.logo}</a>
                    )
                    })
                }
        </div>
      </div>
    </div>
  );
};

export default Footer;
