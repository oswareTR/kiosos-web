"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { COLOR_SCHEME_KEY } from "./color-scheme";

export const kiososTheme = {
  name: "kiosos",
  voice:
    "Simplistic, sleek, and modern, with a pinch of familiarity and comfort.",
  grammar: {
    canvas: "Warm ash-grey, never cold white or pure black.",
    ink: "Onyx green-black for text so type feels grounded, not harsh.",
    accent: "Chestnut for actions and emphasis. Use sparingly.",
    radius: "Soft rectangles (12–20px). Avoid sharp corners and full pills.",
    type: "Geist sans. Tight display tracking, relaxed body leading.",
    space: "Generous section padding. Prefer fewer, calmer surfaces.",
    motion: "Short ease-out transitions. No bounce, no flash.",
    elevation: "Soft, warm shadows. Cards lift; they do not float.",
    colorScheme:
      "Light and dark share one palette. Only the dark-to-light assignment flips.",
  },
} as const;

export type ColorScheme = "light" | "dark";

type ThemeContextValue = typeof kiososTheme & {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  toggleColorScheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readColorScheme(): ColorScheme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-color-scheme") === "dark"
    ? "dark"
    : "light";
}

function applyColorScheme(scheme: ColorScheme) {
  document.documentElement.setAttribute("data-color-scheme", scheme);
  try {
    localStorage.setItem(COLOR_SCHEME_KEY, scheme);
  } catch {
    // Ignore quota / private-mode failures.
  }
}

function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-color-scheme"],
  });
  window.addEventListener("storage", onStoreChange);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", onStoreChange);
  };
}

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const colorScheme = useSyncExternalStore(
    subscribe,
    readColorScheme,
    () => "light" as const,
  );

  const setColorScheme = useCallback((scheme: ColorScheme) => {
    applyColorScheme(scheme);
  }, []);

  const toggleColorScheme = useCallback(() => {
    applyColorScheme(readColorScheme() === "dark" ? "light" : "dark");
  }, []);

  const value = useMemo(
    () => ({
      ...kiososTheme,
      colorScheme,
      setColorScheme,
      toggleColorScheme,
    }),
    [colorScheme, setColorScheme, toggleColorScheme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <div className="flex min-h-full flex-1 flex-col bg-canvas text-ink">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return theme;
}
