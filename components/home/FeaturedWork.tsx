const projects = [
  { title: "Nexus Analytics", tech: "React • Node.js" },
  { title: "SwiftCommerce", tech: "Next.js • Stripe" },
  { title: "CoreAPI Engine", tech: "GraphQL • Docker" },
];

export default function FeaturedWork() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold mb-10">Featured Work</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="p-6 rounded-xl bg-[var(--color-surface-container)]"
          >
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-[var(--color-on-surface-variant)] mt-2">
              {p.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
