import { LayoutDashboard, User, BarChart3, Settings, Mail, Linkedin, Instagram, Github } from "lucide-react";

//    ---------------------------------    
//            Admin Data  
//  ----------------------------------- 
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

//    ---------------------------------------    
//              Landing Page Data 
//   ---------------------------------------- 

const LandingPageData = {


  // landing-page

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

  //   landing/skills
  skills: [
    {
      id: 1,
      icon: "/icons/skills/html.svg",
      label: "HTML",
    },
    {
      id: 2,
      icon: "/icons/skills/css.svg",
      label: "CSS",
    },
    {
      id: 3,
      icon: "/icons/skills/tailwind.svg",
      label: "TAILWIND CSS",
    },
    {
      id: 4,
      icon: "/icons/skills/sass.svg",
      label: "SCSS/SASS",
    },
    {
      id: 5,
      icon: "/icons/skills/javascript.svg",
      label: "JAVASCRIPT",
    },
    {
      id: 6,
      icon: "/icons/skills/typescript.svg",
      label: "TYPESCRIPT",
    },
    {
      id: 7,
      icon: "/icons/skills/react.svg",
      label: "REACT",
    },
    {
      id: 8,
      icon: "/icons/skills/nextjs.svg",
      label: "NEXT.JS",
    },
    {
      id: 9,
      icon: "/icons/skills/mui.svg",
      label: "MUI",
    },
    {
      id: 10,
      icon: "/icons/skills/antdesign.svg",
      label: "ANT DESIGN",
    },
    {
      id: 11,
      icon: "/icons/skills/figma.svg",
      label: "FIGMA",
    },
    {
      id: 12,
      icon: "/icons/skills/jest.svg",
      label: "JEST",
    },
    {
      id: 13,
      icon: "/icons/skills/firebase.svg",
      label: "FIREBASE",
    },
    {
      id: 14,
      icon: "/icons/skills/supabase.svg",
      label: "SUPABASE",
    },
  ],

  //   landing/contact-details
  contactPlatforms: [
    {
      id: 1,
      icon: Mail,
      href: "/",
    },
    {
      id: 2,
      icon: Linkedin,
      href: "/",
    },
    {
      id: 3,
      icon: Instagram,
      href: "/",
    },

    {
      id: 4,
      icon: Github,
      href: "/",
    },

  ]
};

export { AdminData, LandingPageData };
