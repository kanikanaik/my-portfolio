import Contact2 from "./components/Hero/Contact2";
import Hero from "./components/Hero/Hero";
import Second from "./components/Hero/Second";
import Skills from "./components/Hero/Skills";
import Contact from "./contactme/components/Contact";
// import {motion} from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col font-semibold">
      <Hero />
      <Second/>
      <Skills/>
      <Contact2/>
    </main>
  );
}
