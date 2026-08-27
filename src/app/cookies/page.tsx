import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { SITE_EMAIL, SITE_EMAIL_HREF, SITE_NAME } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: `${SITE_NAME} çerezleri ve benzeri teknolojileri nasıl kullanır.`,
};

export default function CookiesPage() {
  return (
    <LegalPage title="Çerez Politikası" updated="28 Ağustos 2026">
      <p>
        Bu Çerez Politikası, {SITE_NAME} web sitesinde çerez ve benzeri
        teknolojilerin (örneğin tarayıcı yerel depolaması) nasıl kullanıldığını
        açıklar.{" "}
        <Link className="text-ink underline-offset-2 hover:underline" href="/privacy">
          Gizlilik Politikası
        </Link>{" "}
        ile birlikte okunmalıdır.
      </p>

      <LegalSection title="1. Çerez nedir?">
        <p>
          Çerezler, ziyaret ettiğiniz sitelerin tarayıcınıza bıraktığı küçük
          metin dosyalarıdır. Oturumu hatırlamak, tercihleri saklamak ve site
          performansını anlamak için kullanılır.
        </p>
      </LegalSection>

      <LegalSection title="2. Kullandığımız türler">
        <p>
          Zorunlu çerezler ve yerel depolama, sitenin çalışması ve güvenlik
          için gerekir. Tema tercihiniz (açık/koyu görünüm) cihazınızda
          saklanır. Ölçüm veya pazarlama çerezleri kullanıyorsak bunlar ayrı
          olarak belirtilir ve mümkün olan hallerde rızaya bağlanır.
        </p>
      </LegalSection>

      <LegalSection title="3. Yönetim">
        <p>
          Tarayıcı ayarlarından çerezleri silebilir veya engelleyebilirsiniz.
          Zorunlu çerezlerin kapatılması bazı işlevlerin çalışmamasına yol
          açabilir. Tema tercihini temizlik sonrası varsayılana döner.
        </p>
      </LegalSection>

      <LegalSection title="4. İletişim">
        <p>
          Çerezler hakkında sorularınız için{" "}
          <a className="text-ink underline-offset-2 hover:underline" href={SITE_EMAIL_HREF}>
            {SITE_EMAIL}
          </a>{" "}
          adresine yazın.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
