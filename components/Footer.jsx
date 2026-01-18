import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border-t border-l-transparent border-r-transparent text-white border-t-[#33353F]">
      <div className="container p-8 flex justify-between items-center">
        <span className="">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
