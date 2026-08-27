const features = [
  {
    title: "Menus",
    body: "Add items, change prices, swap photos, and publish to every kiosk in minutes.",
  },
  {
    title: "Promotions",
    body: "Run happy hour, combos, and limited drops. Start and stop them from the app.",
  },
  {
    title: "Availability",
    body: "Mark 86'd dishes instantly so guests never order what the kitchen cannot make.",
  },
  {
    title: "Hours & branding",
    body: "Keep opening times, welcome screens, and venue identity consistent across units.",
  },
];

export function HomeApp() {
  return (
    <section id="app" className="section border-b border-border">
      <div className="wrap">
        <p className="eyebrow">Mobile app</p>
        <h2 className="display mt-3 max-w-2xl text-3xl sm:text-4xl">
          The owner app is how cafes and restaurants run Kiosos day to day.
        </h2>
        <p className="lede mt-4 max-w-2xl">
          Built for operators, not IT teams. Open the app between rushes and
          the kiosks follow.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="border-l-2 border-accent pl-5"
            >
              <h3 className="text-lg font-medium text-ink">{feature.title}</h3>
              <p className="mt-2 leading-7 text-ink-muted">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
