import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/floating-navbar";
import Grid from "./components/grid";
import { navItems } from "./data";
import Recentprojects from "./components/Recentprojects";
import Clients from "./components/Clients";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <main className="bg-black-100 overflow-hidden relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <Grid/>
      <Recentprojects/>
      <Pricing/>

      <Experience/>
      <Contact/>
    </main>
  );
}
