const categories = [
  {
    title: "Frontend Engineering",
    description:
      "Creating responsive, accessible, and high-performance user interfaces.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Designing secure APIs and scalable server-side architectures.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST API",
      "GraphQL",
    ],
  },
  {
    title: "DevOps & Cloud",
    description: "Deploying and maintaining production-ready applications.",
    skills: ["Docker", "GitHub Actions", "Vercel", "Linux", "CI/CD", "AWS"],
  },
];

export default function SkillsCategories() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <article
            key={category.title}
            className="p-8 rounded-xl bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)]"
          >
            <h3 className="text-xl font-semibold mb-3">{category.title}</h3>

            <p className="text-[var(--color-on-surface-variant)] mb-6">
              {category.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
