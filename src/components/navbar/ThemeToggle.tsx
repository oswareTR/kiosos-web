"use client";

import { useTheme } from "@/theme/ThemeProvider";

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v1.5M12 19.5V21M4.93 4.93l1.06 1.06M17.99 17.99l1.06 1.06M3 12h1.5M19.5 12H21M4.93 19.07l1.06-1.06M17.99 6.01l1.06-1.06" />
    </svg>
  );
}

export function ThemeToggle() {
  const { toggleColorScheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleColorScheme}
      aria-label="Toggle light and dark theme"
      title="Toggle light and dark theme"
      className="inline-flex size-10 items-center justify-center rounded-lg text-nav-foreground transition-colors duration-150 ease-out hover:bg-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <span className="show-light-only">
        <MoonIcon />
      </span>
      <span className="show-dark-only">
        <SunIcon />
      </span>
    </button>
  );
}
