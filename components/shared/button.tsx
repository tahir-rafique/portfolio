import React from "react";
import Image from "next/image";
import { ButtonProps } from "@/types";
import { Badge } from "lucide-react";
import CustomIcon from "./customIcon";

export default function Button({
  onClick,
  className,
  text,
  loading = false,
  disabled = false,
  variant = "primary",
  iconImgStart,
  iconImgEnd,
  iconClass,
}: ButtonProps) {
  const getVariantClasses = () => {
    const baseClasses =
      "font-bold py-2 px-4 rounded flex items-center justify-center gap-2 disabled:cursor-not-allowed cursor-pointer transition-all duration-100";

    if (variant === "primary") {
      return `${baseClasses} bg-primary disabled:bg-red-500! text-white`;
    } else {
      return `${baseClasses} bg-gray-200 hover:bg-gray-300! disabled:bg-gray-100 text-gray-800 disabled:text-gray-400 border border-gray-300`;
    }
  };

  return (
    <button
      onClick={onClick}
      className={` ${getVariantClasses()} ${className} ${loading ? "cursor-wait" : ""}`}
      disabled={disabled || loading}
    >
      {loading && (
        <CustomIcon iconName={Badge} className="animate-spin " />
      )}

      {iconImgStart && (
        <Image
          src={iconImgStart}
          height={30}
          width={30}
          className={`${iconClass || "size-5"}`}
          alt="button-icon"
        />
      )}
      {text}
      {iconImgEnd && (
        <Image
          src={iconImgEnd}
          height={30}
          width={30}
          className={`${iconClass || "size-5"}`}
          alt="button-icon"
        />
      )}
    </button>
  );
}
