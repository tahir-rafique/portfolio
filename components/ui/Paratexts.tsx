import { ParaTextProps } from "@/types/component.types";

export default function ParaText({ text, className }: ParaTextProps) {
  return (
    <p
      className={`text-base sm:text-lg lg:text-2xl text-muted-foreground font-inter ${className}`}
    >
      {text}
    </p>
  );
}
