const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Docker",
  "Vercel",
];

export default function TechStack() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-headline-lg-mobile md:text-headline-lg">
          Technology Stack
        </h2>

        <p className="mt-4 text-body-lg text-[var(--color-on-surface-variant)]">
          The tools and technologies I use to transform ideas into
          production-ready software.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="h-24 flex items-center justify-center rounded-xl bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)]"
          >
            <span className="font-medium">{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
