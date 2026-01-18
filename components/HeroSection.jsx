"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { HeroOrbit } from "./HeroOrbit";
import HeroStats from "./HeroStats";

const HeroSection = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1jeekMNsWDIxzFOGoxnC6WOVPAj5hL2MO/view?usp=sharing";
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScroll = () => {
    const contactElement = document.getElementById("contact");

    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 text-center place-self-center sm:text-left  w-[100%]">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold flex flex-col">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </p>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Chandra Shekar",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Frontend Developer",
                1000,
                "Full Stack Developer",
                1000,
                "Freelancer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base lg:text-xl pb-2 lg:pb-0">
            Passionate and Experienced in the field
          </p>
          <div className="mt-2">
            <button
              onClick={handleScroll}
              className="px-6 py-3 sm:w-fit w-[250px] rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-200 text-white"
            >
              Hire Me
            </button>
            {/* <button
              onClick={handleDownload}
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button> */}
          </div>
          <div className="">
            <HeroStats />
          </div>
        </div>
        <HeroOrbit />
      </div>
    </section>
  );
};

export default HeroSection;
