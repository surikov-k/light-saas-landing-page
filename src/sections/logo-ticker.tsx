import Image from "next/image";

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
          <div className="flex flex-none gap-14">
            {logos.map(({ name, image }) => (
              <Image
                key={name}
                src={image}
                alt={name}
                className="logo-ticker-image"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
