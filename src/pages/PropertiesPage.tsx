import { useEffect, useMemo, useState } from 'react';
import {
  Heart,
  MapPin,
  Maximize,
  BedDouble,
  Bath,
  Car,
  Building2,
  Search,
  SlidersHorizontal,
  ChevronDown,
  Phone,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SolidNavbar from '../components/SolidNavbar';
import Footer from '../components/Footer';

const TEL = '+966111234567';
const SKYLINE_IMG =
  'https://images.unsplash.com/photo-1604595568318-cea99fef25c4?auto=format&fit=crop&w=2400&q=80';
const HERO_IMG =
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80';

type Listing = 'sale' | 'rent' | 'invest';
type PType = 'فيلا' | 'شقة' | 'أرض' | 'مكتب' | 'عمارة' | 'تاون هاوس';

type Property = {
  id: string;
  title: string;
  city: string;
  district: string;
  listing: Listing;
  type: PType;
  area: number;
  price: number;
  priceSuffix?: string; // e.g. '/ سنوياً'
  rooms?: number;
  baths?: number;
  parking?: string; // parking detail / floors / etc.
  usage?: string;
  image: string;
};

const LISTING_LABEL: Record<Listing, string> = {
  sale: 'للبيع',
  rent: 'للإيجار',
  invest: 'استثمار',
};

const PROPERTIES: Property[] = [
  {
    id: 'villa-narjis-01',
    title: 'فيلا فاخرة في النرجس',
    city: 'الرياض',
    district: 'النرجس',
    listing: 'sale',
    type: 'فيلا',
    area: 450,
    price: 4200000,
    rooms: 5,
    baths: 7,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'apt-malqa-02',
    title: 'شقة فاخرة في الملقا',
    city: 'الرياض',
    district: 'الملقا',
    listing: 'rent',
    type: 'شقة',
    area: 180,
    price: 120000,
    priceSuffix: '/ سنوياً',
    rooms: 3,
    baths: 4,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'invest-jeddah-03',
    title: 'مبنى تجاري استثماري',
    city: 'جدة',
    district: 'شارع التحلية',
    listing: 'invest',
    type: 'عمارة',
    area: 2250,
    price: 16500000,
    parking: 'مواقف خاصة',
    usage: '4 أدوار',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'townhouse-yasmin-04',
    title: 'تاون هاوس فاخر',
    city: 'الرياض',
    district: 'الياسمين',
    listing: 'sale',
    type: 'تاون هاوس',
    area: 250,
    price: 2650000,
    rooms: 4,
    baths: 5,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'office-olaya-05',
    title: 'مكتب إداري راقي',
    city: 'الرياض',
    district: 'العليا',
    listing: 'rent',
    type: 'مكتب',
    area: 110,
    price: 85000,
    priceSuffix: '/ سنوياً',
    usage: 'مكتب مفتوح',
    parking: 'دورة مياه',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'land-north-06',
    title: 'أرض سكنية استثمارية',
    city: 'الرياض',
    district: 'شمال الرياض',
    listing: 'invest',
    type: 'أرض',
    area: 600,
    price: 3900000,
    usage: 'سكني',
    parking: 'شارع 20م',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
  },
];

const TABS: { id: 'all' | Listing; label: string }[] = [
  { id: 'all', label: 'الكل' },
  { id: 'sale', label: 'للبيع' },
  { id: 'rent', label: 'للإيجار' },
  { id: 'invest', label: 'استثمار' },
];

const TYPES = ['الكل', 'فيلا', 'شقة', 'أرض', 'مكتب', 'عمارة', 'تاون هاوس'] as const;
const CITIES = ['الكل', 'الرياض', 'جدة', 'الدمام', 'مكة', 'المدينة'] as const;
const AREAS = ['الكل', 'حتى 200م²', '200م² - 500م²', '500م² - 1000م²', 'أكثر من 1000م²'] as const;
const PRICES = ['الكل', 'حتى 500 ألف', '500 ألف - 2 مليون', '2 - 5 مليون', 'أكثر من 5 مليون'] as const;
const SORTS = ['الأحدث', 'السعر: الأقل', 'السعر: الأعلى', 'المساحة: الأكبر'] as const;

const PER_PAGE = 6;

function formatPrice(n: number) {
  return new Intl.NumberFormat('en-US').format(n);
}

/* ----------------------- Select (custom-styled native) ----------------------- */

function Select({
  value,
  onChange,
  placeholder,
  options,
  className = '',
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: readonly string[];
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={placeholder}
        className="w-full appearance-none rounded-full bg-white px-5 py-3 pl-10 text-right text-[13px] text-ink ring-1 ring-black/10 transition focus:outline-none focus:ring-2 focus:ring-gold"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown size={14} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/50" />
    </div>
  );
}

/* ----------------------- Property card ----------------------- */

function MetaRow({ p }: { p: Property }) {
  const items: { Icon: LucideIcon; value: string }[] = [];
  items.push({ Icon: Maximize, value: `${p.area}م²` });
  if (p.rooms) items.push({ Icon: BedDouble, value: `${p.rooms} غرف` });
  if (p.baths) items.push({ Icon: Bath, value: `${p.baths} دورات مياه` });
  if (p.usage) items.push({ Icon: Building2, value: p.usage });
  if (p.parking) items.push({ Icon: Car, value: p.parking });
  return (
    <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-[11.5px] text-ink/65">
      {items.slice(0, 4).map(({ Icon, value }, i) => (
        <li key={i} className="inline-flex items-center gap-1.5">
          <Icon size={13} className="text-gold" />
          <span>{value}</span>
        </li>
      ))}
    </ul>
  );
}

function PropertyCard({ p }: { p: Property }) {
  const [fav, setFav] = useState(false);
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-lg">
      <div className="relative h-52 w-full">
        <img
          src={p.image}
          alt={`${p.title} — ${p.city}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition group-hover:scale-[1.03]"
        />
        <span className="absolute right-4 top-4 rounded-md bg-ink/85 px-3 py-1 text-[11px] font-semibold text-gold backdrop-blur">
          {LISTING_LABEL[p.listing]}
        </span>
        <button
          type="button"
          aria-pressed={fav}
          aria-label={fav ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}
          onClick={(e) => {
            e.preventDefault();
            setFav((v) => !v);
          }}
          className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-ink/70 shadow-sm transition hover:bg-white"
        >
          <Heart size={16} className={fav ? 'fill-gold text-gold' : ''} />
        </button>
      </div>

      <div className="p-5 text-right">
        <h3 className="text-base font-bold text-ink">{p.title}</h3>
        <p className="mt-1 inline-flex items-center gap-1 text-[12px] text-ink/60">
          <MapPin size={12} className="text-gold" />
          {p.city} - {p.district}
        </p>

        <div className="my-4 border-t border-black/5 pt-3">
          <MetaRow p={p} />
        </div>

        <div className="flex items-center justify-between gap-3">
          <a
            href={`#property/${p.id}`}
            className="inline-flex items-center gap-1 rounded-full border border-gold/50 px-4 py-2 text-[12px] font-semibold text-gold transition hover:bg-gold hover:text-white"
          >
            <span>عرض التفاصيل</span>
          </a>
          <div className="text-right">
            <div className="text-lg font-extrabold text-gold">
              {formatPrice(p.price)} <span className="text-xs font-semibold">ر.س</span>
            </div>
            {p.priceSuffix && <div className="text-[10.5px] text-ink/55">{p.priceSuffix}</div>}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ----------------------- Page ----------------------- */

export default function PropertiesPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'العروض العقارية — تاونكس';
    return () => {
      document.title = previous;
    };
  }, []);

  const [tab, setTab] = useState<'all' | Listing>('all');
  const [type, setType] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [price, setPrice] = useState('');
  const [sort, setSort] = useState('الأحدث');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = PROPERTIES.slice();
    if (tab !== 'all') list = list.filter((p) => p.listing === tab);
    if (type && type !== 'الكل') list = list.filter((p) => p.type === type);
    if (city && city !== 'الكل') list = list.filter((p) => p.city === city);
    if (query.trim()) {
      const q = query.trim();
      list = list.filter(
        (p) =>
          p.title.includes(q) ||
          p.district.includes(q) ||
          p.city.includes(q) ||
          p.type.includes(q)
      );
    }
    if (area && area !== 'الكل') {
      list = list.filter((p) => {
        if (area === 'حتى 200م²') return p.area <= 200;
        if (area === '200م² - 500م²') return p.area > 200 && p.area <= 500;
        if (area === '500م² - 1000م²') return p.area > 500 && p.area <= 1000;
        if (area === 'أكثر من 1000م²') return p.area > 1000;
        return true;
      });
    }
    if (price && price !== 'الكل') {
      list = list.filter((p) => {
        if (price === 'حتى 500 ألف') return p.price <= 500_000;
        if (price === '500 ألف - 2 مليون') return p.price > 500_000 && p.price <= 2_000_000;
        if (price === '2 - 5 مليون') return p.price > 2_000_000 && p.price <= 5_000_000;
        if (price === 'أكثر من 5 مليون') return p.price > 5_000_000;
        return true;
      });
    }
    if (sort === 'السعر: الأقل') list.sort((a, b) => a.price - b.price);
    else if (sort === 'السعر: الأعلى') list.sort((a, b) => b.price - a.price);
    else if (sort === 'المساحة: الأكبر') list.sort((a, b) => b.area - a.area);
    return list;
  }, [tab, type, city, area, price, sort, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  // Reset page when filters change
  useEffect(() => setPage(1), [tab, type, city, area, price, sort, query]);

  return (
    <div dir="rtl" className="bg-cream font-cairo text-ink">
      <SolidNavbar active="offers" />

      {/* 1. HERO */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 lg:grid-cols-2">
          {/* Text on visual RIGHT (RTL) */}
          <div className="order-2 flex flex-col justify-center px-6 py-12 lg:order-1 lg:h-[440px] lg:px-12 lg:py-0">
            <p className="text-[13px] font-bold tracking-wider text-gold">— العروض</p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-ink md:text-[40px] md:leading-[1.15] lg:text-[48px]">
              استعرض أفضل
              <br />
              <span className="bg-gradient-to-l from-gold to-gold-light bg-clip-text text-transparent">
                الفرص العقارية
              </span>
            </h1>
            <p className="mt-5 max-w-[520px] text-[14px] leading-[1.95] text-ink/70 md:text-[15px]">
              مجموعة مختارة من أفضل العقارات المتاحة للبيع والإيجار والاستثمار في مواقع مميزة وبمعايير جودة عالية.
            </p>
          </div>

          {/* Image on visual LEFT */}
          <div className="order-1 h-[240px] w-full overflow-hidden md:h-[360px] lg:order-2 lg:h-[440px]">
            <img
              src={HERO_IMG}
              alt="عروض عقارية مختارة"
              // @ts-expect-error fetchpriority isn't in React's IMG type yet
              fetchpriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. FILTER BAR */}
      <section className="bg-cream px-5 pt-2 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 py-6">
            {TABS.map((t) => {
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className={`rounded-full px-6 py-2.5 text-[13px] font-semibold transition ${
                    active
                      ? 'bg-gold text-white shadow-md'
                      : 'bg-white text-ink/70 ring-1 ring-black/10 hover:bg-gold/10'
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* Filters row */}
          <div className="grid grid-cols-2 gap-3 pb-4 md:grid-cols-4 lg:grid-cols-7">
            <Select
              value={sort}
              onChange={setSort}
              placeholder="ترتيب حسب: الأحدث"
              options={SORTS}
              className="lg:col-span-1"
            />
            <button
              type="button"
              onClick={() => {
                setTab('all');
                setType('');
                setCity('');
                setArea('');
                setPrice('');
                setSort('الأحدث');
                setQuery('');
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-ink/75 ring-1 ring-black/10 transition hover:bg-gold/10"
            >
              <SlidersHorizontal size={14} />
              <span>تصفية</span>
            </button>
            <Select value={type} onChange={setType} placeholder="نوع العقار" options={TYPES} />
            <Select value={city} onChange={setCity} placeholder="المدينة" options={CITIES} />
            <Select value={area} onChange={setArea} placeholder="المساحة" options={AREAS} />
            <Select value={price} onChange={setPrice} placeholder="السعر" options={PRICES} />
            <div className="relative col-span-2 md:col-span-4 lg:col-span-1">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ابحث عن عقار..."
                aria-label="ابحث عن عقار"
                className="w-full rounded-full bg-white px-5 py-3 pl-10 text-right text-[13px] text-ink ring-1 ring-black/10 transition placeholder:text-ink/45 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <Search size={14} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/50" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROPERTIES GRID */}
      <section className="bg-cream px-5 py-10 md:px-10 md:py-14">
        <div className="mx-auto max-w-[1400px]">
          {visible.length === 0 ? (
            <div className="rounded-2xl bg-white p-12 text-center text-sm text-ink/65 ring-1 ring-black/5">
              لا توجد نتائج مطابقة للمعايير المحددة.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {visible.map((p) => (
                <PropertyCard key={p.id} p={p} />
              ))}
            </div>
          )}

          {/* 5. PAGINATION */}
          {totalPages > 1 && (
            <nav
              aria-label="ترقيم الصفحات"
              className="mt-10 flex items-center justify-center gap-1.5 text-[13px]"
            >
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={safePage === 1}
                className="rounded-full px-4 py-2 font-semibold text-ink/70 transition hover:text-gold disabled:opacity-40"
              >
                السابق
              </button>
              {Array.from({ length: totalPages }).map((_, i) => {
                const n = i + 1;
                const isActive = n === safePage;
                return (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setPage(n)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`h-9 w-9 rounded-full text-[13px] font-semibold transition ${
                      isActive
                        ? 'bg-gold text-white shadow-md'
                        : 'text-ink/65 hover:bg-gold/10 hover:text-gold'
                    }`}
                  >
                    {n}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage === totalPages}
                className="rounded-full px-4 py-2 font-semibold text-ink/70 transition hover:text-gold disabled:opacity-40"
              >
                التالي
              </button>
            </nav>
          )}
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="relative overflow-hidden">
        <img
          src={SKYLINE_IMG}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-ink/85 via-ink/80 to-ink/60" />
        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 px-5 py-16 text-center md:flex-row md:px-10 md:py-20 md:text-right">
          <div className="md:order-2 md:flex-1">
            <h2 className="text-2xl font-extrabold leading-snug text-white md:text-3xl">
              لم تجد ما تبحث عنه؟
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80 md:mx-0 md:text-base">
              دعنا نساعدك في العثور على العقار المثالي الذي يلبي احتياجاتك.
            </p>
          </div>
          <a
            href={`tel:${TEL}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg transition hover:bg-gold-light md:order-1"
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
