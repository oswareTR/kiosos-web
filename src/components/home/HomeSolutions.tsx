const solutions = [
  {
    id: "software",
    title: "Yazılım çözümleri",
    body: "Sipariş, menü, kampanya ve işletme kimliği için kiosk yazılım katmanı. Kurduğunuz her ünitede senkron kalır.",
  },
  {
    id: "install",
    title: "Yerinde kurulum",
    body: "Kiosku kafe veya restoranınıza yerleştirir, bağlar ve canlıya alırız. İlk günden salonda çalışması için ekibinizi eğitiriz.",
  },
  {
    id: "app",
    title: "İşletme mobil uygulaması",
    body: "Yemek ekleyin, öğle kampanyası başlatın, biten ürünü işaretleyin. Değişiklikler teknisyen çağırmadan tüm kiosklara gider.",
  },
];

export function HomeSolutions() {
  return (
    <section id="solutions" className="section border-b border-border">
      <div className="wrap">
        <p className="eyebrow">Ne yapıyoruz</p>
        <h2 className="display mt-3 max-w-2xl text-3xl sm:text-4xl">
          Yazılım, kurulum ve günlük operasyon tek şirketten.
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
