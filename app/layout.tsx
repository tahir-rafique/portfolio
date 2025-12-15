import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tahir Rafique - Full Stack Developer | MERN Stack Expert | Mobile & Web Development",
  description: "Experienced Full Stack Developer and Freelance Software Engineer specializing in MERN stack development (MongoDB, Express.js, React, Node.js). Expert in building scalable web applications and cross-platform mobile apps using React Native. Offering professional JavaScript/TypeScript development services with a focus on modern, responsive, and high-performance solutions. Available for freelance projects including custom web development, mobile app development, API integration, database design, and end-to-end software engineering solutions.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Freelance Software Engineer",
    "React Developer",
    "React Native Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "MongoDB Expert",
    "Express.js Developer",
    "Mobile App Developer",
    "Web Application Development",
    "Cross-Platform Development",
    "API Development",
    "Frontend Developer",
    "Backend Developer",
    "Freelance Web Developer",
    "Custom Software Development",
    "Tahir Rafique"
  ],
  authors: [{ name: "Tahir Rafique" }],
  openGraph: {
    title: "Tahir Rafique - Full Stack Developer | MERN Stack Expert",
    description: "Professional Full Stack Developer specializing in MERN stack, React Native mobile development, and modern web applications. Available for freelance projects.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahir Rafique - Full Stack Developer",
    description: "Expert MERN Stack Developer & Mobile App Engineer. Building scalable web and mobile solutions.",
  },
  icons: {
    icon: "./favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Tahir Rafique",
  "jobTitle": "Full Stack Developer & Software Engineer",
  "description": "Experienced Full Stack Developer specializing in MERN stack development and React Native mobile applications",
  "knowsAbout": [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Full Stack Development",
    "Mobile App Development",
    "Web Development"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Freelance Software Engineer",
    "occupationLocation": {
      "@type": "Place",
      "name": "Remote, Islamabad Pakistan"
    }
  }
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}