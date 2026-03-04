"use client";
import React from "react";
import AdminSidebar from "@/components/layout/adminSidebar";
import { useAdminContext } from "@/hooks/useAdminContext";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { openAdminSidebar } = useAdminContext();

  return (
    <section
      aria-label="admin-layout"
      className="w-svw h-svh flex gap-2.5 p-3 bg-[#A78BFA]">
      <AdminSidebar />
      <div
        className={`w-full  h-full max-lg:pl-[100px] ${openAdminSidebar
          ? "w-full max-lg:pl-[100px] lg:max-w-[calc(100%-110px)]"
          : "w-full! lg:max-w-[calc(100%-260px)]"
          } `}
      >
        {children}
      </div>
    </section>
  );
}
