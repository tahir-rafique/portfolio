import { satoshi, inter } from "@/fonts/fonts";
import "../styles/globals.css";
import React from "react";
import AdminContextProvider from "@/context/adminContextProvider";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/themeContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://tahir-rafique.vercel.app/"),

  title: {
    default:
      "Tahir Rafique | Full Stack Developer (MERN, Next.js, React Native)",
    template: "%s | Tahir Rafique",
  },

  description:
    "Full Stack Developer specializing in MERN Stack, Next.js, and React Native. I build fast, scalable, and secure web and mobile applications for startups and businesses worldwide.",

  keywords: [
    "Tahir Rafique",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React.js Developer",
    "React Native Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Freelance Software Engineer",
    "Freelance Developer",
    "Mobile App Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
  ],

  authors: [{ name: "Tahir Rafique" }],

  alternates: {
    canonical: "https://tahir-rafique.vercel.app/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    title: "Tahir Rafique | Full Stack Developer",
    description:
      "MERN Stack & React Native Developer building modern, high-performance web and mobile applications.",
    url: "https://tahir-rafique.vercel.app/",
    siteName: "Tahir Rafique Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tahir Rafique | Full Stack Developer",
    description:
      "Full Stack Developer (MERN, Next.js, React Native). Available for freelance projects.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tahir Rafique",
  jobTitle: "Full Stack Developer & Software Engineer",
  description:
    "Experienced Full Stack Developer specializing in MERN stack development and Next.js also expert in React Native mobile applications",
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Full Stack Developer",
    "Mobile App Development",
    "Web Development",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Freelance Developer (Full Stack Developer)",
    occupationLocation: {
      "@type": "Place",
      name: "Remote, Islamabad Pakistan",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${satoshi.variable} ${inter.variable} antialiased bg-background`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <AdminContextProvider>{children}</AdminContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
