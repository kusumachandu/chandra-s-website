"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Delivered", value: "6+" },
  { label: "Technologies", value: "20+" },
  { label: "Clients", value: "5+" },
];

export default function HeroStats() {
  return (
    <motion.div
      className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-6 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="text-center min-w-[120px] sm:text-left p-2 rounded-md shadow-sm shadow-white "
        >
          <p className="text-3xl font-bold text-white text-center">
            {stat.value}
          </p>
          <p className="text-sm text-center text-[#ADB7BE]">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  );
}
