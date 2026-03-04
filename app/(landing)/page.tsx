import React from "react";
import { MyParticle } from "@/components/ui/MyParticle";
import LandingHero from "@/components/landing/LandingHero";
import WorkExperience from "@/components/landing/WorkExperience";
import Skills from "@/components/landing/Skills";
import Projects from "@/components/landing/Projects";
import ContactDetails from "@/components/landing/ContactDetails";

export default function page() {
  return (
    <main aria-label="landing-page" className="relative">
      {/* Particle Background */}
      <div className="fixed inset-0 z-0">
        <MyParticle />
      </div>

      {/* Content Layer */}
      <div className="container relative z-10 flex flex-col gap-6 sm:gap-8 md:gap-20">
        <LandingHero />
        <WorkExperience />
        <Skills />
        <Projects />
        <ContactDetails />
      </div>
    </main>
  );
}
