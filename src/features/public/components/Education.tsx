import Experience from "./Experience";

const education = [
  {
    title:
      "Licence en Génie Logiciel et Systèmes d'Information – IAI TOGO, Lomé",
    period: "2025",
    description:
      "Passionné par les solutions numériques et les systèmes d'information, avec l'ambition de consolider mes acquis et de poursuivre mes études.",
  },
  {
    title: "Bac S – Collège Père Augustin Planque",
    period: "2020",
    description: "Option Sciences et Mathématiques.",
  },
];


export default function Education() {
  return (
    <section
      id="parcours"
      className="pt-20 bg-linear-to-b from-white via-neutral-50 to-white px-6 py-10 dark:from-neutral-800 dark:via-black dark:to-black sm:px-10"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="border border-cyan-500/20  rounded-2xl px-6 py-8 shadow-md shadow-black/10 sm:px-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-600 font-semibold dark:text-cyan-400">
              Education
            </p>
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl dark:text-white">
              Parcours académique
            </h2>
            <div className="space-y-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {education.map((item, index) => (
                <div
                  key={item.title}
                  className="group relative rounded-xl border border-cyan-500/30 bg-white px-4 py-4 shadow-lg transition-all duration-300 hover:border-cyan-500/60 hover:shadow-cyan-500/10 hover:-translate-y-1 dark:bg-neutral-800/50"
                >
                  <div className="absolute -left-3 top-6 h-3 w-3 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 ring-4 ring-white dark:ring-neutral-900" />
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-cyan-600 transition-colors duration-200 dark:text-white dark:group-hover:text-cyan-400">
                      {item.title}
                    </h3>
                    <span className="text-sm font-semibold text-cyan-600 whitespace-nowrap dark:text-cyan-400">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed dark:text-neutral-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}