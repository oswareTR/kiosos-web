import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { SITE_EMAIL, SITE_EMAIL_HREF, SITE_NAME } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: `${SITE_NAME} kişisel verilerinizi nasıl toplar, işler ve korur.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Gizlilik Politikası" updated="28 Ağustos 2026">
      <p>
        {SITE_NAME} olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu
        (KVKK) ve ilgili mevzuat kapsamında verilerinizin güvenliğine özen
        gösteririz. Bu politika, web sitemizi ziyaret ettiğinizde, demo
        talep ettiğinizde ve hizmetlerimizi kullandığınızda işlenen kişisel
        verileri açıklar.
      </p>

      <LegalSection title="1. Veri sorumlusu">
        <p>
          Veri sorumlusu {SITE_NAME}’tur. Talepleriniz için{" "}
          <a className="text-ink underline-offset-2 hover:underline" href={SITE_EMAIL_HREF}>
            {SITE_EMAIL}
          </a>{" "}
          üzerinden bize ulaşabilirsiniz.
        </p>
      </LegalSection>

      <LegalSection title="2. Topladığımız veriler">
        <p>
          İletişim ve demo formları veya e-posta yoluyla ad, soyad, işletme
          adı, telefon, e-posta ve mesaj içeriği toplanabilir. Hizmet
          kullanımı sırasında menü, kampanya ve cihaz durumu gibi işletme
          verileri işlenir. Site ziyaretinde IP adresi, tarayıcı türü ve
          çerezler teknik olarak oluşabilir.
        </p>
      </LegalSection>

      <LegalSection title="3. İşleme amaçları ve hukuki sebepler">
        <p>
          Veriler; talebinize cevap vermek, sözleşme kurmak ve ifa etmek,
          ürünü geliştirmek, güvenliği sağlamak, yasal yükümlülükleri yerine
          getirmek ve açık rızanız varsa ticari iletiler göndermek için
          işlenir. Hukuki sebepler KVKK m. 5 kapsamındaki sözleşme, meşru
          menfaat, hukuki yükümlülük ve açık rızadır.
        </p>
      </LegalSection>

      <LegalSection title="4. Aktarım">
        <p>
          Barındırma, e-posta ve analiz gibi tedarikçilere, yalnızca hizmet
          için gerekli ölçüde aktarım yapılabilir. Yurt dışına aktarım söz
          konusu olursa KVKK’daki usullere uyulur. Yasal zorunluluk halinde
          yetkili kamu kurumlarıyla paylaşım yapılabilir.
        </p>
      </LegalSection>

      <LegalSection title="5. Saklama ve güvenlik">
        <p>
          Veriler, işleme amacı ve yasal saklama süreleriyle sınırlı tutulur.
          Yetkisiz erişim, kayıp ve değişiklik riskine karşı makul teknik ve
          idari tedbirler alınır. Hiçbir iletim yönteminin mutlak güvenliği
          garanti edilemez.
        </p>
      </LegalSection>

      <LegalSection title="6. KVKK kapsamındaki haklarınız">
        <p>
          KVKK m. 11 uyarınca verilerinizin işlenip işlenmediğini öğrenme,
          bilgi talep etme, düzeltme, silme, aktarılan üçüncü kişilerin
          bildirilmesini isteme, itiraz ve zararın giderilmesini talep etme
          haklarına sahipsiniz. Başvurularınızı {SITE_EMAIL} adresine
          iletebilirsiniz. Talepler, mevzuattaki sürelerde yanıtlanır.
        </p>
      </LegalSection>

      <LegalSection title="7. Çerezler">
        <p>
          Site, oturum ve tercih (örneğin açık/koyu tema) için çerez veya
          yerel depolama kullanabilir. Ayrıntılar için{" "}
          <Link className="text-ink underline-offset-2 hover:underline" href="/cookies">
            Çerez Politikası
          </Link>
          ’na bakın.
        </p>
      </LegalSection>

      <LegalSection title="8. Değişiklikler">
        <p>
          Bu politika güncellenebilir. Güncel sürüm bu sayfada yayımlanır.
          Önemli değişikliklerde sitede duyuru yapılabilir.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
