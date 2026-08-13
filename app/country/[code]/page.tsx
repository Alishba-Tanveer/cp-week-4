import Link from "next/link";
import { notFound } from "next/navigation";
import { getCountryByCode } from "../../../lib/api";
import { borderLinks } from "../../../lib/helpers";

interface CountryPageProps {
  params: Promise<{
    code: string;
  }>;
}

export default async function CountryPage({
  params,
}: CountryPageProps) {
  const { code } = await params;

  const normalizedCode = code.trim().toUpperCase();

  if (!/^[A-Z]{3}$/.test(normalizedCode)) {
    notFound();
  }

  const country = await getCountryByCode(normalizedCode);

  if (!country) {
    notFound();
  }

  const borders = borderLinks(country.borders ?? []);

  const languages = country.languages
  ? Object.values(country.languages).map((language) =>
      typeof language === "string"
        ? language
        : language.name
    )
  : [];

  const capital = Array.isArray(country.capital)
    ? country.capital.join(", ")
    : country.capital ?? "N/A";

  return (
    <div className="px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-[#303a46] bg-[#1a222c] px-5 py-3 text-sm font-bold text-[#cbd5df] shadow-lg transition duration-300 hover:border-[#5eead4] hover:bg-[#202a35] hover:text-[#5eead4]"
        >
          <span className="text-lg">←</span>
          Back to countries
        </Link>
      </div>

      {/* Country Detail */}
      <section className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#27313d] bg-[#151b23] shadow-2xl">
        <div className="grid lg:grid-cols-2">
          {/* Flag */}
          <div className="flex min-h-[270px] items-center justify-center bg-gradient-to-br from-[#172b2c] via-[#151b23] to-[#0f141b] p-6 sm:min-h-[300px] sm:p-8 lg:min-h-[360px]">
            <img
              src={country.flags.svg}
              alt={
                country.flags.alt ??
                `Flag of ${country.name.common}`
              }
              className="max-h-64 w-full object-contain drop-shadow-2xl sm:max-h-72 lg:max-h-80"
            />
          </div>

          {/* Main Information */}
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Country Tags */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#3d5560] bg-[#1a222c] px-3 py-1 text-xs font-bold text-[#5eead4]">
                {country.alpha3Code}
              </span>

              <span className="rounded-full border border-[#303a46] bg-[#202a35] px-3 py-1 text-xs font-bold text-[#aeb9c5]">
                {country.region}
              </span>
            </div>

            {/* Country Name */}
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              {country.name.common}
            </h1>

            {/* Official Name */}
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#8b98a7]">
              Official name:{" "}
              <span className="font-semibold text-[#cbd5df]">
                {country.name.official}
              </span>
            </p>

            {/* Info Grid */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <InfoItem
                label="Capital"
                value={capital}
              />

              <InfoItem
                label="Population"
                value={country.population.toLocaleString()}
              />

              <InfoItem
                label="Region"
                value={country.region}
              />

              <InfoItem
                label="Languages"
                value={
                  languages.length > 0
                    ? languages.join(", ")
                    : "N/A"
                }
              />
            </div>
          </div>
        </div>

        {/* Border Countries */}
        <div className="border-t border-[#303a46] px-6 py-6 sm:px-8 lg:px-10">
          <h2 className="text-2xl font-black text-white">
            Border Countries
          </h2>

          {borders.length === 0 ? (
            <p className="mt-3 text-sm text-[#8b98a7]">
              This country has no land borders.
            </p>
          ) : (
            <div className="mt-4 flex flex-wrap gap-3">
              {borders.map((border) => (
                <Link
                  key={border.code}
                  href={border.href}
                  className="inline-flex items-center rounded-xl border border-[#303a46] bg-[#1a222c] px-4 py-2.5 text-sm font-bold text-[#cbd5df] shadow-sm transition duration-300 hover:border-[#5eead4] hover:bg-[#202a35] hover:text-[#5eead4] hover:shadow-lg"
                >
                  {border.code}
                  <span className="ml-2 text-[#5eead4]">
                    →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[#303a46] bg-[#1a222c] p-4 transition duration-300 hover:border-[#3d5560] hover:bg-[#202a35] sm:p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-[#718096]">
        {label}
      </p>

      <p className="mt-1.5 text-sm font-bold leading-6 text-[#d6dee7]">
        {value}
      </p>
    </div>
  );
}