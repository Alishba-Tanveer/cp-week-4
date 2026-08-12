import Link from "next/link";

const concepts = [
  "Next.js App Router",
  "Nested layouts",
  "Loading UI",
  "Error boundaries",
  "React hooks",
  "Local storage",
  "useReducer",
  "Controlled components",
];

export default function AboutPage() {
  return (
    <div className="space-y-10 py-8">

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:p-12">

        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" />

        <div className="relative max-w-3xl">

          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-sm font-bold text-blue-600 shadow-sm">
            Week 4 • Assignment 1
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            A practical Next.js application
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            This project brings together the core concepts covered during
            Week 4 into one structured application. The goal is to demonstrate
            how modern Next.js applications are organized, routed, and built
            using reusable React patterns.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition duration-200 hover:-translate-y-0.5 hover:from-blue-700 hover:to-violet-700"
            >
              Explore Dashboard →
            </Link>

            <Link
              href="/"
              className="inline-flex items-center rounded-xl border border-slate-200 bg-white/80 px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white"
            >
              Back to Home
            </Link>
          </div>

        </div>
      </section>


      {/* Project Focus + Concepts */}
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

        {/* Project Focus */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-xl shadow-slate-900/10 sm:p-10">

          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
              Project Focus
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              From routing to reusable state logic
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              The application demonstrates both Next.js-specific architecture
              and reusable React patterns. The result is a clean foundation
              that can be extended into a larger application.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-2xl font-bold text-white">8</p>
                <p className="mt-1 text-sm text-slate-400">
                  Core Concepts
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-2xl font-bold text-white">3</p>
                <p className="mt-1 text-sm text-slate-400">
                  Main Routes
                </p>
              </div>

            </div>

            <Link
              href="/dashboard"
              className="mt-8 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Open Task Dashboard →
            </Link>

          </div>
        </div>


        {/* Covered Concepts */}
        <div className="rounded-3xl border border-white/60 bg-white/70 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:p-10">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Covered Concepts
          </p>

          <h2 className="mt-3 text-2xl font-bold text-slate-900">
            What this assignment demonstrates
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">

            {concepts.map((concept, index) => (
              <div
                key={concept}
                className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-white/70 px-4 py-3 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/60 hover:shadow-md"
              >

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-500 text-xs font-bold text-white shadow-sm">
                  {index + 1}
                </span>

                <span className="text-sm font-semibold text-slate-700 transition group-hover:text-blue-700">
                  {concept}
                </span>

              </div>
            ))}

          </div>
        </div>

      </section>


      {/* Bottom Information */}
      <section className="rounded-3xl border border-white/60 bg-white/60 p-8 text-center shadow-lg shadow-slate-900/5 backdrop-blur-xl">

        <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
          Next.js + React + TypeScript
        </p>

        <h2 className="mt-3 text-2xl font-bold text-slate-900">
          Built with modern web development practices
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
          The project combines file-based routing, layouts, loading states,
          error handling, React hooks, persistent browser storage, reducers,
          and controlled form components into one application.
        </p>

      </section>

    </div>
  );
}
