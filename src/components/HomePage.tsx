import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import References from "./References";
import Services from "./Services";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const target = document.querySelector(location.hash);
    if (!target) {
      return;
    }

    if (location.hash === "#leistungen") {
      const top = target.getBoundingClientRect().top + window.scrollY - 170;
      window.scrollTo({ top, behavior: "smooth" });
      return;
    }

    target.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Contact />
      <References />
    </main>
  );
}
