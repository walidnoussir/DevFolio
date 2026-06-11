interface Interest {
  title: string;
  description: string;
}

const interests: Interest[] = [
  {
    title: "System Design",
    description:
      "I enjoy architecting scalable systems and exploring distributed software patterns.",
  },
  {
    title: "Photography",
    description:
      "Capturing urban geometry and everyday moments through a creative lens.",
  },
  {
    title: "Technology Exploration",
    description:
      "Researching emerging technologies, AI tools, and modern development workflows.",
  },
];

export default function BeyondCode() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-headline-lg-mobile md:text-headline-lg">
          Beyond the Code
        </h2>

        <p className="mt-4 text-body-lg text-[var(--color-on-surface-variant)]">
          Exploring the intersections of technology, creativity, and the
          physical world.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {interests.map((item) => (
          <article
            key={item.title}
            className="p-8 rounded-xl bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] hover:bg-[var(--color-surface-container-high)] transition"
          >
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
