import React from "react";
import Link from "next/link";
import TitleText from "../ui/TitleText";
import { BriefcaseBusiness, ContactRound } from "lucide-react";
import { LandingPageData } from "@/data";
import ParaText from "../ui/ParaText";

export default function Education() {
  return (
    <section
      aria-label="education"
      className="flex flex-col gap-6"
    >
      <TitleText
        title="Education"
        icon={ContactRound}
      />

      <h1 className="text-center text-2xl font-bold text-primary">Comming Soon🎅</h1>


    </section>
  );
}
