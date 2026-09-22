import ScrollReveal from "@/components/shared/ScrollReveal";

const education = [
  {
    title: "Licence en Génie Logiciel et Systèmes d'Information – IAI TOGO, Lomé",
    period: "2025",
    description:
      "Formation orientée solutions numériques, architecture logicielle et gestion de systèmes d'information, avec une forte appétence pour les projets concrets et évolutifs.",
  },
  {
    title: "Bac S – Collège Père Augustin Planque",
    period: "2020",
    description: "Option Sciences et Mathématiques, avec un intérêt marqué pour les systèmes, l'analyse et la logique.",
  },
];

export default function Education() {
  return (
    <section id="parcours" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="rounded-[1.75rem] border border-border bg-card px-6 py-8 shadow-[0_18px_40px_rgba(15,23,42,0.04)] sm:px-8">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Éducation
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl">
              Parcours académique
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {education.map((item) => (
                <article
                  key={item.title}
                  className="group relative rounded-[1.25rem] border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
                >
                  <div className="absolute -left-2 top-6 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px_rgba(255,255,255,0.9)]" />
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}