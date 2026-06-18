import { useEffect, useState } from 'react';
import {
  Share2,
  BedDouble,
  Bath,
  Maximize,
  Car,
  Home,
  MapPin,
  Check,
  Phone,
  MessageCircle,
  CalendarCheck,
  Lightbulb,
  GraduationCap,
  Heart,
  Building2,
  ShoppingBag,
  UtensilsCrossed,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Footer from '../components/Footer';
import SolidNavbar from '../components/SolidNavbar';
import {
  TEL_HREF,
  TEL_DISPLAY,
  WHATSAPP_HREF,
  whatsappWithMessage,
  ADDRESS,
} from '../data/contact';
import { getProperty, getSimilar, LISTING_LABEL, PROPERTIES, type Property } from '../data/properties';


const AMENITIES = [
  'مسبح خاص',
  'مجلس رجال',
  'مجلس نساء',
  'مطبخ مجهز',
  'حديقة',
  'مصعد',
  'تكييف مركزي',
  'نظام أمني',
  'كاميرات مراقبة',
  'إنترنت فايبر',
  'مدخل خاص',
  'سطح خاص',
];

const NEARBY: { Icon: LucideIcon; label: string; items: { name: string; dist: string }[] }[] = [
  {
    Icon: GraduationCap,
    label: 'المدارس',
    items: [
      { name: 'مدارس الرياض الأهلية', dist: '1.2 كم' },
      { name: 'مدرسة الفيصل الدولية', dist: '2.0 كم' },
    ],
  },
  {
    Icon: Heart,
    label: 'المستشفيات',
    items: [
      { name: 'مستشفى الملك فيصل', dist: '3.5 كم' },
      { name: 'مستشفى السعودي الألماني', dist: '4.1 كم' },
    ],
  },
  {
    Icon: Building2,
    label: 'المساجد',
    items: [
      { name: 'جامع النرجس', dist: '300 م' },
      { name: 'مسجد الأمير', dist: '750 م' },
    ],
  },
  {
    Icon: ShoppingBag,
    label: 'المجمعات التجارية',
    items: [
      { name: 'الرياض بارك', dist: '2.8 كم' },
      { name: 'النخيل مول', dist: '5.5 كم' },
    ],
  },
  {
    Icon: UtensilsCrossed,
    label: 'المطاعم',
    items: [
      { name: 'مطعم نجد', dist: '600 م' },
      { name: 'مقهى ميلانو', dist: '900 م' },
    ],
  },
];

function getIdFromHash(): string {
  // Hash format: #property/<id>
  const hash = window.location.hash.replace(/^#/, '');
  return hash.startsWith('property/') ? hash.slice('property/'.length) : '';
}

function formatPrice(n: number) {
  return new Intl.NumberFormat('en-US').format(n);
}

export default function PropertyDetailPage() {
  const [id, setId] = useState<string>(() => getIdFromHash());

  useEffect(() => {
    const onHash = () => setId(getIdFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const property = getProperty(id) || PROPERTIES[0];

  useEffect(() => {
    const previous = document.title;
    document.title = `${property.title} — تاونكس`;
    return () => {
      document.title = previous;
    };
  }, [property.title]);

  const gallery = property.gallery || [property.image];
  const [active, setActive] = useState(0);
  // Reset active gallery image when navigating between properties
  useEffect(() => setActive(0), [property.id]);

  const quickFacts: { Icon: LucideIcon; label: string; value: string }[] = [
    { Icon: Maximize, label: 'المساحة', value: `${property.area} م²` },
    ...(property.rooms ? [{ Icon: BedDouble, label: 'غرف النوم', value: String(property.rooms) }] : []),
    ...(property.baths ? [{ Icon: Bath, label: 'دورات المياه', value: String(property.baths) }] : []),
    ...(property.parking ? [{ Icon: Car, label: 'الإضافات', value: property.parking }] : []),
    { Icon: Home, label: 'نوع العقار', value: property.type },
  ];

  const specs: { label: string; value: string }[] = [
    { label: 'سنة البناء', value: property.yearBuilt || '—' },
    { label: 'حالة العقار', value: LISTING_LABEL[property.listing] },
    { label: 'نوع العقار', value: property.type },
    { label: 'المساحة', value: `${property.area} م²` },
    ...(property.rooms ? [{ label: 'عدد الغرف', value: String(property.rooms) }] : []),
    ...(property.baths ? [{ label: 'دورات المياه', value: String(property.baths) }] : []),
    ...(property.usage ? [{ label: 'الاستخدام', value: property.usage }] : []),
    { label: 'المدينة', value: property.city },
  ];

  const similar = getSimilar(property.id, 3);

  const viewingMsg = `أرغب بطلب معاينة لـ ${property.title}`;
  const generalMsg = `استفسار عن ${property.title}`;

  return (
    <div dir="rtl" className="bg-cream font-cairo text-ink">
      <SolidNavbar active="offers" />

      <main className="mx-auto max-w-[1400px] px-5 py-10 md:px-10 md:py-12">
        {/* 1. Hero Gallery */}
        <section className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_320px]">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={gallery[active]}
              alt={`${property.title} — عرض رئيسي`}
              decoding="async"
              className="h-[320px] w-full object-cover md:h-[520px]"
            />
            <span className="absolute right-5 top-5 rounded-md bg-ink/85 px-3 py-1.5 text-xs font-bold text-gold backdrop-blur">
              {LISTING_LABEL[property.listing]}
            </span>
            <button
              type="button"
              className="absolute left-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-md ring-1 ring-black/5 hover:bg-gold/10"
              aria-label="مشاركة"
              onClick={() => {
                if (navigator.share) {
                  navigator
                    .share({
                      title: property.title,
                      url: window.location.href,
                    })
                    .catch(() => {});
                } else if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href).catch(() => {});
                }
              }}
            >
              <Share2 size={16} className="text-ink/80" />
            </button>
          </div>
          {gallery.length > 1 && (
            <div className="grid grid-cols-4 gap-2 md:grid-cols-1">
              {gallery.slice(0, 4).map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`overflow-hidden rounded-xl ring-2 transition ${
                    active === i ? 'ring-gold' : 'ring-transparent hover:ring-gold/50'
                  }`}
                >
                  <img
                    src={src}
                    alt={`صورة ${i + 1} من ${property.title}`}
                    loading="lazy"
                    decoding="async"
                    className="h-20 w-full object-cover md:h-[122px]"
                  />
                </button>
              ))}
            </div>
          )}
        </section>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px] lg:gap-12">
          <div className="space-y-10">
            {/* 2. Property Information */}
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-extrabold text-ink md:text-3xl">{property.title}</h1>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-ink/65">
                    <MapPin size={14} className="text-gold" />
                    <span>
                      {property.city} - {property.district}
                    </span>
                  </p>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-extrabold text-gold">
                    {formatPrice(property.price)} <span className="text-base font-semibold">ر.س</span>
                  </div>
                  {property.priceSuffix && (
                    <div className="mt-0.5 text-xs text-ink/55">{property.priceSuffix}</div>
                  )}
                  <span className="mt-2 inline-block rounded-md bg-gold/10 px-2.5 py-1 text-xs font-bold text-gold">
                    {LISTING_LABEL[property.listing]}
                  </span>
                </div>
              </div>
            </section>

            {/* 3. Quick Facts */}
            <section>
              <h2 className="mb-4 text-xl font-bold">معلومات سريعة</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                {quickFacts.map(({ Icon, label, value }) => (
                  <div
                    key={label}
                    className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-black/5"
                  >
                    <Icon size={22} className="mx-auto text-gold" strokeWidth={1.6} />
                    <div className="mt-2 text-base font-bold">{value}</div>
                    <div className="mt-0.5 text-[11px] text-ink/65">{label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Property Description */}
            <section>
              <h2 className="mb-4 text-xl font-bold">وصف العقار</h2>
              <div className="rounded-2xl bg-white p-6 leading-[2] text-ink/80 shadow-sm ring-1 ring-black/5 md:p-8">
                <p>
                  {property.title} — عقار مميز يقع في {property.city} - {property.district}, بمساحة {property.area}م² وبتشطيبات راقية تلبي ذوق المستثمرين والعملاء المهتمين بالعقارات ذات الجودة العالية.
                </p>
                <p className="mt-4">
                  تتميز المنطقة بقربها من المرافق الحيوية وسهولة الوصول للطرق السريعة والمراكز التجارية الكبرى، وتعد فرصة استثمارية مميزة بمواصفات مدروسة بعناية.
                </p>
              </div>
            </section>

            {/* 5. Features & Amenities */}
            <section>
              <h2 className="mb-4 text-xl font-bold">المميزات والخدمات</h2>
              <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:grid-cols-3 md:p-8 lg:grid-cols-4">
                {AMENITIES.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm text-ink/80">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Specifications */}
            <section>
              <h2 className="mb-4 text-xl font-bold">المواصفات التفصيلية</h2>
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                <dl className="grid grid-cols-1 divide-y divide-black/5 sm:grid-cols-2 sm:divide-y-0">
                  {specs.map((s, i) => (
                    <div
                      key={s.label}
                      className={`flex items-center justify-between gap-4 px-6 py-4 ${
                        i % 2 === 0 ? 'sm:bg-cream/40' : ''
                      }`}
                    >
                      <dt className="text-sm text-ink/65">{s.label}</dt>
                      <dd className="text-sm font-bold text-ink">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>

            {/* 7. Location & Map */}
            <section>
              <h2 className="mb-4 text-xl font-bold">الموقع على الخريطة</h2>
              <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
                <iframe
                  title={`موقع ${property.title}`}
                  src="https://www.google.com/maps?q=24.8247,46.6280&z=14&output=embed"
                  className="block h-[360px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-ink/65">
                <MapPin size={14} className="text-gold" />
                <span>
                  {property.district}، {property.city}
                </span>
              </p>
            </section>

            {/* 8. Nearby Places */}
            <section>
              <h2 className="mb-4 text-xl font-bold">الأماكن القريبة</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {NEARBY.map(({ Icon, label, items }) => (
                  <div
                    key={label}
                    className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <Icon size={18} strokeWidth={1.6} />
                      </span>
                      <h3 className="text-base font-bold">{label}</h3>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm">
                      {items.map((it) => (
                        <li key={it.name} className="flex items-center justify-between gap-3">
                          <span className="text-ink/80">{it.name}</span>
                          <span className="text-xs text-gold">{it.dist}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* 10. Company Contact sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-2xl bg-white p-6 text-center shadow-md ring-1 ring-black/5">
              <div className="text-3xl font-extrabold tracking-wide">
                TOWN<span className="text-gold">X</span>
              </div>
              <div className="mt-1 text-[12px] text-ink/65">
                تطوير . تصميم . تسويق . إدارة أملاك
              </div>

              <div className="my-5 h-px bg-black/5" />

              <p className="text-sm text-ink/70">
                لمعرفة المزيد من التفاصيل أو طلب زيارة، تواصل مع فريق تاونكس مباشرة.
              </p>

              <div className="mt-5 space-y-2.5">
                <a
                  href={TEL_HREF}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-bold text-white transition hover:bg-gold-light"
                >
                  <Phone size={16} className="rotate-[12deg]" />
                  <span>اتصل بنا</span>
                </a>
                <a
                  href={whatsappWithMessage(generalMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-bold text-white transition hover:brightness-110"
                >
                  <MessageCircle size={16} />
                  <span>واتساب</span>
                </a>
                <a
                  href={whatsappWithMessage(viewingMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-ink/70 py-3 text-sm font-bold text-ink transition hover:bg-ink/5"
                >
                  <CalendarCheck size={16} />
                  <span>طلب معاينة</span>
                </a>
                <a
                  href={whatsappWithMessage('أرغب بطلب استشارة مجانية')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-gold py-3 text-sm font-bold text-gold transition hover:bg-gold/10"
                >
                  <Lightbulb size={16} />
                  <span>طلب استشارة مجانية</span>
                </a>
              </div>

              <div className="my-5 h-px bg-black/5" />

              <ul className="space-y-2 text-right text-sm text-ink/75">
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-gold" />
                  <a href={TEL_HREF} dir="ltr" className="hover:text-gold">
                    {TEL_DISPLAY}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={14} className="text-gold" />
                  <span>{ADDRESS}</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/* 9. Similar Properties */}
        {similar.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-6 text-xl font-bold">عقارات مشابهة</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((p: Property) => (
                <a
                  key={p.id}
                  href={`#property/${p.id}`}
                  aria-label={`عرض ${p.title} في ${p.city}`}
                  className="block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.title} — ${p.city}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <p className="mt-1 inline-flex items-center gap-1 text-xs text-ink/65">
                      <MapPin size={12} className="text-gold" />
                      {p.city} - {p.district}
                    </p>
                    <div className="mt-3 text-lg font-extrabold text-gold">
                      {formatPrice(p.price)} <span className="text-sm">ر.س</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* 11. Final CTA Banner */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=2400&q=80"
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative z-10 mx-auto max-w-[1100px] px-5 py-20 text-center md:py-24">
          <h2 className="text-3xl font-extrabold text-white md:text-[36px]">
            هل أعجبك هذا العقار؟
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80 md:text-base">
            تواصل معنا الآن للحصول على التفاصيل الكاملة أو حجز زيارة ميدانية.
          </p>
          <a
            href={whatsappWithMessage(generalMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg transition hover:bg-gold-light"
          >
            <Phone size={16} className="rotate-[12deg]" />
            <span>تواصل معنا الآن</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
