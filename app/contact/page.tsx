import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <div className="container mx-auto p-8 max-w-5xl">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900">Me contacter</h1>
        <p className="text-slate-500 mt-2">
          Une idée de projet ou une question ? N'hésitez pas à m'envoyer un
          message.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Colonne Gauche : Infos de contact */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              Coordonnées
            </h2>
            <p className="text-slate-600">
              Je suis actuellement disponible pour de nouvelles opportunités en
              tant que développeur.
            </p>

            {/* Email Cliquable */}
            <a
              href="mailto:mon-email@portfolio.com"
              className="inline-block mt-4 text-blue-600 font-medium hover:underline"
            >
              ayoubhanine@gmail.com
            </a>
          </div>

          {/* Liens Sociaux */}
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              Réseaux Sociaux
            </h2>
            <div className="flex gap-4">
              <a
                href="https://github.com/walidnoussir"
                target="_blank"
                className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Colonne Droite : Formulaire */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
