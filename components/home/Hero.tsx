import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 text-center">
      <p className="text-sm text-[var(--color-primary)]">AVAILABLE FOR HIRE</p>

      <h1 className="text-4xl md:text-6xl font-bold mt-4">
        Full-Stack JavaScript Developer
      </h1>

      <p className="mt-6 text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">
        Architecting scalable, high-performance web applications with React,
        Node.js and TypeScript.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/portfolio"
          className="px-6 py-3 rounded-full bg-[var(--color-primary-container)]"
        >
          View Portfolio
        </Link>
        <button className="px-6 py-3 rounded-full border border-[var(--color-outline)]">
          Download CV
        </button>
      </div>
    </section>
  );
}
