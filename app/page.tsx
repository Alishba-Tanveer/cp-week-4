import SignupForm from "@/components/SignupForm";

export default function Home() {
  return (
    <main className="container">
      <section className="card">
        <p className="eyebrow">
          Week 4 — Assignment 3
        </p>

        <h1>Route Handlers + Forms</h1>

        <p className="intro">
          A Next.js form using Server Actions,
          Zod validation, and environment-based
          configuration.
        </p>

        <SignupForm />
      </section>
    </main>
  );
}