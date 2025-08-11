"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, Search as SearchIcon } from "lucide-react";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur transition-colors ${
        scrolled ? "bg-white/70 dark:bg-gray-900/70" : "bg-transparent"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold">Arcadine</Link>
        <div className="flex items-center gap-4">
          <Link href="/store" className={pathname === "/store" ? "font-medium" : ""}>Store</Link>
          <Link href="/compare" className={pathname === "/compare" ? "font-medium" : ""}>Compare</Link>
          <Link href="/support" className={pathname === "/support" ? "font-medium" : ""}>Support</Link>
          <button aria-label="Search">
            <SearchIcon className="h-5 w-5" />
          </button>
          <ThemeToggle />
          <button aria-label="Menu" className="md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}
