import type { Country } from "../types/country";

const API_BASE = "https://countries.dev";

const FIELDS =
  "name,capital,population,region,languages,borders,flags,alpha3Code";

export async function getCountries(): Promise<Country[]> {
  const response = await fetch(
    `${API_BASE}/countries?fields=${FIELDS}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch countries.");
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Countries API did not return a country list.");
  }

  return data as Country[];
}

export async function getCountryByCode(
  code: string
): Promise<Country | null> {
  const response = await fetch(
    `${API_BASE}/alpha/${encodeURIComponent(code)}?fields=${FIELDS}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch country.");
  }

  const data = await response.json();

  if (!data || typeof data !== "object") {
    return null;
  }

  return data as Country;
}
