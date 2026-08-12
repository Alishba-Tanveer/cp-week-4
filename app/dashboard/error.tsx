"use client";

import { useEffect } from "react";

interface DashboardErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function DashboardError({
  error,
  reset,
}: DashboardErrorProps) {
  useEffect(() => {
    console.error("Dashboard Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-xl rounded-2xl border border-red-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
          <span className="text-2xl text-red-600">!</span>
        </div>

        <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-red-600">
          P5 — Error Boundary
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Something went wrong
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          An unexpected error occurred while loading the dashboard.
          The error was caught by the dashboard error boundary.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Try Again
        </button>

        <p className="mt-4 text-xs text-slate-400">
          Error boundaries allow a route segment to recover without
          crashing the entire application.
        </p>
      </div>
    </div>
  );
}
