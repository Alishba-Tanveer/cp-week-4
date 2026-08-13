export default function CountryLoading() {
  return (
    <div className="py-8">
      <div className="animate-pulse overflow-hidden rounded-[2rem] border border-[#27313d] bg-[#151b23] shadow-2xl">
        <div className="grid lg:grid-cols-2">
          <div className="min-h-[320px] bg-gradient-to-br from-[#172b2c] to-[#123c3b]" />

          <div className="space-y-6 p-8 sm:p-12">
            <div className="h-6 w-24 rounded-full bg-[#27313d]" />

            <div className="h-12 w-3/4 rounded-xl bg-[#27313d]" />

            <div className="h-5 w-1/2 rounded bg-[#27313d]" />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="h-24 rounded-2xl bg-[#1a222c]" />
              <div className="h-24 rounded-2xl bg-[#1a222c]" />
              <div className="h-24 rounded-2xl bg-[#1a222c]" />
              <div className="h-24 rounded-2xl bg-[#1a222c]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}