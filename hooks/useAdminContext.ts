"use client";
import { useContext } from "react";
import { AdminContext } from "@/context/adminContextProvider";

export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdminContext must be used within AdminContextProvider");
  }
  return context;
};
