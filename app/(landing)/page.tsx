import React from "react";
import { MyParticle } from "@/components/ui/MyParticle";
import LandingHero from "@/components/ui/landing/LandingHero";
import Skills from "@/components/ui/landing/Skills";
import WorkExperience from "@/components/ui/landing/WorkExperience";
import Projects from "@/components/ui/landing/Projects";
import ContactDetails from "@/components/ui/landing/ContactDetails";

export default function page() {
  return (
    <main aria-label="home-main-page" className="relative">
      {/* Particle Background */}
      <div className="fixed inset-0 z-0">
        <MyParticle />
      </div>

      {/* Content Layer */}
      <div className="container flex flex-col gap-6 sm:gap-8">
        <LandingHero />
        <WorkExperience />
        <Skills />
        <Projects />
        <ContactDetails />
      </div>
    </main>
  );
}
