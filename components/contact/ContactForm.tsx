"use client";

export default function ContactForm() {
  return (
    <form className="space-y-4 bg-surface-container p-6 rounded-xl shadow-lg border border-outline-variant">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-on-surface mb-1"
        >
          Nom
        </label>
        <input
          type="text"
          id="name"
          required
          placeholder="Votre nom"
          className="
            w-full px-4 py-3
            bg-surface-container-high
            text-on-surface
            placeholder:text-on-surface-variant
            border border-outline
            rounded-lg
            outline-none
            transition-all
            focus:border-primary
            focus:ring-2
            focus:ring-primary/30
          "
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-on-surface mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          placeholder="exemple@mail.com"
          className="
            w-full px-4 py-3
            bg-surface-container-high
            text-on-surface
            placeholder:text-on-surface-variant
            border border-outline
            rounded-lg
            outline-none
            transition-all
            focus:border-primary
            focus:ring-2
            focus:ring-primary/30
          "
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-on-surface mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          required
          placeholder="Votre message ici..."
          className="
            w-full px-4 py-3
            bg-surface-container-high
            text-on-surface
            placeholder:text-on-surface-variant
            border border-outline
            rounded-lg
            outline-none
            resize-none
            transition-all
            focus:border-primary
            focus:ring-2
            focus:ring-primary/30
          "
        />
      </div>

      <button
        type="submit"
        className="
          w-full
          bg-primary-container
          text-on-primary-container
          font-bold
          py-3 px-6
          rounded-lg
          transition-all
          hover:brightness-110
          shadow-lg
        "
      >
        Envoyer le message
      </button>
    </form>
  );
}
