import type { Metadata } from "next";
import Navigation from "../components/Navigation";

import "./globals.css";

export const metadata: Metadata = {
  title: "NextFlow | Week 4",
  description: "Professional Next.js App Router assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen text-slate-900 antialiased">
        <div className="min-h-screen bg-transparent">
          <Navigation />

          <main className="mx-auto min-h-[calc(100vh-160px)] w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </main>

          <footer className="border-t border-slate-200/70 bg-white/60 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <p>© 2026 NextFlow. Built with Next.js & TypeScript.</p>

              <p>
                Week 4 · Assignment 1
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
