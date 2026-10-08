import type { Locale } from './locales';
import type { RouteId } from './messages';

/** Working slogan from the vault. Turkish keeps the same help-to-sell intent. */
export const slogan: Record<Locale, string> = {
  en: 'Kiosos — to help you sell.',
  tr: 'Kiosos — satışta yardım.',
};

export type Point = {
  title: string;
  text: string;
};

export type ContentSection = {
  id: string;
  kicker: string;
  statement: string;
  body?: string;
  points?: Point[];
};

export type PageCta = {
  label: string;
  route: RouteId;
};

export type RichPageCopy = {
  title: string;
  description: string;
  heading: string;
  tagline: string;
  sections: ContentSection[];
  ctas?: PageCta[];
  contactEmail?: string;
};

export type HomeCopy = {
  brand: string;
  headline: string;
  intro: string;
  exploreLabel: string;
  cards: { route: RouteId; kicker: string; title: string; blurb: string }[];
  missionLinkLabel: string;
};

const enPages: Record<Exclude<RouteId, 'home'>, RichPageCopy> = {
  product: {
    title: 'Kiosos Engine',
    description:
      'Kiosos Engine is a vector sales-engine API for upsell and cross-sell: catalog embeddings, smart retrieval, and ranked recommendations between your products and checkout.',
    heading: 'Kiosos Engine',
    tagline: 'The next item. At the right moment.',
    sections: [
      {
        id: 'problem',
        kicker: 'The gap',
        statement: 'You have a catalog. You need the sale that follows.',
        body: 'Large retailers spend years on attach rate and basket size. Kiosos is that layer as an API — between your products and every commerce surface you already run.',
      },
      {
        id: 'what',
        kicker: 'How it works',
        statement: 'Embed. Retrieve. Recommend.',
        body: 'A vector sales-engine, not a chatbot and not open-web search. Catalog and session context go in. Ranked suggestions come out.',
        points: [
          { title: 'Embed', text: 'Name, category, description, price, and the attributes you already keep.' },
          { title: 'Retrieve', text: 'Vector search with ranking built for sales — not nearest-neighbor alone.' },
          { title: 'Decide', text: 'AI-assisted flows that turn a real task into a recommendation.' },
        ],
      },
      {
        id: 'intents',
        kicker: 'The API',
        statement: 'Ask for the sale. Get the list.',
        points: [
          { title: 'Cart', text: 'Items in the basket — five recommendations on the purchase screen.' },
          { title: 'Upsell', text: 'One product in hand — the strongest next offer, plus related cross-sells.' },
        ],
      },
      {
        id: 'boundary',
        kicker: 'The boundary',
        statement: 'We help you sell what you already carry.',
        body: 'You keep the system of record for products and orders. Kiosos stays the intelligence layer.',
        points: [
          { title: 'Is', text: 'Sales-specialized retrieval and ranking over catalogs.' },
          { title: 'Isn’t', text: 'Your ERP, a full storefront, or generic web search.' },
        ],
      },
    ],
    ctas: [
      { label: 'Kiosos Spot', route: 'spot' },
      { label: 'Kiosos Kiosk', route: 'kiosk' },
      { label: 'Talk to us', route: 'contact' },
    ],
  },
  spot: {
    title: 'Kiosos Spot',
    description:
      'Kiosos Spot is QR menu and loyalty in one monthly SaaS for cafés and venues at spot.kiosos.com — built to grow with the Kiosos sales-engine.',
    heading: 'Kiosos Spot',
    tagline: 'Scan. Order. Come back.',
    sections: [
      {
        id: 'bundle',
        kicker: 'One product',
        statement: 'Menu and loyalty. Same venue. Same guest.',
        body: 'A single subscription for hospitality — cafés first. Not a menu app plus a stamps app.',
        points: [
          { title: 'QR menu', text: 'Guests scan, browse the catalog, and order from the table.' },
          { title: 'Loyalty', text: 'Stamps, rewards, and return visits tied to the same place.' },
        ],
      },
      {
        id: 'saas',
        kicker: 'How you buy it',
        statement: 'Monthly packs. Predictable from day one.',
        body: 'Recurring SaaS with tiers for venues and growth. Pricing lands with the product — the shape is subscription, not a one-off build.',
      },
      {
        id: 'bridge',
        kicker: 'Why it exists',
        statement: 'A real venue now. A smarter catalog later.',
        body: 'Spot is the cash-flow bridge while the engine matures. Menus, orders, and loyalty are modeled so they can feed Kiosos Engine — even before the first API call.',
      },
      {
        id: 'where',
        kicker: 'Where it lives',
        statement: 'spot.kiosos.com',
        body: 'Trust and story stay on kiosos.com. Operators and guests use Spot on its own domain — apart from this site and apart from the raw recommendation API.',
      },
    ],
    ctas: [
      { label: 'The engine', route: 'product' },
      { label: 'Talk to us', route: 'contact' },
    ],
  },
  kiosk: {
    title: 'Kiosos Kiosk',
    description:
      'Kiosos Kiosk puts the sales-engine in the venue — self-service or counter kiosk for upsell and cross-sell where guests buy, alongside our Shopify plugin.',
    heading: 'Kiosos Kiosk',
    tagline: 'The engine. In the room.',
    sections: [
      {
        id: 'purpose',
        kicker: 'Why a kiosk',
        statement: 'Recommendations where the money changes hands.',
        body: 'Same tier as the paid API and the Shopify plugin. You buy the selling capability, packaged as an in-venue touchpoint — without building UI on the raw API.',
      },
      {
        id: 'experience',
        kicker: 'What guests meet',
        statement: 'A quiet prompt. The right next item.',
        body: 'Fixed kiosk or counter tablet. Same recommendation endpoints as every other integration. Kio’s helpful tone — not a generic chatbot.',
        points: [
          { title: 'Context', text: 'Session and cart flow into embeddings, retrieval, and ranking.' },
          { title: 'Handoff', text: 'Checkout or POS stays yours. Kiosk is not the catalog of record.' },
        ],
      },
      {
        id: 'not-spot',
        kicker: 'Not Spot',
        statement: 'Spot runs the venue. Kiosk sells smarter.',
        body: 'Spot is menu and loyalty — the bridge. Kiosk is the engine at the physical point of sale. Both can live in hospitality. They are not the same product.',
      },
      {
        id: 'where',
        kicker: 'Planned home',
        statement: 'kiosk.kiosos.com',
        body: 'After the core API, with the other direct engine surfaces.',
      },
    ],
    ctas: [
      { label: 'Kiosos Engine', route: 'product' },
      { label: 'Kiosos Spot', route: 'spot' },
      { label: 'Talk to us', route: 'contact' },
    ],
  },
  about: {
    title: 'About Kiosos',
    description:
      'Kiosos means Kio, smart operational system — a vector sales-engine and venue products that help merchants sell with upsell and cross-sell.',
    heading: 'About',
    tagline: 'Kio. Smart operational system.',
    sections: [
      {
        id: 'name',
        kicker: 'The name',
        statement: 'Help, built into the spelling.',
        body: 'Kiosos is Kio plus smart operational system. The trailing SOS is the help signal — show up when selling gets hard, not another empty dashboard.',
      },
      {
        id: 'estate',
        kicker: 'The estate',
        statement: 'One engine. Surfaces that carry it.',
        body: 'Kiosos Engine sits between catalog and commerce. Spot funds the path. Kiosk and platform plugins put the same recommendations where people already buy.',
        points: [
          { title: 'Engine', text: 'Vector sales API. Upsell and cross-sell.' },
          { title: 'Spot', text: 'QR menu and loyalty. Monthly SaaS.' },
          { title: 'Kiosk', text: 'In-venue engine. Same idea as a Shopify plugin.' },
        ],
      },
      {
        id: 'kio',
        kicker: 'The mark',
        statement: 'Meet Kio.',
        body: 'A black vector smiley: a wink, an open eye, a half-circle smile. The face of helpful selling — not a chat character.',
      },
    ],
    ctas: [
      { label: 'Mission', route: 'mission' },
      { label: 'Contact', route: 'contact' },
    ],
  },
  mission: {
    title: 'Mission',
    description:
      'The Kiosos mission is to help you sell — a vector sales-engine and products that place recommendations where merchants and guests already are.',
    heading: 'Mission',
    tagline: 'To help you sell.',
    sections: [
      {
        id: 'why',
        kicker: 'Why',
        statement: 'The catalog is not the hard part. The moment is.',
        body: 'Most businesses do not lack products. They miss the next item. We build so merchants and integrators can compete on recommendations — without hiring a platform team.',
      },
      {
        id: 'how',
        kicker: 'How',
        statement: 'One recommendation. Every surface.',
        body: 'Embed the catalog. Retrieve for sales. Deliver through an API, and through places you can actually deploy.',
        points: [
          { title: 'Engine', text: 'The source of the suggestion.' },
          { title: 'Spot', text: 'Bridge revenue. Real menus. Future context.' },
          { title: 'Honest edge', text: 'Not your ERP, payments, or generic search.' },
        ],
      },
      {
        id: 'tone',
        kicker: 'Tone',
        statement: 'A nudge. Not an alarm.',
        body: 'SOS means help. Supportive, sales-focused, never panic. That is the line behind kiosos.com.',
      },
    ],
    ctas: [
      { label: 'Kiosos Engine', route: 'product' },
      { label: 'Get in touch', route: 'contact' },
    ],
  },
  contact: {
    title: 'Contact',
    description:
      'Contact Kiosos about the sales-engine API, Kiosos Spot, Kiosos Kiosk, or partnerships at contact@kiosos.com.',
    heading: 'Contact',
    tagline: 'Tell us what you sell.',
    sections: [
      {
        id: 'reach',
        kicker: 'Start here',
        statement: 'API, café, or kiosk — one note is enough.',
        body: 'Integrators, venue owners, and retailers planning in-store surfaces. We read every message.',
      },
      {
        id: 'next',
        kicker: 'Where we are',
        statement: 'Site first. Spot next. Engine after.',
        body: 'Early conversations shape pilots and which integration ships first — Shopify, custom stack, or the venue.',
      },
    ],
    ctas: [{ label: 'The engine', route: 'product' }],
    contactEmail: 'contact@kiosos.com',
  },
};

