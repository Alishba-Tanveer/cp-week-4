export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600" />
        </div>

        <h2 className="mt-6 text-lg font-bold text-slate-900">
          Loading dashboard
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Preparing your workspace...
        </p>
      </div>
    </div>
  );
}
