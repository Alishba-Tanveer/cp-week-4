"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/dashboard",
    label: "Dashboard",
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-transform group-hover:scale-105">
            N
          </div>

          <div>
            <p className="text-lg font-bold tracking-tight text-slate-900">
              NextFlow
            </p>
            <p className="text-xs font-medium text-slate-500">
              Next.js Workspace
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1 sm:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-600 hover:bg-white hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-sm font-medium text-slate-600">
            System Online
          </span>
        </div>

        <div className="flex items-center sm:hidden">
          <Link
            href="/dashboard"
            className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white"
          >
            Dashboard
          </Link>
        </div>
      </nav>
    </header>
  );
}
