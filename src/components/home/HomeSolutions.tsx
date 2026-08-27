const solutions = [
  {
    id: "software",
    title: "Software solutions",
    body: "A kiosk operating layer for ordering, menus, promotions, and venue branding — kept in sync across every unit you deploy.",
  },
  {
    id: "install",
    title: "On-site installations",
    body: "We place, wire, and launch kiosks in your cafe or restaurant, then train staff so the floor is live on day one.",
  },
  {
    id: "app",
    title: "Owner mobile app",
    body: "Update dishes, launch a lunch promo, mark items sold out, and push changes to every kiosk without calling a technician.",
  },
];

export function HomeSolutions() {
  return (
    <section id="solutions" className="section border-b border-border">
      <div className="wrap">
        <p className="eyebrow">What we do</p>
        <h2 className="display mt-3 max-w-2xl text-3xl sm:text-4xl">
          One company for the stack, the install, and the day-to-day.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {solutions.map((solution) => (
            <article key={solution.id} className="surface-card flex flex-col p-6">
              <h3 className="text-xl font-medium text-ink">{solution.title}</h3>
              <p className="mt-3 leading-7 text-ink-muted">{solution.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
