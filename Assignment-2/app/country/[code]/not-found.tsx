import Link from "next/link";

export default function CountryNotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg rounded-3xl border border-[#27313d] bg-gradient-to-br from-[#151b23] via-[#172b2c] to-[#123c3b] p-8 text-center shadow-2xl sm:p-10">
        <p className="text-7xl font-black tracking-tight text-[#5eead4]">
          404
        </p>

        <h1 className="mt-5 text-3xl font-black tracking-tight text-white">
          Country not found
        </h1>

        <p className="mt-3 leading-6 text-[#9aa8b8]">
          The country code you entered does not match a
          <br />
          country in our explorer.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex rounded-xl border border-[#3d5560] bg-[#1a222c] px-6 py-3 text-sm font-bold text-[#5eead4] shadow-lg transition duration-300 hover:border-[#5eead4] hover:bg-[#202a35] hover:text-[#99f6e4]"
        >
          Explore countries
        </Link>
      </div>
    </div>
  );
}