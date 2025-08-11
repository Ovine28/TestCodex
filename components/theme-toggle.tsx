"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeProvider({ children, ...props }: any) {
  return <div {...props}>{children}</div>;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(t => (t === "dark" ? "light" : "dark"))}
      aria-label="Toggle theme"
      className="rounded-md p-2"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
