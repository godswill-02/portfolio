import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/shared/ModeToggle";
import Link from "next/link";

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  navLinks: { href: string; label: string }[];
  handleLinkClick: () => void;
}

export default function MobileMenu({
  open,
  setOpen,
  navLinks,
  handleLinkClick,
}: MobileMenuProps) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden rounded-full">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[220px] sm:w-[300px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-2 px-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="rounded-lg px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-4 w-full">
            <Link href="#contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </Button>
        </nav>
        <SheetFooter className="flex flex-row items-center justify-between pt-6">
          <ModeToggle />

          <SheetClose asChild>
            <Button variant="ghost">Fermer</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
