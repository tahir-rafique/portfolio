import React from "react";
import TitleText from "../TitleText";
import { PenTool } from "lucide-react";
import { LandingPageData } from "@/data";
import Image from "next/image";

export default function Skills() {
  return (
    <div className=" flex flex-col gap-6">
      <TitleText title="Skills" icon={PenTool} />
      <p className="text-2xl">
        While I'm always eager to explore new tools and technologies, Following
        are the ones I feel most comfortable with -
      </p>

      <div className=" grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
        {LandingPageData.skills.map((skill) => (
          <div
            key={skill.id}
            className={`relative group flex flex-col items-center justify-center gap-3 cursor-pointer bg-border hover:bg-border/80  p-3 py-4 rounded-secondary shadow-primary`}
          >
            <Image src={skill.icon} height={60} width={60} alt={skill.label} />
            <span className="text-center text-base font-medium uppercase leading-[170%]">
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
