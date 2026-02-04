import React from "react";
import Image from "next/image";
import { ButtonProps } from "@/types";

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
      return `${baseClasses} bg-blue-500 hover:bg-blue-700! disabled:bg-gray-400 text-white`;
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
        <svg
          className=" animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
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
