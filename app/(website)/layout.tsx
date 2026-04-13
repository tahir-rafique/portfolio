import Navbar from "@/components/layout/navbar";
import React from "react";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section
      aria-label="main-layout"
      className="h-full w-full bg-background">
      <Navbar />
      {children}
    </section>
  );
}
