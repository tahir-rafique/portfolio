import { BriefcaseBusiness } from "lucide-react";
import TitleText from "@/components/ui/TitleText";

export default function WorkExperience() {
  return (
    <section aria-label="work experience" className="flex flex-col gap-6">
      <TitleText title="Work Experience" icon={BriefcaseBusiness} />

      <h1 className="text-center text-2xl font-bold text-primary">
        Comming Soon🎅
      </h1>
    </section>
  );
}
