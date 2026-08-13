import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assignment 3 — Route Handlers + Forms",
  description:
    "Next.js route handlers, environment variables, server actions, and Zod validation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}