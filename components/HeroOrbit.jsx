"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useIsDesktop } from "@/hooks/breakpoint";

const orbitItems = [
  "/images/projects/mongo.png",
  "/images/projects/nextjs.jpg",
  "/images/projects/postman.png",
  "/images/projects/github.jpg",
  "/images/projects/express-js.png",
  "/images/projects/stripe.png",
];

export const HeroOrbit = () => {
  const isDesktop = useIsDesktop();

  // Correct geometry
  const radius = isDesktop ? 200 : 125;

  return (
    <div className="col-span-5 place-self-center mt-10 lg:mt-0 mb-6 lg:mb-0">
      <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
        {/* Orbit Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-white/20"
          animate={{ rotate: 360 }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {orbitItems.map((src, index) => {
            const angle = (360 / orbitItems.length) * index;

            return (
              <div
                key={index}
                className="absolute top-[42%] left-[42%] lg:top-[42%] lg:left-[45%] z-10"
                style={{
                  transform: `
                    rotate(${angle}deg)
                    translate(${radius}px)
                    rotate(-${angle}deg)
                  `,
                }}
              >
                <div
                  className="
                    w-10 h-10 lg:w-12 lg:h-12
                    rounded-full bg-[#181818]
                    flex items-center justify-center
                    border border-white/30 shadow-lg
                  "
                >
                  <Image
                    src={src}
                    alt="Technology icon"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Center Profile Image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div
            className="
              rounded-full bg-[#181818]
              w-[170px] h-[170px]
              lg:w-[260px] lg:h-[260px]
              flex items-center justify-center
              shadow-xl
            "
          >
            <Image
              src="/images/chandu_profile.png"
              alt="Profile image"
              width={220}
              height={220}
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
