export interface CountryName {
  common: string;
  official: string;
}

export interface CountryFlags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Country {
  alpha3Code: string;
  name: CountryName;
  capital?: string | string[];
  population: number;
  region: string;
  subregion?: string;
  languages?: Record<
    string,
    string | { name: string }
  >;
  borders?: string[];
  flags: CountryFlags;
}