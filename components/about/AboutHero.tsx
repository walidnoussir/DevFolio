function AboutHero() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <div className="max-w-4xl">
        <span className="text-label-md text-[var(--color-primary)] uppercase tracking-[0.25em]">
          The Architect
        </span>

        <h1 className="mt-4 text-display-mobile md:text-display">
          Engineering
          <br />
          Intuitive Systems.
        </h1>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <p className="text-body-lg text-[var(--color-on-surface-variant)]">
            I am a Senior Full-Stack Developer with a decade of experience
            orchestrating complex JavaScript ecosystems. My philosophy centers
            on technical elegance—the belief that code should be as readable as
            prose and as performant as a high-precision machine.
          </p>

          <p className="text-body-lg text-[var(--color-on-surface-variant)]">
            Beyond the terminal, I bridge the gap between architecture and
            human-centered design, ensuring every interface and API endpoint
            serves a meaningful purpose.
          </p>
        </div>
      </div>
    </section>
  );
}
export default AboutHero;
