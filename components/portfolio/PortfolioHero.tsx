import Image from "next/image";

export default function PortfolioHero() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <span className="text-label-md text-[var(--color-primary)] uppercase tracking-[0.2em]">
            Full-Stack Architect
          </span>

          <h1 className="mt-4 text-display-mobile md:text-display">
            Engineering Digital Precision.
          </h1>

          <p className="mt-8 max-w-2xl text-body-lg text-[var(--color-on-surface-variant)]">
            Senior JavaScript Developer specializing in building scalable
            distributed systems and high-performance interfaces with Next.js,
            Node.js, and TypeScript.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="px-6 py-3 rounded-full bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] font-semibold">
              View Projects
            </button>

            <button className="px-6 py-3 rounded-full border border-[var(--color-outline)] hover:bg-[var(--color-surface-container)] transition">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative h-[500px] rounded-3xl overflow-hidden border border-[var(--color-outline-variant)] bg-[var(--color-surface-container)]">
            <Image
              src="/images/portfolio-hero.jpg"
              alt="Developer workspace"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Decorative Glow */}
          <div
            className="absolute -z-10 top-10 right-10 w-72 h-72 rounded-full blur-3xl opacity-30"
            style={{
              backgroundColor: "var(--color-primary)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
