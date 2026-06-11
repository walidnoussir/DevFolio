interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}

const experiences: Experience[] = [
  {
    period: "2024 — Present",
    role: "Full-Stack Developer",
    company: "Freelance",
    description:
      "Building scalable applications using Next.js, TypeScript, Express, and MongoDB.",
  },
  {
    period: "2023 — 2024",
    role: "MERN Developer",
    company: "Personal Projects",
    description:
      "Developed streaming platforms, quiz applications, and reservation systems.",
  },
  {
    period: "2022 — 2023",
    role: "Frontend Developer",
    company: "Learning Journey",
    description:
      "Focused on React, JavaScript, responsive design, and modern web architecture.",
  },
  {
    period: "2020 — 2022",
    role: "Computer Science Student",
    company: "Academic Foundation",
    description:
      "Built strong foundations in algorithms, databases, and software engineering.",
  },
];

export default function Journey() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <div className="mb-16">
        <h2 className="text-headline-lg-mobile md:text-headline-lg">
          The Journey
        </h2>

        <p className="mt-4 text-body-lg text-[var(--color-on-surface-variant)]">
          A chronological log of professional growth, academic foundations, and
          the evolution of my technical craft.
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((item) => (
          <article
            key={item.period}
            className="p-8 rounded-xl border border-[var(--color-outline-variant)] bg-[var(--color-surface-container)]"
          >
            <div className="grid md:grid-cols-[220px_1fr] gap-8">
              <div>
                <span className="text-sm text-[var(--color-primary)]">
                  {item.period}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-semibold">{item.role}</h3>

                <p className="mt-1 text-[var(--color-primary)]">
                  {item.company}
                </p>

                <p className="mt-4 text-[var(--color-on-surface-variant)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
