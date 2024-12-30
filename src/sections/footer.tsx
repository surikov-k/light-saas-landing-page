import Image from "next/image";

import logoImage from "@/assets/logosaas.png";
import InstaIcon from "@/assets/social-insta.svg";
import LinkedinIcon from "@/assets/social-linkedin.svg";
import PinIcon from "@/assets/social-pin.svg";
import XIcon from "@/assets/social-x.svg";
import YTIcon from "@/assets/social-youtube.svg";

const socials = [
  { name: "Instagram", icon: InstaIcon, href: "#" },
  { name: "LinkedIn", icon: LinkedinIcon, href: "#" },
  { name: "Pinterest", icon: PinIcon, href: "#" },
  { name: "X", icon: XIcon, href: "#" },
  { name: "YouTube", icon: YTIcon, href: "#" },
];

const links = [
  { name: "About", href: "#" },
  { name: "Features", href: "#" },
  { name: "Customers", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Help", href: "#" },
  { name: "Careers", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-black py-10 text-[#BCBCBC]">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative inline-flex before:absolute before:bottom-0 before:top-2 before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:blur before:content-['']">
            <Image
              src={logoImage}
              width={40}
              height={40}
              alt="logo"
              className="relative"
            />
          </div>
          <nav className="mt-6 flex flex-col gap-6 md:flex-row">
            {links.map(({ name, href }) => (
              <a key={name} href={href} className="text-sm leading-5">
                {name}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex items-center justify-center gap-6">
            {socials.map(({ name, icon: Icon, href }) => (
              <a key={name} href={href}>
                <Icon width={24} height={24} alt={name} />
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm leading-5">
            &copy; 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
