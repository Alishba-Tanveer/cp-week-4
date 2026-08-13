export function readConfig(
  env: NodeJS.ProcessEnv
): string {
  const value = env.API_BASE_URL;

  if (!value) {
    throw new Error("API_BASE_URL missing");
  }

  return value;
}