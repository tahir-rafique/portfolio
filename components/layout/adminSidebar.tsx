"use client";
import { AdminData } from "@/data";
import { useAdminContext } from "@/hooks/useAdminContext";
import {
  CircleChevronLeft,
  CircleChevronRight,
  LogOut,
  PersonStanding,
} from "lucide-react";
import { useThemeContext } from "@/hooks/useThemeContext";
import ThemeChangeButton from "../ui/ThemeChangeButton";
import CustomIcon from "../shared/customIcon";
import Link from "next/link";

export default function AdminSidebar() {
  const { theme, toggleTheme } = useThemeContext();
  const {
    adminNavLink,
    setAdminNavLink,
    openAdminSidebar,
    setOpenAdminSidebar,
  } = useAdminContext();

  return (
    <aside
      aria-label="admin-sidebar"
      className={`bg-background transition-all duration-300 ${
        openAdminSidebar ? "w-[100px]!" : ""
      } h-full w-full max-w-[250px] max-lg:rounded-l-none! max-lg:border-r rounded-secondary p-3 relative max-lg:fixed top-0 bottom-0 left-0 `}
    >
      <button
        aria-label="toggle-sidebar"
        onClick={() => setOpenAdminSidebar((prev) => !prev)}
        className="absolute -right-2 top-10 bg-primary scale-95 hover:scale-100 hover:animate-pulse transition-colors duration-75 rounded-full cursor-pointer"
      >
        {openAdminSidebar ? (
          <CustomIcon iconName={CircleChevronRight} />
        ) : (
          <CustomIcon iconName={CircleChevronLeft} />
        )}
      </button>

      {/* logo */}
      {openAdminSidebar ? (
        <CustomIcon iconName={PersonStanding} className="size-12 mx-auto" />
      ) : (
        <h1 className="text-[clamp(1.25rem,5vw,1.875rem)] font-semibold text-center font-satoshi">
          Tahir Rafique
        </h1>
      )}

      <div className="flex flex-col gap-5 justify-between h-full max-h-[calc(100%-60px)]">
        <div className="flex flex-col justify-between gap-10  h-full">
          <ul className="space-y-2 pt-4 w-full">
            {AdminData.adminSidebarLinks.map((navlink) => {
              return (
                <li
                  key={navlink.id}
                  className={`text-xl font-inter leading-[140%] rounded-lg p-2 flex items-center gap-3 cursor-pointer transition-all duration-75 ${
                    adminNavLink === navlink.label
                      ? "bg-primary text-white font-medium"
                      : "hover:bg-primary hover:text-white"
                  }  ${
                    openAdminSidebar
                      ? " justify-center w-full min-w-[50px] min-h-[50px]"
                      : ""
                  } `}
                  onClick={() => setAdminNavLink(navlink.label)}
                >
                  <CustomIcon iconName={navlink.icon} className={`size-6`} />
                  <span className={` ${openAdminSidebar ? " hidden" : ""} `}>
                    {navlink.label}
                  </span>
                </li>
              );
            })}
          </ul>

          <Link
            href={"/"}
            className=" flex items-center gap-2 p-2 border-t pb-10 pt-4"
          >
            <CustomIcon
              iconName={LogOut}
              className={`size-6  ${openAdminSidebar ? "mx-auto" : ""} `}
            />
            <span className={` ${openAdminSidebar ? "hidden" : ""}`}>
              Log Out
            </span>
          </Link>
        </div>

        <div className=" flex justify-center items-center gap-2">
          <ThemeChangeButton />
          <p
            className={` text-center text-sm font-satoshi font-medium ${
              openAdminSidebar ? " hidden" : ""
            }`}
          >
            Created by @Tahir!
          </p>
        </div>
      </div>
    </aside>
  );
}
