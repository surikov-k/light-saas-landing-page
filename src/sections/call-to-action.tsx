import Image from "next/image";

import ArrowRight from "@/assets/arrow-right.svg";
import springImage from "@/assets/spring.png";
import starImage from "@/assets/star.png";

export const CallToAction = () => {
  return (
    <section className="overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24">
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
          <Image
            src={springImage}
            alt="spring"
            height={363}
            width={363}
            className="absolute -right-[331px] -top-[19px] hidden md:block"
          />
          <Image
            src={starImage}
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
