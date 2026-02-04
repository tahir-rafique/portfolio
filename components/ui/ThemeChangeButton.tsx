"use client";
import React from "react";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Moon, Sun } from "lucide-react";
import CustomIcon from "../shared/customIcon";

export default function ThemeChangeButton() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      onMouseDown={() => new Audio("/sounds/click.wav").play()}
      className="cursor-pointer transition-all duration-200  scale-100 hover:scale-90 animate-pulse"
      aria-label="toggle theme button"
    >
      {theme === "light" ? (
        <CustomIcon iconName={Sun} className="size-6 " />
      ) : (
        <CustomIcon iconName={Moon} className="size-6" />
      )}
    </button>
  );
}