const trPages: Record<Exclude<RouteId, 'home'>, RichPageCopy> = {
  product: {
    title: 'Kiosos Engine',
    description:
      'Kiosos Engine, upsell ve cross-sell için vektörel satış motoru API’sidir: katalog embedding, akıllı retrieval ve checkout’a kadar sıralı öneriler.',
    heading: 'Kiosos Engine',
    tagline: 'Doğru ürün. Doğru an.',
    sections: [
      {
        id: 'problem',
        kicker: 'Boşluk',
        statement: 'Kataloğunuz var. Sıradaki satış eksik.',
        body: 'Büyük perakendeciler sepet ve attach için yıllar harcar. Kiosos o katmanı API olarak sunar — ürünleriniz ile zaten kullandığınız ticaret yüzeyleri arasında.',
      },
      {
        id: 'what',
        kicker: 'Nasıl',
        statement: 'Embed. Getir. Öner.',
        body: 'Vektörel satış motoru. Sohbet botu değil. Açık web araması değil. Katalog ve oturum girer. Sıralı öneri çıkar.',
        points: [
          { title: 'Embed', text: 'Ad, kategori, açıklama, fiyat ve tuttuğunuz nitelikler.' },
          { title: 'Retrieve', text: 'Satış için sıralama — yalnızca en yakın komşu değil.' },
          { title: 'Karar', text: 'Gerçek bir görevi öneriye bağlayan AI destekli akış.' },
        ],
      },
      {
        id: 'intents',
        kicker: 'API',
        statement: 'Satışı sorun. Listeyi alın.',
        points: [
          { title: 'Sepet', text: 'Sepetteki ürünler — ödeme ekranı için beş öneri.' },
          { title: 'Upsell', text: 'Eldeki ürün — en güçlü sonraki teklif ve ilgili cross-sell.' },
        ],
      },
      {
        id: 'boundary',
        kicker: 'Sınır',
        statement: 'Elinizdekini daha iyi satmanıza yardım ederiz.',
        body: 'Ürün ve sipariş kaydı sizde kalır. Kiosos zeka katmanıdır.',
        points: [
          { title: 'Olan', text: 'Katalog üzerinde satışa özgü retrieval ve ranking.' },
          { title: 'Olmayan', text: 'ERP’niz, tam vitrin veya genel web araması.' },
        ],
      },
    ],
    ctas: [
      { label: 'Kiosos Spot', route: 'spot' },
      { label: 'Kiosos Kiosk', route: 'kiosk' },
      { label: 'Bize yazın', route: 'contact' },
    ],
  },
  spot: {
    title: 'Kiosos Spot',
    description:
      'Kiosos Spot, kafe ve mekânlar için QR menü ile sadakati tek aylık SaaS’ta birleştirir — spot.kiosos.com, satış motoruyla büyümeye hazır.',
    heading: 'Kiosos Spot',
    tagline: 'Tara. Sipariş ver. Geri gel.',
    sections: [
      {
        id: 'bundle',
        kicker: 'Tek ürün',
        statement: 'Menü ve sadakat. Aynı mekân. Aynı misafir.',
        body: 'Konaklama için tek abonelik — önce kafeler. Ayrı menü uygulaması artı damga uygulaması değil.',
        points: [
          { title: 'QR menü', text: 'Misafir tarar, katalogu gezer, masadan sipariş verir.' },
          { title: 'Sadakat', text: 'Aynı yere bağlı damga, ödül ve tekrar ziyaret.' },
        ],
      },
      {
        id: 'saas',
        kicker: 'Nasıl alınır',
        statement: 'Aylık paketler. İlk günden öngörülebilir.',
        body: 'Mekân ve büyümeye göre katmanlı, tekrarlayan SaaS. Fiyat ürünle gelir — model proje değil, abonelik.',
      },
      {
        id: 'bridge',
        kicker: 'Neden var',
        statement: 'Bugün gerçek mekân. Yarın daha akıllı katalog.',
        body: 'Spot, motor olgunlaşırken nakit köprüsüdür. Menü, sipariş ve sadakat, ilk API çağrısından önce bile Engine’e beslenecek şekilde modellenir.',
      },
      {
        id: 'where',
        kicker: 'Adres',
        statement: 'spot.kiosos.com',
        body: 'Güven ve hikâye kiosos.com’da. Operatör ve misafir Spot’u kendi alanında kullanır — bu siteden ve ham öneri API’sinden ayrı.',
      },
    ],
    ctas: [
      { label: 'Motor', route: 'product' },
      { label: 'Bize yazın', route: 'contact' },
    ],
  },
  kiosk: {
    title: 'Kiosos Kiosk',
    description:
      'Kiosos Kiosk, satış motorunu mekâna taşır — self-servis veya tezgah kioskunda upsell ve cross-sell; Shopify eklentisi ile aynı seviyede.',
    heading: 'Kiosos Kiosk',
    tagline: 'Motor. Odada.',
    sections: [
      {
        id: 'purpose',
        kicker: 'Neden kiosk',
        statement: 'Öneri, paranın el değiştirdiği yerde.',
        body: 'Ücretli API ve Shopify eklentisi ile aynı seviye. Satış yeteneğini satın alırsınız — ham API üzerine arayüz kurmadan, mekân içi bir yüzey olarak.',
      },
      {
        id: 'experience',
        kicker: 'Misafir',
        statement: 'Sakin bir işaret. Doğru sonraki ürün.',
        body: 'Sabit kiosk veya tezgah tableti. Diğer entegrasyonlarla aynı öneri uçları. Kio’nun yardım tonu — genel bir sohbet karakteri değil.',
        points: [
          { title: 'Bağlam', text: 'Oturum ve sepet; embedding, retrieval ve ranking.' },
          { title: 'Devir', text: 'Checkout ve POS sizde. Kiosk katalog kaydı değildir.' },
        ],
      },
      {
        id: 'not-spot',
        kicker: 'Spot değil',
        statement: 'Spot mekânı işletir. Kiosk daha akıllı satar.',
        body: 'Spot menü ve sadakattir — köprü. Kiosk, motorun fiziksel satış noktasıdır. İkisi de konaklamada durabilir. Aynı ürün değildir.',
      },
      {
        id: 'where',
        kicker: 'Planlanan adres',
        statement: 'kiosk.kiosos.com',
        body: 'Çekirdek API’den sonra, diğer doğrudan motor yüzeyleriyle birlikte.',
      },
    ],
    ctas: [
      { label: 'Kiosos Engine', route: 'product' },
      { label: 'Kiosos Spot', route: 'spot' },
      { label: 'Bize yazın', route: 'contact' },
    ],
  },
  about: {
    title: 'Hakkımızda',
    description:
      'Kiosos: Kio, smart operational system — upsell ve cross-sell ile satışa yardım eden vektörel satış motoru ve mekân ürünleri.',
    heading: 'Hakkımızda',
    tagline: 'Kio. Smart operational system.',
    sections: [
      {
        id: 'name',
        kicker: 'İsim',
        statement: 'Yardım, yazımın içinde.',
        body: 'Kiosos, Kio artı smart operational system. Sondaki SOS yardım sinyalidir — satış zorlaşınca yanınızda olmak, boş bir panel daha değil.',
      },
      {
        id: 'estate',
        kicker: 'Yapı',
        statement: 'Bir motor. Onu taşıyan yüzeyler.',
        body: 'Kiosos Engine katalog ile ticaret arasındadır. Spot yolu finanse eder. Kiosk ve platform eklentileri aynı öneriyi alışverişin olduğu yere koyar.',
        points: [
          { title: 'Engine', text: 'Vektörel satış API’si. Upsell ve cross-sell.' },
          { title: 'Spot', text: 'QR menü ve sadakat. Aylık SaaS.' },
          { title: 'Kiosk', text: 'Mekânda motor. Shopify eklentisi ile aynı fikir.' },
        ],
      },
      {
        id: 'kio',
        kicker: 'İşaret',
        statement: 'Kio ile tanışın.',
        body: 'Siyah vektör smiley: göz kırpma, açık göz, yarım daire gülümseme. Yardımcı satışın yüzü — sohbet karakteri değil.',
      },
    ],
    ctas: [
      { label: 'Misyon', route: 'mission' },
      { label: 'İletişim', route: 'contact' },
    ],
  },
  mission: {
    title: 'Misyon',
    description:
      'Kiosos misyonu satışta yardımdır — önerileri işletmeci ve misafirin zaten bulunduğu yere taşıyan vektörel satış motoru.',
    heading: 'Misyon',
    tagline: 'Satışta yardım.',
    sections: [
      {
        id: 'why',
        kicker: 'Neden',
        statement: 'Zor olan katalog değil. Satış anıdır.',
        body: 'Çoğu işletmenin eksiği ürün değildir. Sıradaki üründür. Platform ekibi kurmadan öneride yarışabilmeniz için inşa ediyoruz.',
      },
      {
        id: 'how',
        kicker: 'Nasıl',
        statement: 'Tek öneri. Her yüzey.',
        body: 'Kataloğu embed edin. Satış için getirin. API ile ve gerçekten kurabileceğiniz yerlerde sunun.',
        points: [
          { title: 'Motor', text: 'Önerinin kaynağı.' },
          { title: 'Spot', text: 'Köprü geliri. Gerçek menüler. Gelecek bağlam.' },
          { title: 'Sınır', text: 'ERP, ödeme veya genel arama değil.' },
        ],
      },
      {
        id: 'tone',
        kicker: 'Ton',
        statement: 'Bir itme. Alarm değil.',
        body: 'SOS yardım demektir. Destekleyici, satış odaklı, panik yok. kiosos.com’un arkasındaki çizgi budur.',
      },
    ],
    ctas: [
      { label: 'Kiosos Engine', route: 'product' },
      { label: 'İletişim', route: 'contact' },
    ],
  },
  contact: {
    title: 'İletişim',
    description:
      'Satış motoru API’si, Kiosos Spot, Kiosos Kiosk veya ortaklık için contact@kiosos.com.',
    heading: 'İletişim',
    tagline: 'Ne sattığınızı söyleyin.',
    sections: [
      {
        id: 'reach',
        kicker: 'Başlangıç',
        statement: 'API, kafe veya kiosk — bir not yeter.',
        body: 'Entegratör, mekân sahibi, mağaza içi yüzey planlayan perakendeci. Her mesajı okuyoruz.',
      },
      {
        id: 'next',
        kicker: 'Neredeyiz',
        statement: 'Önce site. Sonra Spot. Sonra motor.',
        body: 'Erken konuşmalar pilotu ve ilk entegrasyonu şekillendirir — Shopify, özel stack veya mekân.',
      },
    ],
    ctas: [{ label: 'Motor', route: 'product' }],
    contactEmail: 'contact@kiosos.com',
  },
};

