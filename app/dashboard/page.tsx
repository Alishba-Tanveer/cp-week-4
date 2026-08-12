function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const stats = [
  {
    label: "Routes",
    value: "03",
    detail: "Home · About · Dashboard",
  },
  {
    label: "Layouts",
    value: "02",
    detail: "Root · Dashboard",
  },
  {
    label: "Architecture",
    value: "App",
    detail: "Next.js App Router",
  },
];

export default async function DashboardPage() {
  await sleep(2000);

  return (
    <div className="space-y-10 py-4">
      <section className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Dashboard Online
          </div>

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Workspace
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Dashboard
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Monitor the architecture and interactive features implemented
            throughout this Next.js assignment.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Environment
          </p>

          <p className="mt-1 font-semibold text-slate-900">
            Development
          </p>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm font-semibold text-slate-500">
              {stat.label}
            </p>

            <p className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
              {stat.value}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              {stat.detail}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                P4
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Loading State
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              ⟳
            </div>
          </div>

          <p className="mt-5 leading-7 text-slate-600">
            This route intentionally waits before rendering so the dedicated
            dashboard loading UI can be observed during navigation.
          </p>

          <div className="mt-6 rounded-xl bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-blue-500" />
              <span className="text-sm font-semibold text-slate-700">
                Route loading handled by loading.tsx
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-900 p-7 text-white shadow-xl sm:p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
            P5
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Error Boundary
          </h2>

          <p className="mt-5 leading-7 text-slate-300">
            The dashboard includes a route-level error boundary designed to
            isolate rendering failures.
          </p>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-medium text-slate-300">
              Test route
            </p>

            <code className="mt-2 block text-sm text-blue-300">
              /dashboard?error=true
            </code>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-blue-100 bg-blue-50 p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Architecture
        </p>

        <h2 className="mt-2 text-2xl font-bold text-slate-900">
          Nested dashboard layout
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          This page is rendered inside the dashboard layout, demonstrating
          how Next.js App Router layouts can provide shared UI for a specific
          route segment.
        </p>
      </section>
    </div>
  );
}
