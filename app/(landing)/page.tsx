import React from "react";
import Navbar from "@/components/layout/navbar";

export default function page() {
  return (
    <main
      aria-label="home-main-page"
      className="min-h-screen min-w-screen h-full w-full bg-background overflow-y-auto"
    >
      <div className="container">
        <Navbar />
      </div>
    </main>
  );
}
