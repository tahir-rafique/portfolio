import { MyParticle } from "@/components/ui/MyParticle";
import LandingHero from "@/pages/landing/LandingHero";
import WorkExperience from "@/pages/landing/WorkExperience";
import Skills from "@/pages/landing/Skills";
import Projects from "@/pages/landing/Projects";
import ContactDetails from "@/pages/landing/ContactDetails";
import Certification from "@/pages/landing/Certification";
import Education from "@/pages/landing/Education";

export default function Page() {
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
        <Education />
        <Certification />
        <ContactDetails />
      </div>
    </main>
  );
}
