"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Country } from "../types/country";

interface CountryFiltersProps {
  countries: Country[];
}

export default function CountryFilters({
  countries,
}: CountryFiltersProps) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  const regions = useMemo(() => {
    return [
      "All",
      ...Array.from(
        new Set(
          countries
            .map((country) => country.region)
            .filter(Boolean)
        )
      ).sort(),
    ];
  }, [countries]);

  const filteredCountries = useMemo(() => {
    const query = search.toLowerCase().trim();

    return countries.filter((country) => {
      const countryName =
        typeof country.name === "string"
          ? country.name
          : country.name?.common ?? "";

      const matchesSearch =
        !query ||
        countryName.toLowerCase().includes(query);

      const matchesRegion =
        region === "All" ||
        country.region === region;

      return matchesSearch && matchesRegion;
    });
  }, [countries, search, region]);

  return (
    <div className="space-y-7">
      {/* Search & Region Filter */}
      <div className="grid gap-4 rounded-2xl border border-[#27313d] bg-[#151b23] p-3.5 shadow-xl sm:grid-cols-[minmax(0,1fr)_220px]">
        {/* Search */}
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl text-[#718096]">
            🔎
          </span>

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search countries..."
            className="w-full rounded-xl border border-[#27313d] bg-[#0f141b] px-12 py-3.5 text-sm text-white outline-none transition placeholder:text-[#687585] focus:border-[#5eead4] focus:ring-2 focus:ring-[#5eead4]/10"
          />
        </div>

        {/* Region */}
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-lg text-[#718096]">
            🌍
          </span>

          <select
            value={region}
            onChange={(event) => setRegion(event.target.value)}
            className="w-full appearance-none rounded-xl border border-[#27313d] bg-[#0f141b] px-11 py-3.5 pr-12 text-sm font-medium text-white outline-none transition focus:border-[#5eead4] focus:ring-2 focus:ring-[#5eead4]/10"
          >
            {regions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          {/* Dropdown Arrow */}
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-lg text-[#a7b2bf]">
            ▾
          </span>
        </div>
      </div>

      {/* Country Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCountries.map((country) => {
          const countryName =
            typeof country.name === "string"
              ? country.name
              : country.name?.common ?? "Unknown";

          const capital =
            Array.isArray(country.capital)
              ? country.capital[0] ?? "No capital"
              : country.capital || "No capital";

          return (
            <Link
              key={country.alpha3Code}
              href={`/country/${country.alpha3Code}`}
              className="group overflow-hidden rounded-2xl border border-[#303a46] bg-[#1a222c] transition duration-300 hover:-translate-y-1 hover:border-[#3d5560] hover:bg-[#202a35] hover:shadow-2xl"
            >
              {/* Flag */}
              <div className="relative h-48 overflow-hidden bg-[#0f141b]">
                <img
                  src={
                    country.flags?.svg ||
                    country.flags?.png
                  }
                  alt={
                    country.flags?.alt ||
                    `${countryName} flag`
                  }
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />

                {/* Country Code */}
                <span className="absolute right-3 top-3 rounded-lg border border-white/10 bg-[#0d1117]/85 px-3 py-1.5 text-xs font-semibold text-[#cbd5df] backdrop-blur">
                  🏳️ {country.alpha3Code}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Country Name */}
                <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white">
                  <span className="text-lg">🌐</span>
                  {countryName}
                </h3>

                <div className="mt-4 space-y-3 text-sm">
                  {/* Capital */}
                  <p className="flex items-center gap-2 text-[#8b98a7]">
                    <span className="text-base">📍</span>

                    <span>
                      <span className="font-medium text-[#b8c2cd]">
                        Capital:
                      </span>{" "}
                      {capital}
                    </span>
                  </p>

                  {/* Population */}
                  <p className="flex items-center gap-2 text-[#8b98a7]">
                    <span className="text-base">👥</span>

                    <span>
                      <span className="font-medium text-[#b8c2cd]">
                        Population:
                      </span>{" "}
                      {country.population?.toLocaleString() ?? "N/A"}
                    </span>
                  </p>

                  {/* Region */}
                  <p className="flex items-center gap-2 text-[#8b98a7]">
                    <span className="text-base">🌍</span>

                    <span>
                      <span className="font-medium text-[#b8c2cd]">
                        Region:
                      </span>{" "}
                      {country.region || "N/A"}
                    </span>
                  </p>
                </div>

                {/* View Country */}
                <div className="mt-5 flex items-center justify-between border-t border-[#303a46] pt-4">
                  <span className="flex items-center gap-2 text-sm font-semibold text-[#5eead4] transition group-hover:text-[#99f6e4]">
                    <span className="text-base">🗺️</span>
                    View country →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* No Results */}
      {filteredCountries.length === 0 && (
        <div className="rounded-2xl border border-dashed border-[#34404d] bg-[#1a222c] px-6 py-14 text-center">
          <div className="text-4xl">
            🌎
          </div>

          <p className="mt-3 text-lg font-semibold text-white">
            No countries found.
          </p>

          <p className="mt-2 text-sm text-[#8b98a7]">
            Try a different search or region.
          </p>
        </div>
      )}
    </div>
  );
}