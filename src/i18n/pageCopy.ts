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
  statementHref?: string;
  body?: string;
  points?: Point[];
};

export type PageCta = {
  label: string;
  route: RouteId;
};

export type ContactLink = {
  label: string;
  href: string;
};

export type RichPageCopy = {
  title: string;
  description: string;
  heading: string;
  tagline: string;
  sections: ContentSection[];
  ctas?: PageCta[];
  contactLinks?: ContactLink[];
};

export type HomeCopy = {
  description: string;
  headlineBefore: string;
  headlineAccent: string;
  headlineAfter: string;
  intro: string;
  exploreLabel: string;
  cards: { route: RouteId; kicker: string; title: string; blurb: string }[];
  missionLinkLabel: string;
};

const contactLinks: ContactLink[] = [
  { label: 'contact@osware.org', href: 'mailto:contact@osware.org' },
  { label: 'contact@kiosos.com', href: 'mailto:contact@kiosos.com' },
  { label: 'osware.org', href: 'https://osware.org' },
  { label: '+90 551 469 5665', href: 'tel:+905514695665' },
];

const enPages: Record<Exclude<RouteId, 'home'>, RichPageCopy> = {
  product: {
    title: 'Sales help',
    description:
      'Sales help suggests the next product while someone is buying — a stronger offer, or something that goes with what they already chose.',
    heading: 'Sales help',
    tagline: 'The next product. At the right moment.',
    sections: [
      {
        id: 'problem',
        kicker: 'The gap',
        statement: 'You have the products. The next sale is harder.',
        body: 'Big shops spend years on the extra item in the basket. We do that job for you — between what you sell and the shop you already run.',
      },
      {
        id: 'what',
        kicker: 'How it works',
        statement: 'See the moment. Suggest the product.',
        body: 'Not a chat box, and not a web search. We look at what the customer is doing and offer the product that fits.',
        points: [
          { title: 'What we read', text: 'Name, type, description, price, and the details you already keep.' },
          { title: 'What you get', text: 'A short list, in the order most likely to sell.' },
          { title: 'The moment', text: 'The basket, or one product in hand, turned into a suggestion.' },
        ],
      },
      {
        id: 'intents',
        kicker: 'What you can ask',
        statement: 'Ask for the sale. Get a short list.',
        points: [
          { title: 'Basket', text: 'What they already chose — a few suggestions before they pay.' },
          { title: 'A better offer', text: 'One product in hand — a stronger choice, plus things that go with it.' },
        ],
      },
      {
        id: 'boundary',
        kicker: 'The line',
        statement: 'We help you sell what you already have.',
        body: 'You keep the record of products and orders. We only help with the suggestion.',
        points: [
          { title: 'We do', text: 'Pick the next product to offer.' },
          { title: 'We don’t', text: 'Run your books, replace your shop, or search the open web.' },
        ],
      },
    ],
    ctas: [
      { label: 'Spot', route: 'spot' },
      { label: 'Kiosk', route: 'kiosk' },
      { label: 'Talk to us', route: 'contact' },
    ],
  },
  spot: {
    title: 'Spot',
    description:
      'Spot is a QR menu and loyalty, together, for cafés and similar places. Customers order at spot.kiosos.com.',
    heading: 'Spot',
    tagline: 'Scan. Order. Come back.',
    sections: [
      {
        id: 'bundle',
        kicker: 'One product',
        statement: 'Menu and loyalty. Same place. Same customer.',
        body: 'One monthly plan for cafés first. Not a menu app plus a stamp app.',
        points: [
          { title: 'QR menu', text: 'Customers scan, look through the products, and order from the table.' },
          { title: 'Loyalty', text: 'Stamps, rewards, and return visits, tied to the same place.' },
        ],
      },
      {
        id: 'saas',
        kicker: 'How you buy it',
        statement: 'A monthly plan. Clear from day one.',
        body: 'You pay each month, with room to grow. The price comes with the product — a subscription, not a one-off project.',
      },
      {
        id: 'bridge',
        kicker: 'Why it exists',
        statement: 'A real place today. Smarter selling later.',
        body: 'Spot pays its way while sales help grows up. Menus, orders, and loyalty are set up so that help can use them later.',
      },
      {
        id: 'where',
        kicker: 'Where it lives',
        statement: 'spot.kiosos.com',
        statementHref: 'https://spot.kiosos.com',
        body: 'The story stays on this site. Owners and customers use Spot on its own address.',
      },
    ],
    ctas: [
      { label: 'Sales help', route: 'product' },
      { label: 'Talk to us', route: 'contact' },
    ],
  },
  kiosk: {
    title: 'Kiosk',
    description:
      'Kiosk puts sales help in the venue — a self-serve or counter screen that suggests the next product where customers pay.',
    heading: 'Kiosk',
    tagline: 'Help, where they pay.',
    sections: [
      {
        id: 'purpose',
        kicker: 'Why a kiosk',
        statement: 'The suggestion, where money changes hands.',
        body: 'The same help as in an online shop, on a screen in the room. You get the selling, without building the screen yourself.',
      },
      {
        id: 'experience',
        kicker: 'What customers meet',
        statement: 'A quiet nudge. The right next product.',
        body: 'A fixed screen or a tablet at the counter. The same suggestions as everywhere else. Helpful — not a chat character.',
        points: [
          { title: 'The moment', text: 'What they have chosen so far shapes the suggestion.' },
          { title: 'Handoff', text: 'Paying stays with you. Kiosk is not your product list of record.' },
        ],
      },
      {
        id: 'not-spot',
        kicker: 'Not Spot',
        statement: 'Spot runs the place. Kiosk helps the sale.',
        body: 'Spot is the menu and the loyalty. Kiosk is the suggestion at the counter. Both can live in a café. They are not the same product.',
      },
      {
        id: 'where',
        kicker: 'Planned home',
        statement: 'kiosk.kiosos.com',
        body: 'After sales help itself is ready.',
      },
    ],
    ctas: [
      { label: 'Sales help', route: 'product' },
      { label: 'Spot', route: 'spot' },
      { label: 'Talk to us', route: 'contact' },
    ],
  },
  about: {
    title: 'About',
    description:
      'Kiosos is Kio plus a call for help — sales help, a venue menu, and a counter screen that help you sell.',
    heading: 'About',
    tagline: 'Kio. Here when the sale is hard.',
    sections: [
      {
        id: 'name',
        kicker: 'The name',
        statement: 'Help is in the spelling.',
        body: 'Kiosos is Kio, and SOS. SOS means help — show up when selling gets hard, not another empty screen.',
      },
      {
        id: 'estate',
        kicker: 'What we make',
        statement: 'One kind of help. A few places it lives.',
        body: 'Sales help sits between your products and the sale. Spot keeps a place running. Kiosk and shop add-ons put the same suggestion where people already buy.',
        points: [
          { title: 'Sales help', text: 'The next product, at the right moment.' },
          { title: 'Spot', text: 'QR menu and loyalty. A monthly plan.' },
          { title: 'Kiosk', text: 'In the room. The same idea as a shop add-on.' },
        ],
      },
      {
        id: 'kio',
        kicker: 'The mark',
        statement: 'Meet Kio.',
        body: 'A black smiley: one eye winks, one stays open, a half-circle smile. The face of helpful selling — not a chat character.',
      },
    ],
    ctas: [
      { label: 'Mission', route: 'mission' },
      { label: 'Contact', route: 'contact' },
    ],
  },
  mission: {
    title: 'Mission',
    description: 'The mission is to help you sell — the next product, offered where people already are.',
    heading: 'Mission',
    tagline: 'To help you sell.',
    sections: [
      {
        id: 'why',
        kicker: 'Why',
        statement: 'The products are easy. The moment is not.',
        body: 'Most businesses are not short of products. They miss the next one. We build so you can offer it without a large tech team.',
      },
      {
        id: 'how',
        kicker: 'How',
        statement: 'One suggestion. Every place you sell.',
        body: 'Learn the products. Watch the sale. Hand the suggestion to the shop, the café, or the counter.',
        points: [
          { title: 'Sales help', text: 'Where the suggestion comes from.' },
          { title: 'Spot', text: 'Income now. Real menus. Context for later.' },
          { title: 'The line', text: 'Not your accounts, your payments, or a general search.' },
        ],
      },
      {
        id: 'tone',
        kicker: 'Tone',
        statement: 'A nudge. Not an alarm.',
        body: 'SOS means help. Supportive, about the sale, never panic.',
      },
    ],
    ctas: [
      { label: 'Sales help', route: 'product' },
      { label: 'Get in touch', route: 'contact' },
    ],
  },
  contact: {
    title: 'Contact',
    description: 'Write to us about sales help, Spot, Kiosk, or working together.',
    heading: 'Contact',
    tagline: 'Tell us what you sell.',
    sections: [
      {
        id: 'reach',
        kicker: 'Start here',
        statement: 'A shop, a café, or a counter — one note is enough.',
        body: 'People who run a shop, a venue, or a screen where customers buy. We read every message.',
      },
      {
        id: 'next',
        kicker: 'Where we are',
        statement: 'This site first. Then Spot. Then the rest.',
        body: 'Early notes shape what we try first — an online shop, a custom setup, or the venue itself.',
      },
    ],
    ctas: [{ label: 'Sales help', route: 'product' }],
    contactLinks,
  },
};

