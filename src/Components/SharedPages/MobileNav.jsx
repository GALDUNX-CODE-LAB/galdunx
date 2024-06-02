import React from "react";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "../ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { MdArrowForward, MdArrowOutward } from "react-icons/md";
import { useRef } from "react";

export default function MobileNav() {
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
    {
      page: "contact us",
      path: "/contact",
    },
  ];

  const location = useLocation();
  const { pathname } = location;

  const sheetCloseRef = useRef(null);
  const closeSheet = () => {
    if (sheetCloseRef.current) {
      sheetCloseRef.current.click();
    }
  };
  return (
    <SheetContent className="bg-black text-white z-[1000] border-none">
      <ul className="flex flex-col gap-6 py-32">
        {pages.map((page) => (
          <SheetClose asChild ref={sheetCloseRef}>
            <li
              className={`uppercase text-3xl ${
                pathname === page.path ? "text-pry" : ""
              } hover:text-pry`}
            >
              <Link
                to={page.path}
                className="flex"
                onClick={() => closeSheet()}
              >
                {" "}
                {pathname === page.path ? (
                  <MdArrowForward className="text-3xl" />
                ) : (
                  <MdArrowOutward className="text-3xl" />
                )}{" "}
                {page.page}
              </Link>
            </li>
          </SheetClose>
        ))}
      </ul>
    </SheetContent>
  );
}
