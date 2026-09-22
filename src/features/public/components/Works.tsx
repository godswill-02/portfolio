import Image from "next/image";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function Works() {
  const professionalProjects = [
    {
      title: "Assistant Médical Personnalisé",
      client: "Sunu Santé",
      category: "Produit SaaS • Assurance santé",
      image: "/amp-images/medecin-controlleur-dash.png",
      description:
        "Plateforme pensée pour rapprocher assurés et prestataires de santé, en améliorant la compréhension du parcours de soins et la fluidité de l’expérience utilisateur.",
      stack: ["Java", "Spring Boot", "React", "PostgreSQL"],
      impact: "Contribue à une meilleure prise en charge grâce à un parcours plus clair et plus accessible.",
      link: "https://demo-amp-sunu.example.com",
      cta: "Voir le projet",
    },
    {
      title: "Perfect Vision",
      client: "Entreprise de services",
      category: "Solution métier • Gestion de processus",
      image: "/portfolio-images/portfolio-1.png",
      description:
        "Maintenance et évolution d’une solution métier dédiée à la gestion des processus internes, avec des améliorations fonctionnelles et une meilleure stabilité de l’application.",
      stack: ["Java", "Spring Boot", "Apache Wicket", "Windows/Linux"],
      impact: "Amélioration de la fiabilité produit et de la capacité de mise en service sur plusieurs environnements.",
      link: "https://demo-perfect-vision.example.com",
      cta: "Voir le projet",
    },
  ];

  const personalProjects = [
    {
      title: "Portfolio personnel",
      client: "Projet personnel",
      category: "Portfolio • Design system",
      image: "/portfolio-images/portfolio-1.png",
      description:
        "Portfolio conçu comme une vitrine professionnelle moderne, avec une identité visuelle premium, des sections de preuve et une expérience claire pour les recruteurs.",
      stack: ["Next.js", "TypeScript", "Tailwind", "UI/UX"],
      impact: "Renforce la présence professionnelle et la qualité de la première impression.",
      link: "https://demo-portfolio-personnel.example.com",
      cta: "Voir le projet",
    },
    {
      title: "Gym Management App",
      client: "Projet académique",
      category: "Application web • Gestion",
      image: "/amp-images/medecin-controlleur-dash.png",
      description:
        "Application de gestion de salle de sport avec gestion des abonnements, clients, paiements et sécurité JWT, pensée pour un usage réel et scalable.",
      stack: ["Angular", "Spring Boot", "JWT", "MySQL"],
      impact: "Démonstration d’une architecture full-stack claire et sécurisée.",
      link: "https://demo-gym-management.example.com",
      cta: "Voir le projet",
    },
  ];

  const renderProjectCard = (project: (typeof professionalProjects)[number]) => (
    <ScrollReveal key={project.title} delay={project.title === "Perfect Vision" ? 120 : 0}>
      <article className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-border bg-card shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
      <div className="relative h-60 overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-border bg-background/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              {project.client}
            </p>
            <h3 className="mt-2 text-xl font-bold text-foreground">{project.title}</h3>
          </div>
        </div>

        <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto border-t border-border pt-4">
          <p className="text-sm leading-6 text-muted-foreground">{project.impact}</p>
          <Button asChild className="mt-4 w-full rounded-full">
            <a href={project.link} target="_blank" rel="noreferrer noopener">
              {project.cta}
            </a>
          </Button>
        </div>
      </div>
      </article>
    </ScrollReveal>
  );

  return (
    <section id="travaux" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between gap-4">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Mes travaux
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl">
              Projets à fort impact
            </h2>
          </ScrollReveal>
          <Button variant="outline" asChild className="hidden rounded-full sm:inline-flex">
            <a href="#contact">Discuter d&apos;un projet</a>
          </Button>
        </div>

        <div className="space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Projets professionnels
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {professionalProjects.map(renderProjectCard)}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
                Projets personnels
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {personalProjects.map(renderProjectCard)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
