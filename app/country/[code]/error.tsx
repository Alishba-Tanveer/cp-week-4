"use client";

export default function CountryError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg rounded-3xl border border-[#27313d] bg-gradient-to-br from-[#151b23] via-[#172b2c] to-[#123c3b] p-8 text-center shadow-2xl sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#3d5560] bg-[#0f141b] text-2xl font-bold text-[#5eead4] shadow-lg">
          !
        </div>

        <h1 className="mt-6 text-2xl font-black tracking-tight text-white">
          Something went wrong
        </h1>

        <p className="mt-3 text-sm leading-6 text-[#9aa8b8]">
          We could not load this country right now.
          <br />
          Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-7 rounded-xl border border-[#3d5560] bg-[#1a222c] px-6 py-3 text-sm font-bold text-[#5eead4] shadow-lg transition duration-300 hover:border-[#5eead4] hover:bg-[#202a35] hover:text-[#99f6e4]"
        >
          Try again
        </button>
      </div>
    </div>
  );
}