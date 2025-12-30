import { Inter } from "next/font/google";
import localFont from "next/font/local";

/*    Satoshi – Headings         */
export const satoshi = localFont({
    src: [
        {
            path: "./Satoshi-Variable.woff2",
            style: "normal",
        },
    ],
    variable: "--font-satoshi",
    display: "swap",
});

/*       Inter – Body / UI       */
export const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-inter",
    display: "swap",
});
