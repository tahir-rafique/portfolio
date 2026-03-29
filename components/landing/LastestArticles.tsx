import React from "react";
import { BriefcaseBusiness, PenTool } from "lucide-react";
import TitleText from "../ui/TitleText";

export default function LastestArticles() {
  return (
    <section
      aria-label="latest articles"
      className="flex flex-col gap-6"
    >
      <TitleText title="Latest Articles" icon={PenTool} />

      <h1 className="text-center text-2xl font-bold text-primary">Comming Soon🎅</h1>

    </section>
  );
}
