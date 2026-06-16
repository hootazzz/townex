import { useEffect, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  BedDouble,
  Bath,
  Maximize,
  Building2,
  MapPin,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Property = {
  badge: string;
  title: string;
  location: string;
  image: string;
  price: string;
  meta: { Icon: LucideIcon; value: string }[];
};

const PROPERTIES: Property[] = [
  {
    badge: 'للبيع',
    title: 'فيلا فاخرة',
    location: 'الرياض - النرجس',
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    price: '2,850,000',
    meta: [
      { Icon: Maximize, value: '450' },
      { Icon: Bath, value: '7 دورات مياه' },
      { Icon: BedDouble, value: '7 غرف' },
    ],
  },
  {
    badge: 'للبيع',
    title: 'عمارة سكنية',
    location: 'جدة - الروضة',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    price: '4,200,000',
    meta: [
      { Icon: Maximize, value: '600' },
      { Icon: Building2, value: '10 شقق' },
      { Icon: Bath, value: 'مواقف' },
    ],
  },
  {
    badge: 'فرصة استثمارية',
    title: 'أرض تجارية',
    location: 'شمال الرياض',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    price: '1,750,000',
    meta: [
      { Icon: Maximize, value: '2,000' },
      { Icon: MapPin, value: 'موقع مميز' },
    ],
  },
];

export default function LatestProperties() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement | undefined;
    if (!card) return;
    // RTL-safe: scroll the card into view within the track
    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    // Desired delta in scrollLeft (works for both LTR and RTL because
    // we use the difference between the card's current visual left and
    // the track's visual left)
    const delta = cardRect.left - trackRect.left;
    track.scrollBy({ left: delta, behavior: 'smooth' });
  };

  const go = (dir: 'prev' | 'next') => {
    const next = dir === 'next'
      ? Math.min(activeIndex + 1, PROPERTIES.length - 1)
      : Math.max(activeIndex - 1, 0);
    setActiveIndex(next);
    scrollToIndex(next);
  };

  // Update active dot when user swipes/scrolls
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const trackLeft = track.getBoundingClientRect().left;
        let bestIdx = 0;
        let bestDist = Infinity;
        Array.from(track.children).forEach((child, i) => {
          const d = Math.abs((child as HTMLElement).getBoundingClientRect().left - trackLeft);
          if (d < bestDist) {
            bestDist = d;
            bestIdx = i;
          }
        });
        setActiveIndex(bestIdx);
      });
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section className="bg-cream px-5 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-ink md:text-[34px]">
            أحدث العروض العقارية
          </h2>
          <p className="mt-2 text-sm text-ink/70 md:text-base">
            عقارات مختارة بعناية للبيع والاستثمار
          </p>
          <a
            href="#offers"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-gold-light"
          >
            <ChevronLeft size={16} />
            <span>عرض جميع العروض</span>
          </a>
        </div>

        {/* Cards + side arrows */}
        <div className="relative">
          <button
            type="button"
            aria-label="السابق"
            onClick={() => go('prev')}
            disabled={activeIndex === 0}
            className="absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 -translate-x-2 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/5 transition hover:bg-gold/10 disabled:opacity-40 md:right-[-20px]"
          >
            <ChevronRight size={20} className="text-ink/80" />
          </button>
          <button
            type="button"
            aria-label="التالي"
            onClick={() => go('next')}
            disabled={activeIndex === PROPERTIES.length - 1}
            className="absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 translate-x-2 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/5 transition hover:bg-gold/10 disabled:opacity-40 md:left-[-20px]"
          >
            <ChevronLeft size={20} className="text-ink/80" />
          </button>

          {/* Scrollable, snap-aligned track. On desktop each card is ~33.33% wide so three are visible; on smaller screens we show one or two. */}
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 md:gap-7 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {PROPERTIES.map((p) => (
              <a
                key={p.title}
                href="#property"
                className="block w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition hover:shadow-lg sm:w-[48%] md:w-[calc((100%-3.5rem)/3)]"
              >
                <div className="relative h-56 w-full">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                  <span className="absolute right-4 top-4 rounded-md bg-ink/85 px-3 py-1 text-xs font-semibold text-gold backdrop-blur">
                    {p.badge}
                  </span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-1 text-sm text-ink/60">{p.location}</p>

                  <div className="my-5 flex items-center justify-center gap-5 text-[12px] text-ink/75">
                    {p.meta.map(({ Icon, value }, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5">
                        <Icon size={14} className="text-gold" />
                        <span>{value}</span>
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-black/5 pt-4 text-lg font-extrabold text-gold">
                    {p.price} <span className="text-sm font-semibold">ر.س</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {PROPERTIES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setActiveIndex(i);
                scrollToIndex(i);
              }}
              aria-label={`الصفحة ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex ? 'w-6 bg-gold' : 'w-2 bg-ink/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
