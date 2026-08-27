const steps = [
  "Site survey and kiosk placement",
  "Hardware delivery and cabling",
  "Software load-in and branding",
  "Staff walkthrough and go-live",
];

export function HomeInstallations() {
  return (
    <section id="installations" className="section border-b border-border">
      <div className="wrap grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">On-site</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl">
            Installed where guests actually order.
          </h2>
          <p className="lede mt-4 max-w-md">
            Kiosos does not drop-ship a box and disappear. We install kiosks in
            your space, connect them to your network, and leave the floor
            taking orders.
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
