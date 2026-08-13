"use server";

import { formSchema } from "@/lib/validation";

export type FormState =
  | {
      status: "idle" | "submitting" | "success";
    }
  | {
      status: "error";
      message: string;
      fieldErrors?: Record<string, string[] | undefined>;
    };

export async function parseForm(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());

  const result = formSchema.safeParse({
    name: rawData.name,
    email: rawData.email,
    age: rawData.age,
  });

  if (!result.success) {
    return {
      ok: false as const,
      errors: result.error.flatten().fieldErrors,
    };
  }

  return {
    ok: true as const,
    data: result.data,
  };
}

export async function submitForm(
  _previousState: FormState,
  formData: FormData
): Promise<FormState> {
  const result = await parseForm(formData);

  if (!result.ok) {
    return {
      status: "error",
      message: "Please correct the errors below.",
      fieldErrors: result.errors,
    };
  }

  return {
    status: "success",
  };
}