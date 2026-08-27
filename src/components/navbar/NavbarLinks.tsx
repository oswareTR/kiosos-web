"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { navItems } from "./nav-items";

type NavbarLinksProps = {
  className?: string;
  onNavigate?: () => void;
};

export function NavbarLinks({ className, onNavigate }: NavbarLinksProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className={cn("flex items-center gap-1", className)}>
      {navItems.map((item) => {
        const isHome = pathname === "/" || pathname === "/home";
        const isActive = item.href === "/" && isHome;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 ease-out",
              isActive
                ? "text-nav-foreground"
                : "text-nav-muted hover:bg-hover hover:text-nav-foreground",
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
