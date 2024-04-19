"use client"

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Kerala Sadhya",
    description: "AN uk based e-commerce application",
    image: "/images/projects/keralaSadhya.png",
    tag: ["All", "Applications"],
    gitUrl: '/',
    previewUrl: 'https://www.keralasadhya.uk/'
  },
  {
    id: 7,
    title: "OLNX",
    description: "AN AI powered web apllication",
    image: "/images/projects/OLNX.png",
    tag: ["All", "Applications"],
    gitUrl: '/',
    previewUrl: 'https://olnx-git-open-ai-radegg.vercel.app/'
  },
  {
    id: 2,
    title: "Anyo",
    description: "A website for an organisation",
    image: "/images/projects/ANYO.png",
    tag: ["All", "Websites"],
    gitUrl: 'https://github.com/hammyasf/anyo-frontend',
    previewUrl: 'https://anyo.radegg.com/'
  },
  {
    id: 3,
    title: "Zvoid",
    description: "Website for the Zvoid Organisation",
    image: "/images/projects/ZVOID.png",
    tag: ["All", "Websites"],
    gitUrl: 'https://github.com/kusumachandu/Zvoid_Animation',
    previewUrl: 'https://zvoid-animation.vercel.app/'
  },
  {
    id: 5,
    title: "Practo",
    description: "An Health-Care web-application",
    image: "/images/projects/Practo.png",
    tag: ["All", "Applications"],
    gitUrl: 'https://github.com/surajmasai/Clone-Practo',
    previewUrl: 'https://clone-practo.vercel.app/'
  },
  {
    id: 6,
    title: "Diagnostic",
    description: "An Health-Care website",
    image: "/images/projects/Diagnostic.png",
    tag: ["All", "Websites"],
    gitUrl: 'https://github.com/kusumachandu/diagnostic-healthcare',
    previewUrl: '/'
  },
];

const ProjectSection = () => {

  const [tag, setTag] = useState('All');

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }

  const filteredProjects = projectsData.filter((project) => {
    return (project.tag.includes(tag));
  })

  return (
    <div id="projects" className="">
      <h2 className="text-center font-bold text-4xl">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === 'All'}  /> 
        <ProjectTag onClick={handleTagChange} name="Websites" isSelected={tag === 'Websites'}  /> 
        <ProjectTag onClick={handleTagChange} name="Applications" isSelected={tag === 'Applications'}  /> 
      </div>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imgUrl={project.image}
            description={project.description}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
