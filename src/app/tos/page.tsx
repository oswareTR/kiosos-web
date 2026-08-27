import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { SITE_EMAIL, SITE_EMAIL_HREF, SITE_NAME } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: `${SITE_NAME} web sitesi, yazılımı, kiosk çözümleri ve hizmetlerinin kullanım koşulları.`,
};

export default function TosPage() {
  return (
    <LegalPage title="Kullanım Koşulları" updated="28 Ağustos 2026">
      <p>
        Bu Kullanım Koşulları, {SITE_NAME} tarafından sunulan web sitesi, kiosk
        yazılımı, yerinde kurulum hizmetleri ve işletme mobil uygulamasına
        erişiminizi ve bunları kullanımınızı düzenler. Siteyi veya hizmetleri
        kullanarak bu koşulları kabul etmiş olursunuz.
      </p>

      <LegalSection title="1. Taraflar ve kapsam">
        <p>
          {SITE_NAME}, kafe ve restoran işletmelerine yazılım destekli kiosk,
          kurulum ve uzaktan yönetim araçları sağlar. Bu metin; ziyaretçiler,
          potansiyel müşteriler ve hizmetlerimizi kullanan işletmeler için
          geçerlidir.
        </p>
      </LegalSection>

      <LegalSection title="2. Hizmetlerin niteliği">
        <p>
          Demo talepleri, teklifler ve kurulum planları bağlayıcı sözleşme
          yerine geçmez. Ticari ilişki, ayrıca imzalanacak sipariş formu,
          lisans veya hizmet sözleşmesi ile kurulur. Yazılım sürekli
          geliştirilir; özellikler önceden haber verilerek değişebilir.
        </p>
      </LegalSection>

      <LegalSection title="3. Hesap ve kullanım">
        <p>
          Mobil uygulama ve yönetim paneli erişim bilgileri gizlidir. Hesabınız
          üzerinden yapılan işlemlerden işletmeniz sorumludur. Hizmetleri
          yasa dışı amaçlarla, üçüncü kişilerin haklarını ihlal ederek veya
          sistemin güvenliğini tehlikeye atacak şekilde kullanamazsınız.
        </p>
      </LegalSection>

      <LegalSection title="4. Fikri mülkiyet">
        <p>
          {SITE_NAME} markası, logosu, yazılımı, arayüzleri ve içerikleri
          ilgili hak sahiplerine aittir. Yazılı izin olmadan kopyalanamaz,
          tersine mühendislik yapılamaz veya yeniden lisanslanamaz. İşletmenize
          ait menü, görsel ve fiyat verileri size aittir; hizmeti sunmak için
          bunları işleriz.
        </p>
      </LegalSection>

      <LegalSection title="5. Sorumluluğun sınırlandırılması">
        <p>
          Donanım arızası, internet kesintisi, yanlış menü girişi veya üçüncü
          taraf ödeme altyapılarından doğan kayıplardan {SITE_NAME} sorumlu
          tutulamaz. Yasaların izin verdiği ölçüde hizmetler “olduğu gibi”
          sunulur. Zorunlu tüketici ve ayıplı mal hükümleri saklıdır.
        </p>
      </LegalSection>

      <LegalSection title="6. Fesih">
        <p>
          Koşullara aykırılık, ödeme temerrüdü veya yasal zorunluluk halinde
          erişimi askıya alabilir veya sonlandırabiliriz. Sözleşme bitiminde
          kiosk yazılım lisansınız durur; donanımın iadesi ayrı anlaşmaya
          tabidir.
        </p>
      </LegalSection>

      <LegalSection title="7. Uygulanacak hukuk">
        <p>
          Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda
          İstanbul mahkemeleri ve icra daireleri yetkilidir; zorunlu tüketici
          hakem heyeti ve tüketici mahkemesi hükümleri saklıdır.
        </p>
      </LegalSection>

      <LegalSection title="8. İletişim">
        <p>
          Sorularınız için{" "}
          <a className="text-ink underline-offset-2 hover:underline" href={SITE_EMAIL_HREF}>
            {SITE_EMAIL}
          </a>{" "}
          adresine yazabilirsiniz. Kişisel veriler için ayrıca{" "}
          <Link className="text-ink underline-offset-2 hover:underline" href="/privacy">
            Gizlilik Politikası
          </Link>
          ’na bakın.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
