import { Link } from "react-scroll";
import React from "react";
import { useNavbarContext } from "@/context/NavbarContext";

const NavLink = ({ href, title }) => {
  const { toggleNavbar } = useNavbarContext();
  return (
    <Link
      onClick={() => toggleNavbar(false)}
      to={href}
      smooth={true}
      duration={1000}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded cursor-pointer md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
