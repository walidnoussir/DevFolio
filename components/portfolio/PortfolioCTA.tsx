export default function PortfolioCTA() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24">
      <div className="rounded-2xl bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] p-12 text-center">
        <h2 className="text-headline-lg">Ready to build the future?</h2>

        <p className="mt-6 text-body-lg text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">
          I am currently available for high-impact roles and consulting
          projects. Let's discuss your architectural vision.
        </p>

        <button className="mt-10 px-8 py-4 rounded-full bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] font-semibold">
          Schedule a Consultation
        </button>
      </div>
    </section>
  );
}
