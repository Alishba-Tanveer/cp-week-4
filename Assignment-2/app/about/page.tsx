export default function AboutPage() {
  const concepts = [
    "Next.js App Router",
    "Server Components",
    "Client Components",
    "Dynamic Routes",
    "Server-side Data Fetching",
    "Loading UI",
    "Error Boundaries",
    "notFound()",
    "Next.js Link navigation",
    "TypeScript",
    "Tailwind CSS",
  ];

  return (
    <div className="space-y-8 py-8">
      {/* Hero */}
      <section className="rounded-[2rem] border border-[#303a46] bg-gradient-to-br from-[#10161d] via-[#17232a] to-[#1b3434] p-8 text-white shadow-2xl sm:p-12">
        <p className="text-sm font-bold uppercase tracking-widest text-[#5eead4]">
          About the Project
        </p>

        <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
          Country Explorer
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#aeb9c5]">
          This application demonstrates how a real-world
          country explorer can be structured using the Next.js
          App Router, Server Components, Client Components,
          dynamic routes, and server-side data fetching.
        </p>
      </section>

      {/* Assignment Coverage */}
      <section className="rounded-[2rem] border border-[#303a46] bg-[#151b23] p-8 shadow-xl sm:p-10">
        <p className="text-sm font-bold uppercase tracking-widest text-[#5eead4]">
          Assignment Coverage
        </p>

        <h2 className="mt-3 text-3xl font-black text-white">
          Concepts implemented
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <div
              key={concept}
              className="rounded-2xl border border-[#303a46] bg-[#1d2731] px-5 py-4 text-sm font-bold text-[#d4dce3] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#42605f] hover:bg-[#222f38]"
            >
              <span className="mr-2 text-[#5eead4]">
                ✓
              </span>

              {concept}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}