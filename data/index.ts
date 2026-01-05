import { LayoutDashboard, User, BarChart3, Settings } from "lucide-react";

//    ----------    Admin Data   -----------  //
const AdminData = {
  adminSidebarLinks: [
    {
      id: 1,
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: 2,
      label: "Profile",
      icon: User,
    },
    {
      id: 3,
      label: "Analytics",
      icon: BarChart3,
    },
    {
      id: 4,
      label: "Setting",
      icon: Settings,
    },
  ],
};

//    ----------    Landing Page Data   -----------  //

const LandingPageData = {
  //   landing/navbar
  navLinks: [
    {
      id: 1,
      label: "Home",
    },
    {
      id: 2,
      label: "Blogs",
    },
    {
      id: 3,
      label: "Components",
    },
    // {
    //   id: 4,
    //   label: "Setting",
    // },
  ],
  skills: [
    {
      id: 1,
      icon: "",
      label: "HTML",
    },
    {
      id: 2,
      icon: "",
      label: "CSS",
    },
    {
      id: 3,
      icon: "",
      label: "TAILWIND CSS",
    },
    {
      id: 4,
      icon: "",
      label: "SCSS/SASS",
    },
    {
      id: 5,
      icon: "",
      label: "JAVASCRIPT",
    },
    {
      id: 6,
      icon: "",
      label: "TYPESCRIPT",
    },
    {
      id: 7,
      icon: "",
      label: "REACT",
    },
    {
      id: 8,
      icon: "",
      label: "NEXT.JS",
    },
    {
      id: 9,
      icon: "",
      label: "MUI",
    },
    {
      id: 10,
      icon: "",
      label: "ANT DESIGN",
    },
    {
      id: 11,
      icon: "",
      label: "FIGMA",
    },
    {
      id: 12,
      icon: "",
      label: "JEST",
    },
    {
      id: 13,
      icon: "",
      label: "FIREBASE",
    },
    {
      id: 14,
      icon: "",
      label: "SUPABASE",
    },
  ],
};

export { AdminData, LandingPageData };
