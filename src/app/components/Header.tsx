"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ThemeButton from "./ThemeButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import activePathName from "@/lib/activePathName";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className={"px-5 py-7"}>
      <div className="flex items-center justify-between">
        <div id="logo" className="w-32">
          <Image
            src={`/assets/logo-${theme}.png`}
            alt="logo"
            width={200}
            height={200}
          />
        </div>

        <div className="flex space-x-4 items-center">
          {/* desktop navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-4 items-center justify-center flex-1 ">
              <li className={`${activePathName(pathname, "")} py-3`}>
                <Link
                  className={` text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className={`${activePathName(pathname, "about")} py-3`}>
                <Link
                  className={` text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100`}
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li className={`${activePathName(pathname, "projects")} py-3`}>
                <Link
                  className={` text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100`}
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className={`${activePathName(pathname, "blog")} py-3`}>
                <Link
                  className={` text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100`}
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className={`${activePathName(pathname, "contact")} py-3`}>
                <Link
                  className={` text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100`}
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <ThemeButton />

          {/* mobile burger menu */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden dark:text-white/70"
          >
            <Bars3Icon className="w-8 h-8" />
          </button>
        </div>

        {/* mobile navigation */}
        <nav
          className={`absolute top-0 left-0 w-screen h-screen bg-gray-100 dark:bg-black transition-opacity duration-500 ${
            open
              ? "opacity-100 pointer-events-auto z-40"
              : "opacity-0 pointer-events-none -z-40"
          }`}
        >
          {open && (
            <div className="flex-flex-col">
              <div className="text-right py-7 px-5">
                <button
                  onClick={() => setOpen(!open)}
                  className="dark:text-white/70"
                >
                  <XMarkIcon className="w-8 h-8" />
                </button>
              </div>
              <ul className="flex flex-col items-center justify-center flex-1 text-xl">
                <li className={`${activePathName(pathname, "")} py-3`}>
                  <Link
                    className={` text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100`}
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className={`${activePathName(pathname, "about")} py-3`}>
                  <Link
                    className={` text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100`}
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li className={`${activePathName(pathname, "projects")} py-3`}>
                  <Link
                    className={` text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100`}
                    href="/projects"
                  >
                    Projects
                  </Link>
                </li>
                <li className={`${activePathName(pathname, "blog")} py-3`}>
                  <Link
                    className={` text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100`}
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li className={`${activePathName(pathname, "contact")} py-3`}>
                  <Link
                    className={` text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100`}
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
