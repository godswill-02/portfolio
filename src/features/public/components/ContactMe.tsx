import ContactMeForm from "../forms/ContactMeForm";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ContactMe() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="grid gap-6 rounded-[1.75rem] border border-border bg-card px-6 py-8 shadow-[0_18px_40px_rgba(15,23,42,0.04)] sm:px-8 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Services
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl">
              Ce que je propose
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Applications fluides",
                  description:
                    "Interfaces intuitives, lisibles et pensées pour une expérience sans friction.",
                },
                {
                  title: "Backend robuste",
                  description:
                    "Architecture fiable, sécurisée et pensée pour évoluer avec le produit.",
                },
                {
                  title: "Intégration limpide",
                  description:
                    "Connexion claire entre services, outils et utilisateurs sans complexité inutile.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.25rem] border border-border bg-background px-4 py-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-[1.5rem] border border-border bg-background px-5 py-6 shadow-sm">
            <div className="space-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Contact
              </p>
              <h3 className="text-2xl font-bold text-foreground">Parlez-moi de votre projet</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                Laissez votre email et un résumé, je reviens vers vous sous 24h.
              </p>
            </div>

            <ContactMeForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
