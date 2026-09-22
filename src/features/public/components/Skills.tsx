import ScrollReveal from "@/components/shared/ScrollReveal";

const techSkills = {
  "Langages & Frameworks": [
    "Java",
    "Spring Boot",
    "Python",
    "Flutter",
    "React",
    "Next.js",
  ],
  "Bases de données": ["MySQL", "PostgreSQL", "Firebase", "MongoDB"],
  Autres: ["Conception orientée objet", "API REST", "UI/UX", "Design system"],
};

const softSkills = [
  "Gestion du temps",
  "Adaptation à tout type de projet",
  "Communication",
  "Curiosité",
];

const languages = ["Français", "Anglais"];
const interests = ["Sport", "Lecture", "Musique"];

export default function Skills() {
  return (
    <section id="competences" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="grid gap-6 rounded-[1.75rem] border border-border bg-card px-6 py-8 shadow-[0_18px_40px_rgba(15,23,42,0.04)] sm:px-8 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Compétences techniques
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl">
              Stack principale
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {Object.entries(techSkills).map(([category, items]) => (
                <div
                  key={category}
                  className="rounded-[1.25rem] border border-border bg-background p-4 shadow-sm transition-all duration-300 hover:border-primary/30"
                >
                  <h3 className="text-base font-bold text-foreground">{category}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.25rem] border border-border bg-background p-4 shadow-sm">
              <h3 className="text-base font-bold text-foreground">Profil</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Titulaire d&apos;une Licence en Génie Logiciel et Systèmes d&apos;Information, je m&apos;intéresse au développement de solutions numériques et aux systèmes d&apos;information. Ambitieux et motivé, je cherche à construire un parcours professionnel solide dans la tech.
              </p>
            </div>

            <div className="rounded-[1.25rem] border border-border bg-background p-4 shadow-sm">
              <h3 className="text-base font-bold text-foreground">Compétences transversales</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.25rem] border border-border bg-background p-4 shadow-sm">
              <h3 className="text-base font-bold text-foreground">Langues</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.25rem] border border-border bg-background p-4 shadow-sm">
              <h3 className="text-base font-bold text-foreground">Centres d&apos;intérêts</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
