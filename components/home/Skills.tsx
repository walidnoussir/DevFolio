export default function Skills() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold mb-8">Technical Arsenal</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-[var(--color-surface-container)]">
          <h3 className="font-semibold mb-4">Frontend</h3>
          <p>React, Next.js, Tailwind</p>
        </div>

        <div className="p-6 rounded-xl bg-[var(--color-surface-container)]">
          <h3 className="font-semibold mb-4">Backend</h3>
          <p>Node.js, Express, GraphQL</p>
        </div>
      </div>
    </section>
  );
}
