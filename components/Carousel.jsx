"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Carousel({ images }) {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {/* Duplicate images for infinite loop */}
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-16 h-16 md:w-28 md:h-28
                       rounded-full border border-gray-300
                       flex items-center justify-center
                       bg-white/5 backdrop-blur-sm"
          >
            <Image
              src={image}
              alt={`carousel-image-${index}`}
              width={128}
              height={128}
              className="rounded-full object-cover w-full h-full"
              priority={false}
            />
          </div>
        ))}
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32
                       rounded-full border border-gray-300
                       flex items-center justify-center
                       bg-white/5 backdrop-blur-sm"
          >
            <Image
              src={image}
              alt={`carousel-image-${index}`}
              width={128}
              height={128}
              className="rounded-full object-cover w-full h-full"
              priority={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
