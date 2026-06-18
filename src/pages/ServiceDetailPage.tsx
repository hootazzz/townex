import { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  Compass,
  Users,
  Award,
  Layers,
  CalendarCheck,
  Eye,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SolidNavbar from '../components/SolidNavbar';
import Footer from '../components/Footer';
import { SERVICES, getService, getRelatedServices } from '../data/services';
import { TEL_HREF, WHATSAPP_HREF } from '../data/contact';

const WHY: { Icon: LucideIcon; label: string }[] = [
  { Icon: Compass, label: 'خبرة هندسية متخصصة' },
  { Icon: Users, label: 'فريق سعودي محترف' },
  { Icon: Award, label: 'جودة تنفيذ عالية' },
  { Icon: Layers, label: 'حلول متكاملة' },
  { Icon: CalendarCheck, label: 'التزام بالمواعيد' },
  { Icon: Eye, label: 'متابعة مستمرة' },
];

const GALLERY_AFTER =
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80';
const GALLERY_BEFORE =
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80';

function getSlug(): string {
  const h = window.location.hash.replace(/^#/, '');
  return h.startsWith('services/') ? h.slice('services/'.length) : '';
}

export default function ServiceDetailPage() {
  const [slug, setSlug] = useState<string>(() => getSlug());
  useEffect(() => {
    const onHash = () => setSlug(getSlug());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const service = getService(slug) || SERVICES[0];

  useEffect(() => {
    const prev = document.title;
    document.title = `${service.title} — تاونكس للتطوير العقاري`;
    return () => {
      document.title = prev;
    };
  }, [service.title]);

  const related = getRelatedServices(service.slug);

  return (
    <div dir="rtl" className="bg-cream font-cairo text-ink">
      <SolidNavbar active="services" />

      {/* Breadcrumb */}
      <nav aria-label="مسار التنقل" className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center gap-2 px-5 py-3 text-[12.5px] text-ink/60 md:px-10">
          <a href="#home" className="hover:text-gold">الرئيسية</a>
          <ChevronLeft size={12} />
          <a href="#services" className="hover:text-gold">خدماتنا</a>
          <ChevronLeft size={12} />
          <span className="font-semibold text-ink">{service.title}</span>
        </div>
      </nav>

      {/* 1. HERO */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center px-6 py-14 lg:order-1 lg:h-[480px] lg:px-12 lg:py-0">
            <p className="text-[13px] font-bold tracking-wider text-gold">— خدماتنا</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-[1.15] text-ink md:text-[40px] lg:text-[44px]">
              <span className="bg-gradient-to-l from-gold to-gold-light bg-clip-text text-transparent">
                {service.title}
              </span>
            </h1>
            <p className="mt-5 max-w-[560px] text-[14px] leading-[1.95] text-ink/70 md:text-[15px]">
              {service.long}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[14px] font-semibold text-white shadow-md transition hover:bg-gold-light"
              >
                <MessageCircle size={15} />
                <span>تواصل معنا الآن</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-ink/70 px-6 py-3 text-[14px] font-semibold text-ink transition hover:bg-ink/5"
              >
                <ChevronLeft size={15} />
                <span>كل الخدمات</span>
              </a>
            </div>
          </div>
          <div className="order-1 h-[260px] w-full overflow-hidden md:h-[400px] lg:order-2 lg:h-[480px]">
            <img
              src={service.heroImage}
              alt={service.title}
              // @ts-expect-error fetchpriority isn't in React's IMG type yet
              fetchpriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="bg-cream px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_360px]">
          <div className="text-right">
            <p className="text-[13px] font-bold tracking-wider text-gold">— نظرة عامة</p>
            <h2 className="mt-3 text-2xl font-extrabold text-ink md:text-[28px]">
              ما الذي نقدمه في {service.title}؟
            </h2>
            <p className="mt-5 text-[14.5px] leading-[2] text-ink/75">{service.long}</p>
            <p className="mt-4 text-[14.5px] leading-[2] text-ink/75">
              نعمل بمنهجية واضحة وفريق متخصص لضمان نتائج مميزة، مع التزام كامل بمعايير الجودة والمواعيد المتفق عليها.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-center shadow-md ring-1 ring-black/5">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold text-white shadow-md">
              <service.Icon size={26} strokeWidth={1.7} />
            </span>
            <h3 className="mt-5 text-lg font-bold text-ink">{service.title}</h3>
            <p className="mt-2 text-[13px] leading-[1.85] text-ink/65">{service.short}</p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3 text-[13px] font-bold text-white transition hover:bg-gold-light"
            >
              <MessageCircle size={14} />
              <span>اطلب الخدمة عبر واتساب</span>
            </a>
            <a
              href={TEL_HREF}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/70 py-3 text-[13px] font-bold text-ink transition hover:bg-ink/5"
            >
              <Phone size={14} className="rotate-[12deg]" />
              <span>اتصل بنا</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS */}
      <section className="bg-white px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="text-[13px] font-bold tracking-wider text-gold">— المميزات</p>
            <h2 className="mt-3 text-2xl font-extrabold text-ink md:text-[30px]">
              لماذا تختار {service.title} مع تاونكس
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {service.benefits.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-2xl bg-cream p-6 text-center ring-1 ring-black/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <div className="mt-4 text-[14px] font-bold text-ink">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS */}
      <section className="bg-cream px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="text-[13px] font-bold tracking-wider text-gold">— خطوات العمل</p>
            <h2 className="mt-3 text-2xl font-extrabold text-ink md:text-[30px]">منهجيتنا في {service.title}</h2>
          </div>
          <ol className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {service.process.map((step, i) => (
              <li
                key={step.title}
                className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <span className="absolute -top-3 right-6 inline-flex h-7 min-w-[28px] items-center justify-center rounded-full bg-gold px-2 text-[12px] font-bold text-white shadow">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <step.Icon size={22} strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 text-[15px] font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.85] text-ink/65">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4b. GALLERY + BEFORE/AFTER (only for design-build) */}
      {service.gallery && (
        <section className="bg-white px-5 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-center">
              <p className="text-[13px] font-bold tracking-wider text-gold">— أعمالنا</p>
              <h2 className="mt-3 text-2xl font-extrabold text-ink md:text-[30px]">مشاريع مكتملة</h2>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {service.gallery.map((src, i) => (
                <div key={i} className="overflow-hidden rounded-xl">
                  <img
                    src={src}
                    alt={`مشروع ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="h-40 w-full object-cover transition hover:scale-[1.03] md:h-48"
                  />
                </div>
              ))}
            </div>

            {/* Before / After */}
            <div className="mt-14 text-center">
              <p className="text-[13px] font-bold tracking-wider text-gold">— قبل وبعد</p>
              <h3 className="mt-3 text-xl font-extrabold text-ink md:text-2xl">نتائج التصميم والتنفيذ</h3>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                { label: 'قبل', src: GALLERY_BEFORE },
                { label: 'بعد', src: GALLERY_AFTER },
              ].map((g) => (
                <div key={g.label} className="relative overflow-hidden rounded-2xl">
                  <img
                    src={g.src}
                    alt={g.label}
                    loading="lazy"
                    decoding="async"
                    className="h-64 w-full object-cover md:h-80"
                  />
                  <span
                    className={`absolute top-4 ${
                      g.label === 'قبل' ? 'right-4 bg-ink/85 text-white' : 'left-4 bg-gold text-white'
                    } rounded-md px-3 py-1 text-[12px] font-bold backdrop-blur`}
                  >
                    {g.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. WHY TOWNX */}
      <section className="bg-cream px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="text-[13px] font-bold tracking-wider text-gold">— لماذا تاونكس</p>
            <h2 className="mt-3 text-2xl font-extrabold text-ink md:text-[30px]">أسباب تجعلنا الخيار الأفضل</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-6">
            {WHY.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-black/5"
              >
                <Icon size={26} strokeWidth={1.5} className="text-gold" />
                <div className="mt-3 text-[12.5px] font-bold text-ink">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RELATED SERVICES */}
      <section className="bg-white px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="text-[13px] font-bold tracking-wider text-gold">— خدمات ذات صلة</p>
            <h2 className="mt-3 text-2xl font-extrabold text-ink md:text-[30px]">قد تهمك أيضاً</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <a
                key={r.slug}
                href={`#services/${r.slug}`}
                className="group flex flex-col items-center rounded-2xl bg-cream p-7 text-center shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-white shadow-md transition group-hover:bg-gold-light">
                  <r.Icon size={22} strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{r.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.85] text-ink/65">{r.short}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-gold">
                  <ChevronRight size={14} />
                  <span>تعرف أكثر</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="relative overflow-hidden bg-ink">
        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 px-5 py-16 text-center md:flex-row md:px-10 md:py-20 md:text-right">
          <div className="md:order-2 md:flex-1">
            <h2 className="text-2xl font-extrabold leading-snug text-white md:text-3xl">
              جاهز للبدء؟
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/75 md:mx-0 md:text-base">
              دع فريق تاونكس يساعدك في تحقيق أهدافك العقارية بخبرة ورؤية احترافية.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:order-1">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[14px] font-semibold text-white shadow-lg transition hover:bg-gold-light"
            >
              <Phone size={15} className="rotate-[12deg]" />
              <span>تواصل معنا الآن</span>
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-[14px] font-semibold text-white shadow-lg transition hover:brightness-110"
            >
              <MessageCircle size={15} />
              <span>واتساب</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
