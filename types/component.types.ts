// types/icon.types.ts
import { LucideIcon } from "lucide-react";

export interface IconTypes {
  iconName: LucideIcon;
  className?: string;
  onClick?: () => void;
}
