"use client";

import { portfolioProjects } from "@/app/data/projects";
import Image from "next/image";
import { useState } from "react";

const filters = ["All", "Frontend", "Backend", "Full Stack"];

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <div className="flex flex-wrap gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full transition ${
              activeFilter === filter
                ? "bg-[var(--color-primary-container)]"
                : "bg-[var(--color-surface-container)]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-xl border border-[var(--color-outline-variant)] bg-[var(--color-surface-container)]"
          >
            <div className="relative h-64">
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
                    className="text-xs px-3 py-1 rounded-full bg-[var(--color-primary-container)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p className="text-[var(--color-on-surface-variant)]">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