export const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    brand: 'Kiosos',
    headline: 'to help you sell.',
    intro: 'A vector sales-engine between your catalog and the moment of the sale.',
    exploreLabel: 'Products',
    cards: [
      {
        route: 'product',
        kicker: 'API',
        title: 'Engine',
        blurb: 'Upsell and cross-sell. Embeddings, retrieval, a ranked list.',
      },
      {
        route: 'spot',
        kicker: 'Venue',
        title: 'Spot',
        blurb: 'QR menu and loyalty. One monthly subscription.',
      },
      {
        route: 'kiosk',
        kicker: 'In the room',
        title: 'Kiosk',
        blurb: 'The engine at the counter. Where guests buy.',
      },
    ],
    missionLinkLabel: 'Mission',
  },
  tr: {
    brand: 'Kiosos',
    headline: 'satışta yardım.',
    intro: 'Katalog ile satış anı arasında vektörel bir satış motoru.',
    exploreLabel: 'Ürünler',
    cards: [
      {
        route: 'product',
        kicker: 'API',
        title: 'Engine',
        blurb: 'Upsell ve cross-sell. Embedding, retrieval, sıralı liste.',
      },
      {
        route: 'spot',
        kicker: 'Mekân',
        title: 'Spot',
        blurb: 'QR menü ve sadakat. Tek aylık abonelik.',
      },
      {
        route: 'kiosk',
        kicker: 'Odada',
        title: 'Kiosk',
        blurb: 'Tezgâhta motor. Misafirin satın aldığı yer.',
      },
    ],
    missionLinkLabel: 'Misyon',
  },
};

export function getRichPageCopy(locale: Locale, route: Exclude<RouteId, 'home'>): RichPageCopy {
  return locale === 'tr' ? trPages[route] : enPages[route];
}

export function getHomeCopy(locale: Locale): HomeCopy {
  return homeCopy[locale];
}
