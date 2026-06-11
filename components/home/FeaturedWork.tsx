import Image from "next/image";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nexus Analytics",
    description:
      "Real-time analytics platform for monitoring cloud infrastructure.",
    image: "/images/project1.jpg",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
    github: "https://github.com/username/nexus-analytics",
    demo: "https://nexus-analytics.vercel.app",
  },
  {
    id: 2,
    title: "SwiftCommerce",
    description: "Modern e-commerce platform with secure Stripe payments.",
    image: "/images/project2.jpg",
    technologies: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/username/swift-commerce",
    demo: "https://swift-commerce.vercel.app",
  },
  {
    id: 3,
    title: "CoreAPI Engine",
    description:
      "Scalable GraphQL API architecture designed for high-performance applications.",
    image: "/images/project3.jpg",
    technologies: ["GraphQL", "Docker", "Node.js", "Redis"],
    github: "https://github.com/username/core-api-engine",
    demo: "https://core-api.example.com",
  },
];

function FeaturedWork() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-headline-md">Featured Work</h2>

        <button className="text-sm text-[var(--color-primary)] hover:opacity-80 transition">
          See All Projects →
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-xl bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative h-52">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-[var(--color-outline)] text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default FeaturedWork;
