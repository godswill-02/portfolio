import ScrollReveal from "@/components/shared/ScrollReveal";

export default function Experience() {
  const experiences = [
    {
      title: "Développeur Java / Backend",
      period: "Juillet 2026 - Présent",
      details: [
        "Contribution à l'évolution et à la maintenance de Perfect Vision, solution métier principale de l'entreprise.",
        "Développement et intégration de nouvelles fonctionnalités, correction d'anomalies et réalisation de tests en Java, Spring Boot et Apache Wicket.",
        "Participation au déploiement et à la mise en service de la solution dans des environnements Windows et Linux.",
      ],
    },
    {
      title: "Stage en développement mobile – Klumer, Lomé",
      period: "Juin 2025 - Août 2025",
      details: [
        "Analyse, conception et implémentation d'une application mobile dédiée à la location et à la vente de biens immobiliers.",
        "Participation à la conception des interfaces utilisateur (UI/UX) afin d'améliorer l'expérience et la navigation dans l'application.",
        "Contribution à la réflexion sur les fonctionnalités et les besoins utilisateurs liés à la gestion et à la recherche de biens immobiliers.",
      ],
    },
    {
      title: "Stage en développement web – Sunu Santé, Lomé",
      period: "Juil. 2024 - Oct. 2024",
      details: [
        "Conception et développement d'une solution multiplateforme d'assistance médicale personnalisée.",
        "Contribution à l'analyse des besoins des utilisateurs et à la compréhension des processus métiers liés à l'assurance santé.",
        "Participation à la conception d'une solution adaptée aux besoins opérationnels et aux attentes des utilisateurs.",
      ],
    },
    {
      title: "Projet académique – Application de gestion de salle de gym, IAI TOGO",
      period: "Déc. 2024 - Fév. 2025",
      details: [
        "Conception et développement d'une application web de gestion de salle de gym permettant la gestion des clients, des abonnements et paiement.",
        "Mise en place d'une architecture full-stack (Angular / Spring Boot), avec sécurisation JWT.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Expériences
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl">
            Projets & stages
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {experiences.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 90}>
                <article
                className="group relative rounded-[1.5rem] border border-border bg-card p-5 shadow-[0_16px_42px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_46px_rgba(15,23,42,0.06)]"
                >
                <div className="absolute -left-2 top-6 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px_rgba(255,255,255,0.9)]" />

                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                    {item.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
