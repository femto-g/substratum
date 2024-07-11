import Nav from "@/components/nav/Nav";
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import IconImage from "@/components/image/IconImage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Substratum",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={"h-full " + inter.className}>
      <body className="min-h-full">
        <div className="bg-gradient-to-r from-sky-50 to-indigo-50 min-h-full relative overflow-hidden">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
