"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import ArrowRight from "@/assets/arrow-right.svg";
import springImage from "@/assets/spring.png";
import starImage from "@/assets/star.png";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -300]);

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] pb-24 lg:pt-24"
    >
      <div className="container">
        <div className="section-heading-container relative text-center">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <div className="mt-10 flex items-center justify-center gap-2">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1">
              <span>Learn More</span> <ArrowRight className="size-5" />
            </button>
          </div>
          <motion.img
            style={{
              translateY,
            }}
            src={springImage.src}
            alt="spring"
            height={363}
            width={363}
            className="absolute -right-[331px] -top-[19px] hidden md:block"
          />
          <motion.img
            style={{
              translateY,
            }}
            src={starImage.src}
            alt="star"
            height={360}
            width={360}
            className="absolute -left-[350px] -top-[137px] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};
