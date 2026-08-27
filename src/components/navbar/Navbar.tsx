"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { NavbarActions } from "./NavbarActions";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarLogo } from "./NavbarLogo";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-nav/95 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <NavbarLogo onNavigate={close} />

        <NavbarLinks className="hidden md:flex" />

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <NavbarActions />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg text-nav-foreground hover:bg-hover"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Menüyü kapat" : "Menüyü aç"}</span>
            <span className="flex flex-col items-center justify-center gap-1.5">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-nav-foreground transition-transform duration-150 ease-out",
                  open && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-nav-foreground",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-nav-foreground transition-transform duration-150 ease-out",
                  open && "-translate-y-2 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border px-4 py-4 md:hidden"
      >
        <NavbarLinks className="flex-col items-stretch" onNavigate={close} />
        <NavbarActions className="mt-4 flex-col items-stretch" onNavigate={close} />
      </div>
    </header>
  );
}
