import TitleText from "@/components/ui/TitleText";
import { ContactRound } from "lucide-react";

export default function Education() {
  return (
    <section aria-label="education" className="flex flex-col gap-6">
      <TitleText title="Education" icon={ContactRound} />

      <h1 className="text-center text-2xl font-bold text-primary">
        Comming Soon🎅
      </h1>
    </section>
  );
}
