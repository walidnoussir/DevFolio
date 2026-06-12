const stats = [
  {
    value: "4+",
    label: "Years Experience",
  },
  {
    value: "50+",
    label: "Shipped Apps",
  },
  {
    value: "AWS",
    label: "Cloud & DB",
  },
  {
    value: "95",
    label: "Lighthouse Score",
  },
];

export default function ArchitectureSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-label-md text-[var(--color-primary)]">
            Architecture First
          </span>

          <h2 className="text-headline-lg mt-4">
            Building systems that scale.
          </h2>

          <p className="mt-6 text-body-lg text-[var(--color-on-surface-variant)]">
            Deep expertise in designing scalable systems using micro-frontends,
            serverless functions, and event-driven architectures.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl p-6 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)]"
            >
              <h3 className="text-4xl font-bold text-[var(--color-primary)]">
                {stat.value}
              </h3>

              <p className="mt-2 text-sm text-[var(--color-on-surface-variant)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
