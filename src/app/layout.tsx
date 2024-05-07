import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevForges - Recourses for programmers",
  description: "A website for all type of programmers, when you will find all types recourses, IA, Audio, Animations, Analytics, etc",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
