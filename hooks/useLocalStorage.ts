"use client";

import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const storedValue = window.localStorage.getItem(key);

      if (storedValue !== null) {
        setValue(JSON.parse(storedValue) as T);
      }
    } catch {
      setValue(initialValue);
    }
  }, [key]);

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore localStorage write errors.
    }
  }, [key, value]);

  return [value, setValue] as const;
}
