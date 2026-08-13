export interface BorderLink {
  code: string;
  href: string;
}

export function borderLinks(codes: string[] = []): BorderLink[] {
  return codes.map((code) => ({
    code,
    href: `/country/${code}`,
  }));
}

export function getByCode<T extends { cca3: string }>(
  countries: T[],
  code: string
): T | null {
  return (
    countries.find(
      (country) =>
        country.cca3.toUpperCase() === code.toUpperCase()
    ) ?? null
  );
}
