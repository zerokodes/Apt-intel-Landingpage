import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import WhatWeDo from "../components/sections/WhatWeDo";
import Process from "../components/sections/Process";
import WhyUs from "../components/sections/WhyUs";
import Solutions from "../components/sections/Solutions";
import UseCases from "../components/sections/UseCases";
import FAQ from "../components/sections/FAQ";
import ContactCTA from "../components/sections/ContactCTA";

export default function LandingPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (!el) return;
    setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
  }, [hash]);

  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Process />
        <WhyUs />
        <Solutions />
        <UseCases />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
