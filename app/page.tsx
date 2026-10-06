import { Hero } from "@/components/sections/Hero/Hero";
import { Header } from "@/components/layout/Header";
import { Services } from "@/components/sections/Services/Services";
import { Configurator } from "@/components/sections/Configurator/Configurator";
import { About } from "@/components/sections/About/About";
import { Portfolio } from "@/components/sections/Portfolio/Portfolio";
import { ScrollScene } from "@/components/scroll/ScrollScene";
import { Pricing } from "@/components/sections/Pricing/Pricing";
import { Faq } from "@/components/sections/Faq/Faq";
import { Reviews } from "@/components/sections/Reviews/Reviews";
import { ContactFooter } from "@/components/sections/ContactFooter/ContactFooter";

export default function Home() {
  return (
    <main>
      <Header />
      <ScrollScene id="scene-a" label="Studio / Intro">
        <Hero />
        <Services />
        <Configurator />
        <About />
        <Portfolio />
      </ScrollScene>
      <Pricing />
      <Faq />
      <Reviews />
      <ContactFooter />
    </main>
  );
}
