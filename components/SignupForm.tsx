"use client";

import { useActionState } from "react";
import { submitForm, type FormState } from "@/app/actions";

const initialState: FormState = {
  status: "idle",
};

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(
    submitForm,
    initialState
  );

  const errors =
    state.status === "error"
      ? state.fieldErrors
      : undefined;

  return (
    <form action={formAction} className="form">
      <div className="field">
        <label htmlFor="name">Name</label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          aria-invalid={Boolean(errors?.name)}
        />

        {errors?.name && (
          <p className="error">
            {errors.name[0]}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          aria-invalid={Boolean(errors?.email)}
        />

        {errors?.email && (
          <p className="error">
            {errors.email[0]}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="age">Age</label>

        <input
          id="age"
          name="age"
          type="number"
          min="18"
          placeholder="18"
          aria-invalid={Boolean(errors?.age)}
        />

        {errors?.age && (
          <p className="error">
            {errors.age[0]}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit"}
      </button>

      <div
        className="result"
        aria-live="polite"
      >
        {state.status === "success" && (
          <p className="success">
            Form submitted successfully!
          </p>
        )}

        {state.status === "error" && (
          <p className="error">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}