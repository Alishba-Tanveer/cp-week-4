import Link from "next/link";
import TaskManager from "../components/TaskManager";

export default function Home() {
  return (
    <main>
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-12 text-white sm:px-10 sm:py-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
              Week 4 • Assignment 1
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Next.js Task Workspace
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              A professional task management interface demonstrating
              Next.js App Router, controlled components, local storage,
              and reducer-based state management.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                View Dashboard
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                About Assignment
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-blue-600">
              P6
            </p>
            <h2 className="mt-2 font-bold text-slate-900">
              Controlled Input
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              React state controls every task input.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-blue-600">
              P7
            </p>
            <h2 className="mt-2 font-bold text-slate-900">
              Local Storage
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Tasks remain available after refreshing the browser.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-blue-600">
              P8
            </p>
            <h2 className="mt-2 font-bold text-slate-900">
              useReducer
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Task actions use a centralized reducer.
            </p>
          </div>
        </div>
      </section>

      <TaskManager />
    </main>
  );
}
