// types/context.types.ts
import { Dispatch, SetStateAction } from "react";

export interface AdminContextType {
  adminNavLink: string;
  setAdminNavLink: Dispatch<SetStateAction<string>>;

  openAdminSidebar: boolean;
  setOpenAdminSidebar: Dispatch<SetStateAction<boolean>>;
  //     ❌ What NOT to do this below one!

  // Typing it like this limits functionality:

  // (open: boolean) => void ❌❌❌
}

export type Theme = "light" | "dark";
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
