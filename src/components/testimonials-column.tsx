import Image from "next/image";
import { HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

interface TestimonialsColumnProps extends HTMLAttributes<HTMLDivElement> {
  testimonials: {
    text: string;
    imageSrc: string;
    name: string;
    username: string;
  }[];
  className?: string;
}

export default function TestimonialsColumn({
  testimonials,
  className,
}: TestimonialsColumnProps) {
  return (
    <div
      className={twMerge(
        "mt-10 flex flex-col gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
        className
      )}
    >
      {testimonials.map(({ text, imageSrc, name, username }) => (
        <article key={username} className="card">
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
      ))}
    </div>
  );
}
