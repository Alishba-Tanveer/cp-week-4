"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isCountriesPage =
    pathname === "/" || pathname.startsWith("/country/");

  const isAboutPage = pathname === "/about";

  return (
    <header className="sticky top-0 z-50 border-b border-[#27313d] bg-[#0d1117]/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition"
        >
          {/* World Icon */}
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#385452] bg-[#17252a] text-lg transition duration-300 hover:border-[#5eead4] hover:bg-[#1b3333]">
            🌍
          </div>

          {/* Brand */}
          <span className="text-xl font-bold tracking-tight text-white">
            Country
            <span className="text-[#5eead4]">Explorer</span>
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2 text-sm font-medium">

          <Link
            href="/"
            className={`rounded-lg px-4 py-2 transition ${
              isCountriesPage
                ? "bg-[#17302f] text-[#5eead4] shadow-sm"
                : "text-[#aeb8c4] hover:bg-[#151d25] hover:text-[#5eead4]"
            }`}
          >
            Countries
          </Link>

          <Link
            href="/about"
            className={`rounded-lg px-4 py-2 transition ${
              isAboutPage
                ? "bg-[#17302f] text-[#5eead4] shadow-sm"
                : "text-[#aeb8c4] hover:bg-[#151d25] hover:text-[#5eead4]"
            }`}
          >
            About
          </Link>

        </div>
      </nav>
    </header>
  );
}