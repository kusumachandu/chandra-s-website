"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";

import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="gap-1 grid grid-cols-2 list-disc">
        <li>Next.Js 14</li>
        <li>Express</li>
        <li>MongoDb</li>
        <li>Node</li>
        <li>UI/UX design</li>
        <li>Responsive design</li>
        <li>Testing and Debugging</li>
        <li>React</li>
        <li>Git</li>
        <li>PostgreSQL</li>
        <li>Database Management</li>
        <li>Stripe Payment Gateway</li>
        <li>Google Cloud Storage</li>
        <li>Authentication & Authorization</li>
        <li>Tailwindcss/Shadcn UI</li>
        <li>CI/CD pipelines</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="flex flex-col gap-4">
        <ul>
          <li className="font-semibold">
            Malla Reddy Engineering College (BTech)
          </li>
          <li>Jawaharlal Nehru Technological University, Hyderabad</li>
          <li className="font-extralight">
            <span className="font-semibold">CGPA: 7.2</span> (2018 - 2021)
          </li>
        </ul>
        <ul>
          <li className="font-semibold">
            Anurag Engineering College (Diploma)
          </li>
          <li>Jawaharlal Nehru Technological University, Hyderabad</li>
          <li className="font-extralight">
            <span className="font-semibold">CGPA: 8.1</span> (2015 - 2018)
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li className="font-semibold">Full Stack Mern Developer</li>
        <li>
          Masai School{" "}
          <span className="font-extralight">(Apr 2021 - Apr 2022 )</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <div className="flex flex-col gap-4">
        <ul>
          <li className="font-semibold">React Developer</li>
          <li>
            Metafic{" "}
            <span className="font-extralight">(May 2022 - Oct 2022 )</span>
          </li>
        </ul>
        <ul>
          <li className="font-semibold">Full Stack Web Developer</li>
          <li>
            Zvoid{" "}
            <span className="font-extralight">(Nov 2022 - Jul 2023 )</span>
          </li>
        </ul>
        <ul>
          <li className="font-semibold">Frontend Developer</li>
          <li>
            Freelance{" "}
            <span className="font-extralight">(Jul 2023 - Present )</span>
          </li>
        </ul>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white px-2" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-1 lg:px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          className="w-[450px]"
          alt="about-image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working woth JavaScript, React, Redux, Node js, Express, PostgreSQL,
            HTML, CSS and Git. I am a quick learner and I am always looking ot
            expand my knowledge and skill set. I am a team player and I am
            excited to work with oithers to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8 lg:gap-8">
            <TabButton
              active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}
            >
              Skills
            </TabButton>
            <TabButton
              active={tab === "education"}
              selectTab={() => handleTabChange("education")}
            >
              Education
            </TabButton>
            <TabButton
              active={tab === "certifications"}
              selectTab={() => handleTabChange("certifications")}
            >
              Certifications
            </TabButton>
            <TabButton
              active={tab === "experiences"}
              selectTab={() => handleTabChange("experiences")}
            >
              Experiences
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
