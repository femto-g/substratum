"use client";

import Navbar from "./Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import useBreakpoint from "@/hooks/useBreakpoint";
import HamburgerButton from "../button/HamburgerButton";
import IconImage from "../image/IconImage";
import { usePathname } from "next/navigation";
import useResponsiveRender from "@/hooks/useResponsiveRender";

export default function Nav() {
  const responsive = useResponsiveRender();
  const nonMobile = useBreakpoint("md");
  const path = usePathname();
  useEffect(() => {
    setMobileNavVisible(false);
  }, [path]);

  const [mobileNavVisible, setMobileNavVisible] = useState<boolean>(false);

  useEffect(() => {
    mobileNavVisible
      ? (document.body.className = "min-h-full overflow-hidden")
      : (document.body.className = "min-h-full");
  }, [mobileNavVisible]);

  const toggleMobileNav = () => {
    setMobileNavVisible((visible) => !visible);
  };
  return (
    <div className="">
      <Navbar>
        <div className="basis-1/4">
          <Link href="/">
            <div className=" flex flex-row items-center gap-3">
              <IconImage
                src="/substratum.svg"
                alt="substratum"
                height={40}
                width={40}
              />
              Substratum
            </div>
          </Link>
        </div>
        {responsive ? (
          nonMobile ? (
            <div className="basis-3/4">
              <span className="flex flex-row justify-between">
                <span className="flex gap-6">
                  <Link href={"/about"}>About</Link>
                  <Link href={"/docs"}>Docs</Link>
                </span>
                <span className="flex gap-6">
                  <Link href={"/signup"}>Sign Up</Link>
                  <Link href={"/login"}>Log In</Link>
                </span>
              </span>
            </div>
          ) : (
            <div className="ml-auto">
              <HamburgerButton onClick={toggleMobileNav} />
            </div>
          )
        ) : null}
      </Navbar>
      {!nonMobile && responsive ? (
        <span
          className={
            (mobileNavVisible ? "opacity-1 left-0 " : "opacity-0 left-full ") +
            "flex flex-col absolute bg-gradient-to-r from-sky-50 to-indigo-50 opacity-100 text-2xl w-full h-full px-10 gap-3 transition-all duration-300"
          }
        >
          <Link href={"/about"}>About</Link>
          <Link href={"/docs"}>Docs</Link>
          <Link href={"/signup"}>Sign Up</Link>
          <Link href={"/login"}>Log In</Link>
        </span>
      ) : null}
    </div>
  );
}
