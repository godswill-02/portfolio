import { ModeToggle } from "@/components/shared/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

interface DesktopMenuProps {
  navLinks: { href: string; label: string }[];
}

export default function DesktopMenu({ navLinks }: DesktopMenuProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="items-center gap-1">
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle() + " rounded-full bg-transparent px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground data-[active]:bg-primary/5 data-[active]:text-primary"}
            >
              <Link href={link.href}>{link.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <Button asChild className="rounded-full px-4 text-sm font-medium">
            <Link href="#contact">Contact</Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
