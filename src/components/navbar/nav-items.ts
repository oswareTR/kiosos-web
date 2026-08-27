export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Ana sayfa" },
  { href: "/#solutions", label: "Çözümler" },
  { href: "/#installations", label: "Kurulum" },
  { href: "/#app", label: "Mobil uygulama" },
];
