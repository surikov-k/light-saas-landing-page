import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import { twMerge } from "tailwind-merge";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "bg-[#EAEEFE] antialiased")}>
        {children}
      </body>
    </html>
  );
}
