import { readConfig } from "@/lib/config";

export async function GET() {
  try {
    const apiBaseUrl = readConfig(process.env);

    return Response.json({
      success: true,
      apiBaseUrl,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Configuration error";

    return Response.json(
      {
        success: false,
        error: message,
      },
      {
        status: 500,
      }
    );
  }
}