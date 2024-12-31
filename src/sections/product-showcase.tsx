"use client";

import Image from "next/image";
import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section className="overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24">
      <div className="container">
        <div className="section-heading-container text-center">
          <p className="tag">Boost your productivity</p>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative mt-10">
          <Image src={productImage} alt="Product" className="" />
          <motion.img
            src={tubeImage.src}
            alt="tube"
            height={248}
            width={248}
            className="absolute -left-36 bottom-14 hidden md:block lg:bottom-[90px]"
            style={{ translateY }}
          />
          <motion.img
            src={pyramidImage.src}
            alt="pyramid"
            height={262}
            width={262}
            className="absolute -right-36 -top-32 hidden md:block"
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};
