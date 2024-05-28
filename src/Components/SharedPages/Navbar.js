import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navlinks } from "../Data/Arrays";
import galdlogo from "../Imagefile/galdunX Logo.png";
import { Button } from "../ui/button";

import { MdArrowOutward } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";

const Navbar = () => {
  const [open, setopen] = useState(false);
  const pages = [
    {
      page: "home",
      path: "/",
    },
    {
      page: "about",
      path: "/about",
    },
    {
      page: "services",
      path: "/services",
    },
    {
      page: "portfolio",
      path: "/portfolio",
    },
  ];

  const location = useLocation();
  const { pathname } = location;

  const togglenavbar = () => {
    setopen(!open);
  };
  return (
    <div className="fixed z-[100] w-full">
      <div className=" container max-w-7xl mt-5">
        <div className="flex  bg-transparent border-gray-500 border text-white rounded-full justify-between items-center  py-3 md:py-4 px-8 z-10 w-full top-[10px] right-0 backdrop-blur-lg">
          <div className="w-[100px] md:w-[120px]">
            <img src={galdlogo} alt="Galdun" className="block" />
          </div>
          <ul className="hidden gap-3 md:flex">
            {pages.map((page) => (
              <li
                className={`uppercase text-[12px] ${
                  pathname === page.path ? "text-pry" : ""
                } hover:text-pry`}
              >
                <Link to={page.path} className="flex">
                  {" "}
                  {pathname === page.path ? (
                    <MdArrowForward className="text-lg" />
                  ) : (
                    <MdArrowOutward className="text-lg" />
                  )}{" "}
                  {page.page}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="hidden md:flex md:gap-2">
            Contact Us <MdArrowOutward />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
