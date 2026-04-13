import React from "react";
import Link from "next/link";
import TitleText from "../ui/TitleText";
import { ContactRound } from "lucide-react";
import { LandingPageData } from "@/data";
import ParaText from "../ui/ParaText";

export default function ContactDetails() {
  return (
    <section
      aria-label="contact-details"
      className="flex flex-col gap-6"
    >
      <TitleText
        title="Contact Details"
        icon={ContactRound}
      />
      <ParaText
        text={`I’m always open to new opportunities, collaborations, or just a good conversation. Whether you have a project in mind, need a creative partner, or want to discuss the latest in tech, I’d love to hear from you.`}
      />
      <div className="flex items-center gap-14">
        {LandingPageData.contactPlatforms.map((platform) => (
          <Link href={platform.href} key={platform.id}>
            <platform.icon
              className=" size-10"
              color="var(--primary)"
            />
          </Link>
        ))}
      </div>

    </section>
  );
}
