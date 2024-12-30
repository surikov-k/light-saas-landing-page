import Image from "next/image";

import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {
  return (
    <section className="overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24">
      <div className="container">
        <div className="mx-auto max-w-[540px] text-center">
          <p className="tag">Boost your productivity</p>
          <h2 className="mt-5 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]">
            A more effective way to track progress
          </h2>
          <p className="mt-5 text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative mt-10">
          <Image src={productImage} alt="Product" className="" />
          <Image
            src={tubeImage}
            alt="tube"
            height={248}
            width={248}
            className="absolute -left-36 bottom-14 hidden md:block lg:bottom-[90px]"
          />
          <Image
            src={pyramidImage}
            alt="pyramid"
            height={262}
            width={262}
            className="absolute -right-36 -top-32 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};
