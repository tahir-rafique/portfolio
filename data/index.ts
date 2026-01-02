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
      label: "Analytics",
    },
    {
      id: 4,
      label: "Setting",
    },
  ],
};

export { AdminData, LandingPageData };
