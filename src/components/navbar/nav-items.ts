export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/home", label: "Home" },
  { href: "/home#solutions", label: "Solutions" },
  { href: "/home#installations", label: "Installations" },
  { href: "/home#app", label: "Mobile app" },
];
