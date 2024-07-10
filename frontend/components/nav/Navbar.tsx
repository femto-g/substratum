"use client";
import Link from "next/link";
import IconImage from "../image/IconImage";
import { useMediaQuery } from "usehooks-ts";
import HamburgerButton from "../button/HamburgerButton";
import useBreakpoint from "@/hooks/useBreakpoint";

export default function Navbar({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-row h-20 font-semibold text-lg px-10 py-1 items-center">
      {children}
    </div>
  );
}
