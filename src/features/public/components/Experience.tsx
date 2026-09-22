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
                "Contribution à la réflexion sur les fonctionnalités et les besoins utilisateurs liés à la gestion et à la recherche de biens immobiliers."
                ,
            ],
        },
        {
            title: "Stage en développement web – Sunu Santé, Lomé",
            period: "Jul. 2024 - Oct. 2024",
            details: [
                "Conception et développement d'une solution multiplateforme d'assistance médicale personnalisée.",
                "Contribution à l'analyse des besoins des utilisateurs et à la compréhension des processus métiers liés à l'assurance santé.",
                "Participation à la conception d'une solution adaptée aux besoins opérationnels et aux attentes des utilisateurs."
            ],
        },
        {
            title:
                "Projet académique – Application de gestion de salle de gym, IAI TOGO",
            period: "Dec. 2024 - Fev. 2025",
            details: [
                "Conception et développement d'une application web de gestion de salle de gym permettant la gestion des clients, des abonnements, et paiements.",
                "Mise en place d'une architecture full-stack (Angular / Spring boot), à la sécurisation de l'application par JWT."

            ],
        },
    ];
    return (
        <div id="experience" className="pt-20 px-6 py-10 dark:from-neutral-800 dark:via-black dark:to-black sm:px-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-600 font-semibold dark:text-cyan-400">
                        Expériences
                    </p>
                    <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl dark:text-white">
                        Projets & stages
                    </h2>
                    <div className="space-y-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {experiences.map((item, index) => (
                            <div
                                key={item.title}
                                className="group relative rounded-xl border border-cyan-500/30 bg-white px-4 py-4 shadow-lg transition-all duration-300 hover:border-cyan-500/60 hover:shadow-cyan-500/10 hover:-translate-y-1 dark:bg-neutral-800/50"
                            >
                                <div className="absolute -left-3 top-6 h-3 w-3 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 ring-4 ring-white dark:ring-neutral-900" />
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-cyan-600 transition-colors duration-200 dark:text-white dark:group-hover:text-cyan-400">
                                        {item.title}
                                    </h3>
                                    <span className="text-xs font-semibold text-cyan-600 whitespace-nowrap dark:text-cyan-400">
                                        {item.period}
                                    </span>
                                </div>
                                <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                                    {item.details.map((detail) => (
                                        <li key={detail} className="flex gap-3">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 shadow-sm shadow-cyan-500/50" />
                                            <span className="leading-relaxed">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}