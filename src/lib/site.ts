export const SITE_EMAIL = "contact@kiosos.com";
export const SITE_EMAIL_HREF = `mailto:${SITE_EMAIL}`;
export const SITE_NAME = "Kiosos";
export const SITE_COPYRIGHT_YEAR = 2026;
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kiosos.com";
export const SITE_DESCRIPTION =
  "Kafe ve restoranlar için yazılım destekli kiosk, yerinde kurulum ve menü ile kampanyaları yöneten mobil uygulama.";

export const footerNav = [
  { href: "/#solutions", label: "Çözümler" },
  { href: "/#installations", label: "Kurulum" },
  { href: "/#app", label: "Mobil uygulama" },
  { href: "/#contact", label: "İletişim" },
] as const;

export const legalNav = [
  { href: "/privacy", label: "Gizlilik Politikası" },
  { href: "/tos", label: "Kullanım Koşulları" },
  { href: "/cookies", label: "Çerez Politikası" },
] as const;
