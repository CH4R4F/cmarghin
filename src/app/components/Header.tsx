"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ThemeButton from "./ThemeButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import activePathName from "@/lib/activePathName";

const Header = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname() as string;

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className={"px-5 py-7"}>
      <div className="flex items-center justify-between">
        <Link href="/" id="logo" className="w-32">
          <CldImage
            src={`/logo-${resolvedTheme}.png`}
            alt="CMarghin logo"
            width={200}
            height={200}
          />
        </Link>

        <div className="flex space-x-4 items-center">
          {/* desktop navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-4 items-center justify-center flex-1 ">
              <li className={`py-3`}>
                <Link
                  className={` ${activePathName(
                    pathname,
                    ""
                  )} relative text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100`}
                  href="/"
                >
                  {pathname.split("/")[1] == "" && (
                    <motion.span
                      layoutId="underline"
                      className="absolute underline left-0 top-full h-[2px] w-full bg-slate-900 dark:bg-slate-100 rounded-full"
                    />
                  )}
                  Home
                </Link>
              </li>
              <li className={`py-3`}>
                <Link
                  className={` ${activePathName(
                    pathname,
                    "about"
                  )} relative text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100`}
                  href="/about"
                >
                  {pathname.split("/")[1] == "about" && (
                    <motion.span
                      layoutId="underline"
                      className="absolute underline left-0 top-full h-[2px] w-full bg-slate-900 dark:bg-slate-100 rounded-full"
                    />
                  )}
                  About
                </Link>
              </li>
              {/* <li className={`${activePathName(pathname, "projects")} py-3`}>
                <Link
                  className={` text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100`}
                  href="/projects"
                >
                  Projects
                </Link>
              </li> */}
              <li className={`py-3`}>
                <Link
                  className={`${activePathName(
                    pathname,
                    "blog"
                  )} relative text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100`}
                  href="/blog"
                >
                  {pathname.split("/")[1] == "blog" && (
                    <motion.span
                      layoutId="underline"
                      className="absolute underline left-0 top-full h-[2px] w-full bg-slate-900 dark:bg-slate-100 rounded-full"
                    />
                  )}
                  Blog
                </Link>
              </li>
              <li className={`py-3`}>
                <Link
                  className={`${activePathName(
                    pathname,
                    "contact"
                  )}  relative text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100`}
                  href="/contact"
                >
                  {pathname.split("/")[1] == "contact" && (
                    <motion.span
                      layoutId="underline"
                      className="absolute underline left-0 top-full h-[2px] w-full bg-slate-900 dark:bg-slate-100 rounded-full"
                    />
                  )}
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <ThemeButton />

          {/* mobile burger menu */}
          <button
            aria-label="Menu toggle"
            title="Open menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden dark:text-white/70"
          >
            <Bars3Icon className="w-8 h-8" />
          </button>
        </div>

        {/* mobile navigation */}
        <nav
          className={`absolute top-0 left-0 w-full h-screen bg-slate-100 dark:bg-black transition-opacity duration-500 ${
            open
              ? "opacity-100 pointer-events-auto z-40"
              : "opacity-0 pointer-events-none -z-40"
          }`}
        >
          {open && (
            <div className="flex-flex-col">
              <div className="text-right py-7 px-5">
                <button
                  aria-label="Menu toggle"
                  title="Close menu"
                  onClick={() => setOpen(!open)}
                  className="dark:text-white/70"
                >
                  <XMarkIcon className="w-8 h-8" />
                </button>
              </div>
              <ul className="flex flex-col items-center justify-center flex-1 text-xl">
                <li className={`${activePathName(pathname, "")} py-3`}>
                  <Link
                    aria-label="Home page link"
                    onClick={() => setOpen(!open)}
                    className={` text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100`}
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className={`${activePathName(pathname, "about")} py-3`}>
                  <Link
                    aria-label="About page link"
                    onClick={() => setOpen(!open)}
                    className={` text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100`}
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                {/* <li className={`${activePathName(pathname, "projects")} py-3`}>
                  <Link
                    onClick={() => setOpen(!open)}
                    className={` text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100`}
                    href="/projects"
                  >
                    Projects
                  </Link>
                </li> */}
                <li className={`${activePathName(pathname, "blog")} py-3`}>
                  <Link
                    aria-label="Blog page link"
                    onClick={() => setOpen(!open)}
                    className={` text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100`}
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li className={`${activePathName(pathname, "contact")} py-3`}>
                  <Link
                    aria-label="Contact page link"
                    onClick={() => setOpen(!open)}
                    className={` text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100`}
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>

        {/* <ThemeButton /> */}
      </div>
    </header>
  );
};

export default Header;
