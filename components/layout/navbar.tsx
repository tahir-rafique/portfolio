"use client";
import React, { useEffect, useState } from "react";
import { LandingPageData } from "@/data";
import ThemeChangeButton from "../ui/ThemeChangeButton";
import AdminAuthModal from "@/modals/adminAuthModal";
import Button from "../shared/button";

export default function Navbar() {
  const [openAdminAuthModal, setOpenAdminAuthModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset >= 10);
    };
    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="navbar"
      className={`container flex items-center justify-between sticky top-4 z-999 py-4! rounded-secondary transition-all duration-10800 ease-out ${scrolled
        ? " bg-background/80 border  shadow-primary"
        : " border border-transparent!"
        }`}
    >
      <div className="flex items-end">
        <h1 className="text-[clamp(0.8rem,5vw,1.6rem)] font-black leading-[110%] capitalize">
          TahirRafique
        </h1>
        <span className="block h-2 w-2 bg-primary rounded-full" />
      </div>

      <ul className="flex items-center gap-4">
        {LandingPageData.navLinks.map((navlink) => (
          <li key={navlink.id}>{navlink.label}</li>
        ))}
      </ul>

      <div className="flex items-center gap-4 lg:gap-6">
        {/* --- go to admin page (if you are admin only by entring the password) ---- */}

        <Button
          onClick={() => setOpenAdminAuthModal(true)}
          text="Admin"
          className="bg-primary py-1 px-3 rounded-primary text-white font-semibold cursor-pointer hover:shadow-sm transition-all duration-100 hover:bg-primary/70 hover:text-text-heading"
        />
        <ThemeChangeButton />
      </div>

      <AdminAuthModal
        open={openAdminAuthModal}
        setOpen={setOpenAdminAuthModal}
      />
    </nav>
  );
}