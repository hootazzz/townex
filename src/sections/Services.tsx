import { SERVICES } from '../data/services';

// Image used on the home/services-grid card per service (smaller crops of the
// hero images on each detail page).
const CARD_IMAGE: Record<string, string> = {
  'real-estate-marketing':
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80',
  'property-management':
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=900&q=80',
  'design-build':
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
  'engineering-supervision':
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80',
};

export default function Services() {
  return (
    <section className="bg-white px-5 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gold/60" />
            <h2 className="text-3xl font-extrabold text-ink md:text-[34px]">خدماتنا</h2>
            <span className="h-px w-10 bg-gold/60" />
          </div>
          <p className="mt-3 text-sm text-ink/70 md:text-base">
            حلول عقارية متكاملة تلبي احتياجاتك
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <a
              key={s.slug}
              href={`#services/${s.slug}`}
              className="group block overflow-hidden rounded-2xl bg-cream shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={CARD_IMAGE[s.slug] ?? s.heroImage}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition group-hover:scale-[1.03]"
                />
              </div>
              <div className="relative px-6 pb-7 pt-10 text-center">
                <span className="absolute right-1/2 top-0 flex h-14 w-14 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-gold text-white shadow-md">
                  <s.Icon size={22} strokeWidth={1.7} />
                </span>
                <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-ink/65">{s.short}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
