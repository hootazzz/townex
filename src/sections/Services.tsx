import { Megaphone, Building, Pencil, HardHat } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Service = { Icon: LucideIcon; title: string; body: string; image: string };

const SERVICES: Service[] = [
  {
    Icon: Megaphone,
    title: 'التسويق العقاري',
    body: 'استراتيجيات تسويقية مبتكرة لتحقيق أفضل النتائج',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
  },
  {
    Icon: Building,
    title: 'إدارة الأملاك',
    body: 'إدارة وتشغيل الأصول العقارية بكفاءة واحترافية',
    image:
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=900&q=80',
  },
  {
    Icon: Pencil,
    title: 'التصميم والتنفيذ',
    body: 'تصميم معماري وتنفيذ بجودة عالية وفق أفضل المعايير',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
  },
  {
    Icon: HardHat,
    title: 'الإشراف الهندسي',
    body: 'إشراف هندسي دقيق يضمن جودة التنفيذ والالتزام بالمعايير',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80',
  },
];

export default function Services() {
  return (
    <section className="bg-white px-5 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Header with side rules */}
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

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ Icon, title, body, image }) => (
            <article
              key={title}
              className="overflow-hidden rounded-2xl bg-cream shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
            >
              <div className="h-44 w-full overflow-hidden">
                <img src={image} alt={title} className="h-full w-full object-cover" />
              </div>
              <div className="relative px-6 pb-7 pt-10 text-center">
                <span className="absolute right-1/2 top-0 flex h-14 w-14 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-gold text-white shadow-md">
                  <Icon size={22} strokeWidth={1.7} />
                </span>
                <h3 className="text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-ink/65">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
