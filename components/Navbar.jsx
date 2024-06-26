"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useNavbarContext } from "@/context/NavbarContext";

const navLinks = [
  {
    title: "About",
    path: "about",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const Navbar = () => {
  // const [navbarOpen, setNavbarOpen] = useState(false);
  const { navbarOpen, toggleNavbar } = useNavbarContext();

  return (
    <nav className="fixed top-0 left-0 right-0  z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl cursor-pointer text-white font-semibold"
        >
          <Image
            src="/images/logo"
            alt="logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => toggleNavbar(true)}
              className="flex items-center px-3 py-2 rounded border border-slate-200 text-slate-200 hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => toggleNavbar(false)}
              className="flex items-center px-3 py-2 rounded border border-slate-200 text-slate-200 hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:hidden bg-transparent flex justify-end">
        {navbarOpen && <MenuOverlay links={navLinks} />}
      </div>
    </nav>
  );
};

export default Navbar;
