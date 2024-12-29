import Image from "next/image";

import ArrowRightIcon from "@/assets/arrow-right.svg";
import logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";

const links = [
  {
    name: "About",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Customers",
    href: "#",
  },
  {
    name: "Updates",
    href: "#",
  },
  {
    name: "Help",
    href: "#",
  },
];

export const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="flex items-center justify-center bg-black py-3 text-xs text-white">
        <div className="inline-flex items-center gap-3">
          <p className="hidden text-sm text-white/60 md:block">
            Streamline your workflow and boost your productivity.
          </p>
          <div className="flex items-center gap-1">
            {" "}
            <p>Get started for free</p>
            <ArrowRightIcon className="inline-flex size-4 items-center justify-center" />
          </div>
        </div>
      </div>
      <div className="py-5 md:py-4 lg:py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={logo} alt="Logo Saas" height={40} width={40} />
            <nav className="hidden items-center gap-6 text-black/60 md:flex">
              {links.map(({ name, href }) => (
                <a key={name} href={href} className="">
                  {name}
                </a>
              ))}
              <button className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 font-medium tracking-tight text-white hover:bg-black/80">
                Get for free
              </button>
              {/*Get for free*/}
            </nav>
            <MenuIcon className="inline-flex size-5 items-center justify-center md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
