import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { navlinks, socialLinks } from "../Data/Arrays";
import { Link, useNavigate, useLocation } from "react-router-dom";
import galdlogo from "../Imagefile/galdunX Logo.png";
import { MdArrowForward, MdArrowOutward } from "react-icons/md";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
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

  const currentYear = new Date().getFullYear();
  return (
    <footer className="pt-20 pb-10 bg-[#1C1C1C]">
      <div className="container max-w-7xl">
        <div className="space-y-4 mb-8">
          <div className="w-[100px] md:w-[120px]">
            <img src={galdlogo} alt="Galdun" className="block" />
          </div>
          <p className="text-gray-300">
            Innovating the future, one step at a time!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b pb-8">
          <ul className="flex gap-3">
            {pages.map((page) => (
              <li
                className={`uppercase text-[12px] ${
                  pathname === page.path ? "text-pry" : "text-white"
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
          <div className="flex gap-4 md:justify-end">
            {socialLinks.map((x) => {
              return (
                <a
                  key={x.logo}
                  href="#"
                  target="_blank"
                  className="text-white text-lg hover:text-[#B9DE2C]"
                >
                  {x.logo}
                </a>
              );
            })}
          </div>
        </div>

        <div className="text-center pt-6 text-gray-300">
          <p>&copy; {currentYear} GaldunX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
