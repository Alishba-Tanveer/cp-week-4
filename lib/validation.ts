import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  age: z.coerce
    .number()
    .int("Age must be a whole number")
    .min(18, "You must be at least 18 years old"),
});

export type FormValues = z.infer<typeof formSchema>;