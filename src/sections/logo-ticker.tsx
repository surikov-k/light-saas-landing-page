"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import quantumLogo from "@/assets/logo-quantum.png";

const logos = [
  {
    name: "Acme",
    image: acmeLogo,
  },
  {
    name: "Quantum",
    image: quantumLogo,
  },
  {
    name: "Echo Valley",
    image: echoLogo,
  },
  {
    name: "Celestial",
    image: celestialLogo,
  },
  {
    name: "Pulse",
    image: pulseLogo,
  },
  {
    name: "Apex",
    image: apexLogo,
  },
];

export const LogoTicker = () => {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container lg:px-10">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex flex-none gap-14 pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map(({ name, image }, index) => (
              <Image
                key={name + index}
                src={image}
                alt={name}
                className="logo-ticker-image"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
