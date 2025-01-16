import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import galdlogo from "../Imagefile/galdunX Logo.png";

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaWhatsapp, FaTelegram, FaLongArrowAltRight } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
    // {
    //   page: "portfolio",
    //   path: "/portfolio",
    // },
    {
      page: "contact",
      path: "/contact",
    },
  ];

  const location = useLocation();
  const { pathname } = location;

  const toggleNavbar = () => {
    setOpen(!open);
  };

  const navi = useNavigate();

  return (
    <div className="relative z-[100] w-full">
      <div className="nav py-5">
        <div className="container flex justify-between items-center">
          <div className=" w-[90px] md:w-[120px]">
            <img src={galdlogo} alt="Galdun" className="block " />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="text-secondary text-xl md:hidden bg-white rounded-full p-2"
            onClick={toggleNavbar}
          >
            {open ? <AiOutlineClose /> : <HiOutlineMenuAlt1 />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden gap-5 md:flex">
            {pages.map((page, index) => (
              <li
                key={index}
                className={`uppercase text-[12px] ${
                  pathname === page.path ? "text-pry" : "text-white"
                } hover:text-pry`}
              >
                <Link to={page.path} className="flex items-center">
                  {pathname === page.path && (
                    <span className="text-pry font-semibold mr-1">→</span>
                  )}
                  {page.page}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="wrap lg:flex gap-3 items-center text-white hidden"
            onClick={() => navi("/contact")}
          >
            <button className="bg-white text-black rounded-full p-2 hover:bg-pry hover:scale-110 transition-all">
              <FaLongArrowAltRight className="hover:scale-110" />
            </button>
            <p>Get in touch</p>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed top-0 left-0 w-full h-screen bg-secondary text-white flex flex-col px-7  p-5">
          <div className="flex justify-between items-center w-full mb-8">
            <img src={galdlogo} alt="Galdun" className="block w-[90px]" />

            <button
              className="text-secondary text-xl bg-white rounded-full p-2"
              onClick={toggleNavbar}
            >
              <AiOutlineClose />
            </button>
          </div>
          <ul className="space-y-6 w-full">
            {pages.map((page, index) => (
              <li key={index} className="w-full border-b border-gray-700">
                <Link
                  to={page.path}
                  className="block py-4 text-lg font-bold uppercase"
                  onClick={toggleNavbar}
                >
                  {page.page}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col items-center space-y-6">
            <div className="bg-yellow-400 w-32 h-32 flex items-center justify-center rounded-full">
              <p className="text-black text-center font-semibold">
                Have an idea?
              </p>
            </div>
            <div className="flex w-full justify-between">
              <button className="flex items-center gap-2   px-4 py-2 rounded-full text-white border border-white border-opacity-20">
                <FaWhatsapp size={20} />
                WhatsApp
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full text-white border border-white border-opacity-20">
                <FaTelegram size={20} />
                Telegram
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
