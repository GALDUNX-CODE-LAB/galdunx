import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import galdlogo from "../Imagefile/galdunX Logo.png";

import { Button } from "../ui/button";
import { Sheet, SheetTrigger } from "../ui/sheet";

import { MdArrowOutward } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import MobileNav from "./MobileNav";

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
          <div>
            <Link to="contact" className="hidden md:block">
              <Button className="flex md:gap-2">
                Contact Us <MdArrowOutward />
              </Button>
            </Link>
            <div className="block md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    size="sm"
                    className="bg-transparent px-2 text-lg border-none rounded-full hover:bg-pry group duration-300 transform"
                  >
                    <HiOutlineMenuAlt1 className="text-white group-hover:text-black" />
                  </Button>
                </SheetTrigger>
                <MobileNav />
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
