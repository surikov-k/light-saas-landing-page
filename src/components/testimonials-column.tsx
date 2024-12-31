"use client";

import Image from "next/image";
import { HTMLAttributes } from "react";

import { motion } from "framer-motion";

interface TestimonialsColumnProps extends HTMLAttributes<HTMLDivElement> {
  testimonials: {
    text: string;
    imageSrc: string;
    name: string;
    username: string;
  }[];
  className?: string;
  duration?: number;
}

export default function TestimonialsColumn({
  testimonials,
  duration = 10,
  className,
}: TestimonialsColumnProps) {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...testimonials, ...testimonials].map(
          ({ text, imageSrc, name, username }, index) => (
            <article key={username + index} className="card">
              <p className="text-base">{text}</p>
              <div className="mt-5 flex items-center gap-2">
                <Image
                  src={imageSrc}
                  alt={`Avatar of ${name}`}
                  width={40}
                  height={40}
                  className="size-10 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="font-medium leading-5 tracking-tight">{name}</p>
                  <p className="leading-5 tracking-tight">{username}</p>
                </div>
              </div>
            </article>
          )
        )}
      </motion.div>
    </div>
  );
}
