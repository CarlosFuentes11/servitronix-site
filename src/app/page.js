import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Capabilities from "../sections/Capabilities";
import Projects from "../sections/Projects";
import Industries from "../sections/Industries";
import Contact from "../sections/Contact";
import Clients from "../sections/Clients";
import Suppliers from "../sections/Suppliers";
import Certifications from "../sections/Certifications";
import ValueProposition from "../sections/ValueProposition";
import Process from "../sections/Process";
import Compliance from "../sections/Compliance";

export default function Home() {
  return (
    <main>

      <Hero />

      <About />

      <ValueProposition />

      <Services />

      <Capabilities />

      <Process />

      <Projects />

      <Clients />

      <Suppliers />

      <Certifications />

      <Compliance />

      <Industries />

      <Contact />

    </main>
  );
}