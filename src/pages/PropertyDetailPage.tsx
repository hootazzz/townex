import { useState } from 'react';
import {
  ArrowRight,
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

const GALLERY = [
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
];

const QUICK_FACTS: { Icon: LucideIcon; label: string; value: string }[] = [
  { Icon: Maximize, label: 'المساحة', value: '450 م²' },
  { Icon: BedDouble, label: 'غرف النوم', value: '7' },
  { Icon: Bath, label: 'دورات المياه', value: '7' },
  { Icon: Car, label: 'مواقف السيارات', value: '3' },
  { Icon: Home, label: 'نوع العقار', value: 'فيلا' },
];

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

const SPECS: { label: string; value: string }[] = [
  { label: 'سنة البناء', value: '2024' },
  { label: 'حالة العقار', value: 'جاهز للسكن' },
  { label: 'عدد الأدوار', value: 'دورين + ملحق' },
  { label: 'الواجهة', value: 'شمالية' },
  { label: 'عرض الشارع', value: '20 م' },
  { label: 'نظام الكهرباء', value: 'منفصل' },
  { label: 'نظام التدفئة', value: 'مركزي' },
  { label: 'صك العقار', value: 'إلكتروني' },
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

const SIMILAR = [
  {
    title: 'فيلا حديثة',
    location: 'الرياض - الياسمين',
    price: '2,650,000',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'دوبلكس فاخر',
    location: 'الرياض - حطين',
    price: '3,100,000',
    image:
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'فيلا عصرية',
    location: 'الرياض - الملقا',
    price: '2,950,000',
    image:
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=900&q=80',
  },
];

export default function PropertyDetailPage() {
  const [active, setActive] = useState(0);

  return (
    <div dir="rtl" className="bg-cream font-cairo text-ink">
      {/* Top bar */}
      <header className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
          <a href="#" className="text-2xl font-extrabold tracking-wide text-ink">
            TOWN<span className="text-gold">X</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-semibold text-ink/70 hover:text-gold"
          >
            <span>العودة للعروض</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-5 py-10 md:px-10 md:py-12">
        {/* 1. Hero Gallery */}
        <section className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_320px]">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={GALLERY[active]}
              alt="عرض رئيسي"
              className="h-[320px] w-full object-cover md:h-[520px]"
            />
            <span className="absolute right-5 top-5 rounded-md bg-ink/85 px-3 py-1.5 text-xs font-bold text-gold backdrop-blur">
              للبيع
            </span>
            <button
              type="button"
              className="absolute left-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-md ring-1 ring-black/5 hover:bg-gold/10"
              aria-label="مشاركة"
            >
              <Share2 size={16} className="text-ink/80" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2 md:grid-cols-1">
            {GALLERY.slice(0, 4).map((src, i) => (
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
                  alt={`صورة ${i + 1}`}
                  className="h-20 w-full object-cover md:h-[122px]"
                />
              </button>
            ))}
          </div>
        </section>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px] lg:gap-12">
          <div className="space-y-10">
            {/* 2. Property Information */}
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-extrabold text-ink md:text-3xl">فيلا فاخرة في النرجس</h1>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-ink/65">
                    <MapPin size={14} className="text-gold" />
                    <span>الرياض - حي النرجس</span>
                  </p>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-extrabold text-gold">
                    2,850,000 <span className="text-base font-semibold">ر.س</span>
                  </div>
                  <span className="mt-1 inline-block rounded-md bg-gold/10 px-2.5 py-1 text-xs font-bold text-gold">
                    جاهز للسكن
                  </span>
                </div>
              </div>
            </section>

            {/* 3. Quick Facts */}
            <section>
              <h2 className="mb-4 text-xl font-bold">معلومات سريعة</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                {QUICK_FACTS.map(({ Icon, label, value }) => (
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
                  فيلا فاخرة بتشطيبات راقية في أحد أرقى أحياء شمال الرياض، تتميز بتصميم معماري عصري ومساحات داخلية واسعة تلبي احتياجات العائلة الكبيرة.
                  الفيلا مكونة من دورين وملحق علوي، مع مدخلين منفصلين للرجال والنساء وحديقة خاصة ومسبح.
                </p>
                <p className="mt-4">
                  تقع الفيلا على شارع رئيسي بعرض 20 متراً، وبالقرب من المدارس والمستشفيات والمساجد، مع سهولة الوصول للطرق السريعة والمراكز التجارية الكبرى.
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

            {/* 6. Property Specifications */}
            <section>
              <h2 className="mb-4 text-xl font-bold">المواصفات التفصيلية</h2>
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                <dl className="grid grid-cols-1 divide-y divide-black/5 sm:grid-cols-2 sm:divide-y-0">
                  {SPECS.map((s, i) => (
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
                  title="موقع العقار"
                  src="https://www.google.com/maps?q=24.8247,46.6280&z=14&output=embed"
                  className="block h-[360px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-ink/65">
                <MapPin size={14} className="text-gold" />
                <span>حي النرجس، شمال الرياض</span>
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

          {/* Sidebar: 10. Company Contact (no agent) */}
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
                  href="tel:+966500000000"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-bold text-white transition hover:bg-gold-light"
                >
                  <Phone size={16} className="rotate-[12deg]" />
                  <span>اتصل بنا</span>
                </a>
                <a
                  href="https://wa.me/966500000000"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-bold text-white transition hover:brightness-110"
                >
                  <MessageCircle size={16} />
                  <span>واتساب</span>
                </a>
                <a
                  href="#viewing"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-ink/70 py-3 text-sm font-bold text-ink transition hover:bg-ink/5"
                >
                  <CalendarCheck size={16} />
                  <span>طلب معاينة</span>
                </a>
                <a
                  href="#consult"
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
                  <span dir="ltr">+966 50 000 0000</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={14} className="text-gold" />
                  <span>الرياض، المملكة العربية السعودية</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/* 9. Similar Properties */}
        <section className="mt-14">
          <h2 className="mb-6 text-xl font-bold">عقارات مشابهة</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SIMILAR.map((p) => (
              <a
                key={p.title}
                href="#"
                className="block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="mt-1 inline-flex items-center gap-1 text-xs text-ink/65">
                    <MapPin size={12} className="text-gold" />
                    {p.location}
                  </p>
                  <div className="mt-3 text-lg font-extrabold text-gold">
                    {p.price} <span className="text-sm">ر.س</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* 11. Final CTA Banner */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=2400&q=80"
          alt=""
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
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg transition hover:bg-gold-light"
          >
            <Phone size={16} className="rotate-[12deg]" />
            <span>تواصل معنا الآن</span>
          </a>
        </div>
      </section>
    </div>
  );
}