const trPages: Record<Exclude<RouteId, 'home'>, RichPageCopy> = {
  product: {
    title: 'Satış yardımı',
    description:
      'Satış yardımı, birisi alırken sıradaki ürünü önerir — daha iyi bir teklif, ya da seçtiğiyle giden bir ürün.',
    heading: 'Satış yardımı',
    tagline: 'Doğru ürün. Doğru an.',
    sections: [
      {
        id: 'problem',
        kicker: 'Boşluk',
        statement: 'Ürünleriniz var. Zor olan sıradaki satış.',
        body: 'Büyük mağazalar sepete bir ürün daha koymak için yıllarını verir. Biz o işi sizin için yaparız — sattıklarınız ile kullandığınız satış yeri arasında.',
      },
      {
        id: 'what',
        kicker: 'Nasıl',
        statement: 'Anı gör. Ürünü öner.',
        body: 'Sohbet kutusu değil. Web araması değil. Müşterinin ne yaptığına bakar, uyan ürünü sunarız.',
        points: [
          { title: 'Ne okuruz', text: 'Ad, tür, açıklama, fiyat ve zaten tuttuğunuz bilgiler.' },
          { title: 'Ne alırsınız', text: 'Satılma ihtimaline göre sıralanmış kısa bir liste.' },
          { title: 'An', text: 'Sepet ya da eldeki tek ürün, bir öneriye döner.' },
        ],
      },
      {
        id: 'intents',
        kicker: 'Ne sorabilirsiniz',
        statement: 'Satışı sorun. Kısa listeyi alın.',
        points: [
          { title: 'Sepet', text: 'Seçilmiş ürünler — ödemeden önce birkaç öneri.' },
          { title: 'Daha iyi teklif', text: 'Eldeki ürün — daha güçlü bir seçenek ve onunla gidenler.' },
        ],
      },
      {
        id: 'boundary',
        kicker: 'Sınır',
        statement: 'Elinizdekini satmanıza yardım ederiz.',
        body: 'Ürün ve sipariş kaydı sizde kalır. Biz yalnızca öneriye yardım ederiz.',
        points: [
          { title: 'Yaptığımız', text: 'Sunulacak sıradaki ürünü seçmek.' },
          { title: 'Yapmadığımız', text: 'Hesaplarınız, mağazanızın kendisi ya da genel web araması.' },
        ],
      },
    ],
    ctas: [
      { label: 'Spot', route: 'spot' },
      { label: 'Kiosk', route: 'kiosk' },
      { label: 'Bize yazın', route: 'contact' },
    ],
  },
  spot: {
    title: 'Spot',
    description:
      'Spot, kafeler ve benzeri mekânlar için QR menü ile sadakati bir arada sunar. Müşteriler spot.kiosos.com adresinden sipariş verir.',
    heading: 'Spot',
    tagline: 'Tara. Sipariş ver. Geri gel.',
    sections: [
      {
        id: 'bundle',
        kicker: 'Tek ürün',
        statement: 'Menü ve sadakat. Aynı yer. Aynı müşteri.',
        body: 'Önce kafeler için tek aylık plan. Ayrı bir menü uygulaması, üstüne ayrı bir damga uygulaması değil.',
        points: [
          { title: 'QR menü', text: 'Müşteri tarar, ürünlere bakar, masadan sipariş verir.' },
          { title: 'Sadakat', text: 'Aynı yere bağlı damga, ödül ve tekrar geliş.' },
        ],
      },
      {
        id: 'saas',
        kicker: 'Nasıl alınır',
        statement: 'Aylık plan. İlk günden net.',
        body: 'Her ay ödersiniz; mekân büyüdükçe yer açılır. Fiyat ürünle birlikte gelir — tek seferlik iş değil, abonelik.',
      },
      {
        id: 'bridge',
        kicker: 'Neden var',
        statement: 'Bugün gerçek bir mekân. Yarın daha akıllı satış.',
        body: 'Satış yardımı olgunlaşırken Spot kendi masrafını çıkarır. Menü, sipariş ve sadakat, o yardımın sonradan kullanabileceği şekilde durur.',
      },
      {
        id: 'where',
        kicker: 'Adres',
        statement: 'spot.kiosos.com',
        statementHref: 'https://spot.kiosos.com',
        body: 'Hikâye bu sitede kalır. İşleten ve müşteri Spot’u kendi adresinde kullanır.',
      },
    ],
    ctas: [
      { label: 'Satış yardımı', route: 'product' },
      { label: 'Bize yazın', route: 'contact' },
    ],
  },
  kiosk: {
    title: 'Kiosk',
    description:
      'Kiosk, satış yardımını mekâna taşır — müşterinin ödediği yerde sıradaki ürünü öneren self-servis ya da tezgâh ekranı.',
    heading: 'Kiosk',
    tagline: 'Yardım, ödemenin olduğu yerde.',
    sections: [
      {
        id: 'purpose',
        kicker: 'Neden kiosk',
        statement: 'Öneri, paranın el değiştirdiği yerde.',
        body: 'İnternetteki satış yardımının aynısı, odadaki bir ekranda. Ekranı kendiniz kurmadan satışı alırsınız.',
      },
      {
        id: 'experience',
        kicker: 'Müşteri',
        statement: 'Sakin bir işaret. Doğru sonraki ürün.',
        body: 'Sabit ekran ya da tezgâh tableti. Her yerdekiyle aynı öneriler. Yardımcı — sohbet karakteri değil.',
        points: [
          { title: 'An', text: 'O ana kadar seçtikleri, öneriyi belirler.' },
          { title: 'Devir', text: 'Ödeme sizde kalır. Kiosk, ürün listenizin kaydı değildir.' },
        ],
      },
      {
        id: 'not-spot',
        kicker: 'Spot değil',
        statement: 'Spot mekânı işletir. Kiosk satışa yardım eder.',
        body: 'Spot menü ve sadakattir. Kiosk tezgâhtaki öneridir. İkisi de bir kafede durabilir. Aynı ürün değildir.',
      },
      {
        id: 'where',
        kicker: 'Planlanan adres',
        statement: 'kiosk.kiosos.com',
        body: 'Satış yardımının kendisi hazır olduktan sonra.',
      },
    ],
    ctas: [
      { label: 'Satış yardımı', route: 'product' },
      { label: 'Spot', route: 'spot' },
      { label: 'Bize yazın', route: 'contact' },
    ],
  },
  about: {
    title: 'Hakkımızda',
    description: 'Kiosos, Kio ve bir yardım çağrısıdır — satış yardımı, mekân menüsü ve tezgâh ekranı.',
    heading: 'Hakkımızda',
    tagline: 'Kio. Satış zorlaşınca burada.',
    sections: [
      {
        id: 'name',
        kicker: 'İsim',
        statement: 'Yardım, yazımın içinde.',
        body: 'Kiosos, Kio ve SOS’tur. SOS yardım demektir — satış zorlaşınca yanınızda olmak, boş bir ekran daha değil.',
      },
      {
        id: 'estate',
        kicker: 'Ne yapıyoruz',
        statement: 'Tek tür yardım. Birkaç yerde.',
        body: 'Satış yardımı, ürünleriniz ile satışın arasında durur. Spot bir mekânı ayakta tutar. Kiosk ve mağaza eklentileri aynı öneriyi insanların zaten alışveriş yaptığı yere koyar.',
        points: [
          { title: 'Satış yardımı', text: 'Doğru anda sıradaki ürün.' },
          { title: 'Spot', text: 'QR menü ve sadakat. Aylık plan.' },
          { title: 'Kiosk', text: 'Odada. Bir mağaza eklentisiyle aynı fikir.' },
        ],
      },
      {
        id: 'kio',
        kicker: 'İşaret',
        statement: 'Kio ile tanışın.',
        body: 'Siyah bir gülümseme: bir göz kırpar, biri açık kalır, yarım daire bir tebessüm. Yardımcı satışın yüzü — sohbet karakteri değil.',
      },
    ],
    ctas: [
      { label: 'Misyon', route: 'mission' },
      { label: 'İletişim', route: 'contact' },
    ],
  },
  mission: {
    title: 'Misyon',
    description: 'Misyon, satışta yardımdır — sıradaki ürün, insanların zaten olduğu yerde.',
    heading: 'Misyon',
    tagline: 'Satışta yardım.',
    sections: [
      {
        id: 'why',
        kicker: 'Neden',
        statement: 'Ürünler kolay. Zor olan andır.',
        body: 'Çoğu işletmenin eksiği ürün değildir. Sıradaki üründür. Büyük bir teknik ekip kurmadan onu sunabilmeniz için yapıyoruz.',
      },
      {
        id: 'how',
        kicker: 'Nasıl',
        statement: 'Tek öneri. Sattığınız her yer.',
        body: 'Ürünleri öğreniriz. Satışa bakarız. Öneriyi mağazaya, kafeye ya da tezgâha veririz.',
        points: [
          { title: 'Satış yardımı', text: 'Önerinin geldiği yer.' },
          { title: 'Spot', text: 'Bugünkü gelir. Gerçek menüler. Sonrası için bağlam.' },
          { title: 'Sınır', text: 'Hesaplarınız, ödemeleriniz ya da genel bir arama değil.' },
        ],
      },
      {
        id: 'tone',
        kicker: 'Ton',
        statement: 'Bir itme. Alarm değil.',
        body: 'SOS yardım demektir. Destekleyici, satışa dair, panik yok.',
      },
    ],
    ctas: [
      { label: 'Satış yardımı', route: 'product' },
      { label: 'İletişim', route: 'contact' },
    ],
  },
  contact: {
    title: 'İletişim',
    description: 'Satış yardımı, Spot, Kiosk ya da birlikte çalışmak için bize yazın.',
    heading: 'İletişim',
    tagline: 'Ne sattığınızı söyleyin.',
    sections: [
      {
        id: 'reach',
        kicker: 'Başlangıç',
        statement: 'Mağaza, kafe ya da tezgâh — bir not yeter.',
        body: 'Dükkânı, mekânı ya da müşterinin alışveriş ettiği ekranı işletenler. Her mesajı okuruz.',
      },
      {
        id: 'next',
        kicker: 'Neredeyiz',
        statement: 'Önce bu site. Sonra Spot. Sonra gerisi.',
        body: 'Erken notlar, ilk denemeyi şekillendirir — internet mağazası, özel bir kurulum ya da mekânın kendisi.',
      },
    ],
    ctas: [{ label: 'Satış yardımı', route: 'product' }],
    contactLinks,
  },
};

