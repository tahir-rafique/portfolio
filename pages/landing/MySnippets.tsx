import TitleText from "@/components/ui/TitleText";
import { PenTool } from "lucide-react";

export default function MySnippets() {
  return (
    <section aria-label="my snippets" className="flex flex-col gap-6">
      <TitleText title="My Snippets" icon={PenTool} />
    </section>
  );
}
