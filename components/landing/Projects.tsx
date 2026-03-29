import React from "react";
import TitleText from "../ui/TitleText";
import { PenTool } from "lucide-react";

export default function Projects() {
  return (
    <section
      aria-label="projects"
      className="flex flex-col gap-6"
    >
      <TitleText title="Recent Projects" icon={PenTool} />
      <h1 className="text-center text-2xl font-bold text-primary">Comming Soon🎅</h1>
    </section>
  );
}
