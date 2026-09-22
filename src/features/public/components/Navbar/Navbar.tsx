import Image from "next/image";
import { NavMenu } from "./NavMenu";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/80 text-foreground backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-primary/20 bg-card shadow-sm">
            <Image
              src="/logo.png"
              alt="Logo de LEKWAUWA Uchechukwu Godwill"
              fill
              sizes="44px"
              className="rounded-full object-contain p-1"
              priority
            />
          </div>
          <div className="hidden md:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              Portfolio
            </p>
            <p className="text-base font-bold text-foreground">
              LEKWAUWA Uchechukwu Godwill
            </p>
          </div>
        </div>
        <NavMenu />
      </div>
    </nav>
  );
}
