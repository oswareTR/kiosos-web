import { Button } from "@/components/ui/Button";
import { SITE_EMAIL_HREF } from "@/lib/site";

export function HomeCta() {
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="surface-card px-6 py-12 sm:px-12">
          <p className="eyebrow">Sonraki adım</p>
          <h2 className="display mt-3 max-w-xl text-3xl sm:text-4xl">
            İşletmenize bir Kiosos kiosk koyalım mı?
          </h2>
          <p className="lede mt-4 max-w-lg">
            Kafe veya restoranınızı anlatın. Yazılım, donanım ve ekibinizin
            gerçekten işletebileceği bir kurulumu birlikte planlarız.
          </p>
          <div className="mt-8">
            <Button href={SITE_EMAIL_HREF}>Ekiple iletişime geçin</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
