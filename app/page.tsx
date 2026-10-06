import { Hero } from "@/components/sections/Hero/Hero";
import { Services } from "@/components/sections/Services/Services";
import { Configurator } from "@/components/sections/Configurator/Configurator";
import { About } from "@/components/sections/About/About";
import { Portfolio } from "@/components/sections/Portfolio/Portfolio";
import { ScrollScene } from "@/components/scroll/ScrollScene";
import { Pricing } from "@/components/sections/Pricing/Pricing";
import { Faq } from "@/components/sections/Faq/Faq";
import { FinalCta } from "@/components/sections/FinalCta/FinalCta";

export default function Home() {
  return (
    <main>
      <ScrollScene id="scene-a" label="Studio / Intro">
        <Hero />
        <Services />
        <Configurator />
        <About />
        <Portfolio />
      </ScrollScene>
      <Pricing />
      <Faq />
      <FinalCta />
    </main>
  );
}