export const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    description:
      'Kiosos helps you sell the next product — a suggestion while someone is buying, a QR menu for venues, and a counter screen.',
    headlineBefore: 'to ',
    headlineAccent: 'help',
    headlineAfter: ' you sell.',
    intro: 'A simple way to suggest the next product while someone is buying.',
    exploreLabel: 'Products',
    cards: [
      {
        route: 'product',
        kicker: 'Shops',
        title: 'Sales help',
        blurb: 'Suggest a better next product, or one that goes with what they already chose.',
      },
      {
        route: 'spot',
        kicker: 'Venues',
        title: 'Spot',
        blurb: 'QR menu and loyalty. One monthly plan.',
      },
      {
        route: 'kiosk',
        kicker: 'At the counter',
        title: 'Kiosk',
        blurb: 'The same help, where the customer is paying.',
      },
    ],
    missionLinkLabel: 'Mission',
  },
  tr: {
    description:
      'Kiosos satışta yardım eder — alışveriş sırasında öneri, mekânlar için QR menü ve tezgâh ekranı.',
    headlineBefore: 'satışta ',
    headlineAccent: 'yardım',
    headlineAfter: '.',
    intro: 'Birisi alırken, sıradaki ürünü önermenin sade yolu.',
    exploreLabel: 'Ürünler',
    cards: [
      {
        route: 'product',
        kicker: 'Mağazalar',
        title: 'Satış yardımı',
        blurb: 'Daha uygun bir sonraki ürünü, ya da elindekine uyan bir ürünü önerir.',
      },
      {
        route: 'spot',
        kicker: 'Mekânlar',
        title: 'Spot',
        blurb: 'QR menü ve sadakat. Tek aylık plan.',
      },
      {
        route: 'kiosk',
        kicker: 'Tezgâhta',
        title: 'Kiosk',
        blurb: 'Aynı yardım, müşterinin ödeme yaptığı yerde.',
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
