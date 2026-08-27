import { Button } from "@/components/ui/Button";

export function HomeHero() {
  return (
    <section className="section relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgb(205_58_50_/_0.12),_transparent_55%)]" />
      <div className="wrap relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="eyebrow mb-4">Kafe ve restoranlar için</p>
          <h1 className="display max-w-xl">
            Kiosk salonda.
            <span className="block text-ink-muted">Kontrol cebinizde.</span>
          </h1>
          <p className="lede mt-6 max-w-lg">
            Kiosos yazılım destekli kiosk üretir, yerinde kurulum yapar ve
            işletme sahiplerine menü, kampanya ve tüm ekranları yönetecek bir
            mobil uygulama sunar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#contact">Demo randevusu</Button>
            <Button variant="secondary" href="/#solutions">
              Çözümleri inceleyin
            </Button>
          </div>
        </div>

        <div className="grid gap-4 self-center">
          <HeroStat label="Birlikte sunulan" value="Yazılım + donanım" />
          <HeroStat label="Yönetim" value="Tek bir mobil uygulama" />
          <HeroStat label="Kimler için" value="Kafe ve restoranlar" />
        </div>
      </div>
    </section>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="surface-card px-5 py-4">
      <p className="text-xs uppercase tracking-widest text-ink-subtle">{label}</p>
      <p className="mt-1 text-lg font-medium text-ink">{value}</p>
    </div>
  );
}
