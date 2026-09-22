"use client";

import WhatsappIcon from "@/components/shared/WhatsappIcon";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import Utils from "@/lib/utils";
import Image from "next/image";

export default function Hero() {
  const data = {
    role: "Développeur Backend Java & Spring Boot",
    fullName: "LEKWAUWA Uchechukwu Godwill",
    location: "Lomé, Togo",
    email: "godswilllek02@gmail.com",
    phone: Utils.formatPhone("00228-71-61-06-53"),
    introduction: "Je conçois des systèmes",
    highlight: "robustes, élégants et prêts à évoluer",
    longDescription:
      "Je développe des API fiables, des interfaces claires et des solutions digitales pensées pour les utilisateurs et pour les besoins métiers. Mon objectif : concevoir des produits utiles, bien structurés et faciles à maintenir.",
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 pb-16 pt-28 sm:px-10 lg:px-12"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(78,121,159,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(32,110,141,0.08),_transparent_32%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <ScrollReveal className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary shadow-sm">
              {data.role}
            </div>

            <div className="space-y-5">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                {data.fullName}
              </p>

              <h1 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
                {data.introduction}
                <span className="mt-2 block text-primary">
                  {data.highlight}
                </span>
              </h1>

              <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                {data.longDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-sm">
              {[
                "Java",
                "Spring Boot",
                "Next.js",
                "API REST",
                "PostgreSQL",
                "UI/UX",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#contact">Me contacter</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/cv.pdf" download>
                  Télécharger mon CV
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#travaux">Voir mes projets</a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <a
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                href={`https://wa.me/${data.phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon className="text-emerald-500" />
                WhatsApp
              </a>
              <a
                className="rounded-full border border-border bg-card px-3 py-2 text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                href={`mailto:${data.email}`}
              >
                {data.email}
              </a>
              <span className="rounded-full border border-border bg-card px-3 py-2 text-foreground">
                {data.location}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal className="relative mx-auto w-full max-w-xl" delay={140}>
            <div className="absolute inset-6 rounded-[2rem] border border-primary/15 bg-primary/5 blur-2xl" />
            <div className="group relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center rounded-[2rem] border border-border bg-card p-3 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <div className="absolute -top-4 left-6 rounded-full border border-primary/20 bg-background px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-sm">
                Backend
              </div>
              <div className="absolute -bottom-4 right-6 rounded-full border border-accent/30 bg-accent/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground shadow-sm">
                API • UX
              </div>
              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] border border-border bg-muted animate-hero-bounce">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                <Image
                  src="/yellow_dress.jpeg"
                  alt="Portrait de présentation"
                  fill
                  sizes="(max-width:768px) 90vw, (max-width:1200px) 420px, 420px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
