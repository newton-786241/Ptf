import Image from "next/image";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import Grid from "./components/grid";
import { navItems } from "./data";
import Demo from "./components/ui/aurorademo";
import Recentprojects from "./components/Recentprojects";
import Clients from "./components/Clients";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-black-100 overflow-hidden relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <Grid/>
      <Recentprojects/>
      <Clients/>
      <Experience/>
      <Contact/>
    </main>
  );
}
