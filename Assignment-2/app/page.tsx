import CountryFilters from "../components/CountryFilters";
import { getCountries } from "../lib/api";

export default async function HomePage() {
  const countries = await getCountries();

  return (
    <div className="space-y-8 py-6">

      <section className="relative overflow-hidden rounded-3xl border border-[#27313d] bg-gradient-to-br from-[#151b23] via-[#172b2c] to-[#123c3b] px-7 py-12 shadow-2xl sm:px-12 sm:py-16">

        <div className="absolute right-[-80px] top-[-100px] h-72 w-72 rounded-full bg-[#5eead4]/5 blur-3xl" />

        <div className="relative">
          <span className="inline-flex rounded-full border border-[#34404d] bg-[#1b232d] px-4 py-2 text-sm font-semibold text-[#b7c2ce]">
            Week 4 · Assignment 2
          </span>

          <h1 className="mt-7 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Explore the world, one country at a time.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#9aa6b2]">
            A Next.js App Router country explorer with server-side
            data fetching, dynamic routes, client-side filtering,
            and connected country details.
          </p>
        </div>
      </section>

      <section>
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5eead4]">
            Country Directory
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
            Discover countries
          </h2>

          <p className="mt-2 text-[#8b98a7]">
            Search by country or filter the results by region.
          </p>
        </div>

        <CountryFilters countries={countries} />
      </section>

    </div>
  );
}
