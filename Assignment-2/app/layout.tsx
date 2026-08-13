import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "CountryExplorer",
  description: "Explore countries around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0d1117] text-slate-100 antialiased">
        <div className="min-h-screen bg-[#0d1117]">
          <Navigation />

          <main className="mx-auto min-h-[calc(100vh-140px)] w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-[#27313d] bg-gradient-to-b from-[#111820] to-[#0b0f14]">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                
                {/* Brand */}
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#385452] bg-[#17252a] text-lg">
                    🌍
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Country
                      <span className="text-[#5eead4]">Explorer</span>
                    </p>

                    <p className="mt-0.5 text-xs text-[#687585]">
                      Explore countries around the world.
                    </p>
                  </div>
                </div>

                {/* Footer Navigation */}
                <div className="flex items-center gap-2">
                  <a
                    href="/"
                    className="rounded-lg px-3 py-2 text-xs font-semibold text-[#8b98a7] transition hover:bg-[#182129] hover:text-[#5eead4]"
                  >
                    Countries
                  </a>

                  <a
                    href="/about"
                    className="rounded-lg px-3 py-2 text-xs font-semibold text-[#8b98a7] transition hover:bg-[#182129] hover:text-[#5eead4]"
                  >
                    About
                  </a>
                </div>
              </div>

              {/* Bottom Divider */}
              <div className="mt-7 border-t border-[#27313d] pt-5 text-center">
                <p className="text-xs text-[#687585]">
                  CountryExplorer · Explore countries around the world.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}