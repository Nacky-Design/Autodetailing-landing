import { Hero } from "@/components/sections/Hero/Hero";
import { Services } from "@/components/sections/Services/Services";
import { ScrollScene } from "@/components/scroll/ScrollScene";

export default function Home() {
  return (
    <main>
      <ScrollScene id="scene-a" label="Studio / Intro">
        <Hero />
        <Services />
      </ScrollScene>
    </main>
  );
}
