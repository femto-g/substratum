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
    <html lang="en" className={"overflow-x-hidden h-full " + inter.className}>
      <body className="min-h-full relative overflow-x-hidden">
        <div className="bg-gradient-to-r from-sky-50 to-indigo-50 h-full">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
