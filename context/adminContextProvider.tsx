// contexts/AdminContext.tsx
"use client";
import { createContext, useState, ReactNode } from "react";
import { AdminContextType } from "@/types";

export const AdminContext = createContext<AdminContextType | undefined>(
  undefined,
);

export default function AdminContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [adminNavLink, setAdminNavLink] = useState<string>("Dashboard");
  const [openAdminSidebar, setOpenAdminSidebar] = useState<boolean>(false);

  return (
    <AdminContext.Provider
      value={{
        adminNavLink,
        setAdminNavLink,
        openAdminSidebar,
        setOpenAdminSidebar,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
