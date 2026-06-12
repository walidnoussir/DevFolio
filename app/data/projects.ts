export interface PortfolioProject {
  id: number;
  title: string;
  category: "Frontend" | "Backend" | "Full Stack";
  image: string;
  description: string;
  technologies: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Nebula Analytics",
    category: "Full Stack",
    image: "/images/project1.jpg",
    description: "Real-time monitoring platform for distributed microservices.",
    technologies: ["Next.js", "TypeScript", "Redis"],
  },
  {
    id: 2,
    title: "Velvet Commerce",
    category: "Frontend",
    image: "/images/project2.jpg",
    description: "Headless commerce storefront optimized for performance.",
    technologies: ["React", "Tailwind", "Framer Motion"],
  },
  {
    id: 3,
    title: "Forge API",
    category: "Backend",
    image: "/images/project3.jpg",
    description: "High-throughput GraphQL gateway with advanced security.",
    technologies: ["Node.js", "GraphQL", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Zen Stack",
    category: "Full Stack",
    image: "/images/project1.jpg",
    description: "Offline-first productivity suite with realtime sync.",
    technologies: ["Remix", "PouchDB", "Socket.IO"],
  },
];
