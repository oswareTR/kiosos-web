import Link from "next/link";
import {
  SITE_COPYRIGHT_YEAR,
  SITE_EMAIL,
  SITE_EMAIL_HREF,
  SITE_NAME,
  footerNav,
  legalNav,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface-muted">
      <div className="wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="text-sm font-semibold tracking-wide text-ink">{SITE_NAME}</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-ink-muted">
            Kafe ve restoranlar için yazılım destekli kiosk, yerinde kurulum ve
            işletme mobil uygulaması.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-ink-subtle">
            Ürün
          </p>
          <ul className="mt-3 space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-ink-subtle">
            Yasal
          </p>
          <ul className="mt-3 space-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-ink-subtle">
            İletişim
          </p>
          <a
            href={SITE_EMAIL_HREF}
            className="mt-3 inline-block text-sm text-ink-muted transition-colors hover:text-ink"
          >
            {SITE_EMAIL}
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="wrap flex flex-col gap-2 py-5 text-xs text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {SITE_COPYRIGHT_YEAR} {SITE_NAME}. Tüm hakları saklıdır.
          </p>
          <p>Türkiye</p>
        </div>
      </div>
    </footer>
  );
}
