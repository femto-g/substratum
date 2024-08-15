import Nav from "@/components/nav/Nav";
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import IconImage from "@/components/image/IconImage";
import { ReactQueryProvider } from "@/components/providers/ReactQueryProvider";
import { SessionProvider } from "@/components/providers/SessionProvider";

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
      <body className="min-h-full bg-gradient-to-r from-sky-50 to-indigo-50">
        <div className="min-h-full relative overflow-hidden">
          <ReactQueryProvider>
            <SessionProvider>
              <Nav />
              {children}
            </SessionProvider>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
