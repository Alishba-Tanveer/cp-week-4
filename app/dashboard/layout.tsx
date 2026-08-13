export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
            D
          </div>

          <div>
            <p className="text-sm font-bold text-blue-700">
              Dashboard Workspace
            </p>

            <p className="mt-0.5 text-xs text-blue-600">
              Shared dashboard layout
            </p>
          </div>
        </div>
      </div>

      {children}
    </section>
  );
}
