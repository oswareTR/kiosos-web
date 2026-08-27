const features = [
  {
    title: "Menüler",
    body: "Ürün ekleyin, fiyat değiştirin, görseli güncelleyin ve dakikalar içinde tüm kiosklara yayınlayın.",
  },
  {
    title: "Kampanyalar",
    body: "Happy hour, menü kombinasyonu ve sınırlı ürünleri uygulamadan başlatın ve durdurun.",
  },
  {
    title: "Müsaitlik",
    body: "Biten yemeği anında işaretleyin; mutfağın çıkaramayacağı sipariş alınmasın.",
  },
  {
    title: "Saatler ve marka",
    body: "Açılış saatleri, karşılama ekranları ve işletme kimliği tüm ünitelerde tutarlı kalsın.",
  },
];

export function HomeApp() {
  return (
    <section id="app" className="section border-b border-border">
      <div className="wrap">
        <p className="eyebrow">Mobil uygulama</p>
        <h2 className="display mt-3 max-w-2xl text-3xl sm:text-4xl">
          Kafe ve restoranlar Kiosos’u günlük olarak bu uygulamadan yönetir.
        </h2>
        <p className="lede mt-4 max-w-2xl">
          Bilişim ekibi için değil, işletmeci için tasarlandı. Yoğunluk
          arasında uygulamayı açın; kiosklar sizi takip eder.
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
