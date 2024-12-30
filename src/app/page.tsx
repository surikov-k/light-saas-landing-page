import { CallToAction } from "@/sections/call-to-action";
import { Header } from "@/sections/header";
import { Hero } from "@/sections/hero";
import { LogoTicker } from "@/sections/logo-ticker";
import { Pricing } from "@/sections/pricing";
import { ProductShowcase } from "@/sections/product-showcase";
import { Testimonials } from "@/sections/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </>
  );
}
