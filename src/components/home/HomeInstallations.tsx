const steps = [
  "Saha keşfi ve kiosk yerleşimi",
  "Donanım teslimi ve kablolama",
  "Yazılım kurulumu ve markalama",
  "Ekip eğitimi ve canlıya geçiş",
];

export function HomeInstallations() {
  return (
    <section id="installations" className="section border-b border-border">
      <div className="wrap grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Yerinde</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl">
            Misafirlerin sipariş verdiği yere kurulur.
          </h2>
          <p className="lede mt-4 max-w-md">
            Kiosos kutuyu bırakıp kaybolmaz. Kiosku mekânınıza kurar, ağa
            bağlar ve salonu sipariş alacak şekilde bırakırız.
          </p>
        </div>
        <ol className="space-y-3">
          {steps.map((step, index) => (
            <li key={step} className="surface-card flex items-center gap-4 px-4 py-4">
              <span className="font-mono text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-ink">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
