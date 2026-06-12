const strengths = [
  {
    title: "System Architecture",
    description: "Designing scalable and maintainable software architectures.",
  },
  {
    title: "Performance Optimization",
    description:
      "Improving load times, responsiveness, and overall user experience.",
  },
  {
    title: "Problem Solving",
    description: "Breaking down complex challenges into efficient solutions.",
  },
  {
    title: "Team Collaboration",
    description:
      "Working effectively with designers, developers, and stakeholders.",
  },
];

export default function ProfessionalStrengths() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-headline-lg-mobile md:text-headline-lg">
          Professional Strengths
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {strengths.map((strength) => (
          <article
            key={strength.title}
            className="p-8 rounded-xl bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)]"
          >
            <h3 className="text-xl font-semibold mb-4">{strength.title}</h3>

            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              {strength.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
