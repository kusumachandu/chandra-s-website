import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button 
      className={` ${buttonStyles} rounded-full border-2 border-purple-500 px-3 md:px-6 py-2 text-sm md:text-md lg:text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
