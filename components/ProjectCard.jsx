import React from "react";
import Link from "next/link";

import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="px-4">
      <div className="relative h-52 md:h-72 rounded-t-xl overflow-hidden group">
        {/* Optimized Image */}
        <Image
          src={imgUrl}
          alt="Project preview"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center
        bg-[#181818] bg-opacity-0 opacity-0
        group-hover:opacity-80 group-hover:bg-opacity-80
        transition-all duration-500"
        >
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-3 border-2 rounded-full border-[#ADB7BE]
          flex items-center justify-center hover:border-white transition"
            aria-label="View source code"
          >
            <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] hover:text-white transition" />
          </Link>

          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE]
          flex items-center justify-center hover:border-white transition"
            aria-label="View live preview"
          >
            <EyeIcon className="h-8 w-8 text-[#ADB7BE] hover:text-white transition" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
