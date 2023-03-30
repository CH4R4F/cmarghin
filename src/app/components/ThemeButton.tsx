"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <SunIcon
          className="h-7 w-7 cursor-pointer text-gray-100"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonIcon
          className="h-7 w-7 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default ThemeButton;
