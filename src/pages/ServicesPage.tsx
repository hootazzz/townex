import { useEffect } from 'react';
import {
  Megaphone,
  Building,
  Pencil,
  HardHat,
  ChevronLeft,
  Phone,
  UserRound,
  Compass,
  BadgeCheck,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SolidNavbar from '../components/SolidNavbar';
import Footer from '../components/Footer';
import { WHATSAPP_HREF } from '../data/contact';

type Service = { Icon: LucideIcon; title: string; body: string };

const SERVICES: Service[] = [
  {
    Icon: Megaphone,
    title: 'التسويق العقاري',
    body: 'استراتيجيات تسويق احترافية للوصول إلى العملاء المستهدفين وتحقيق أفضل النتائج.',
  },
  {
    Icon: Building,
    title: 'إدارة الأملاك',
    body: 'إدارة وتشغيل الأصول العقارية بكفاءة واحترافية مع متابعة مستمرة.',
  },
  {
    Icon: Pencil,
    title: 'التصميم والتنفيذ',
    body: 'تصميم معماري وتنفيذ متكامل بمعايير عالية وجودة استثنائية.',
  },
  {
    Icon: HardHat,
    title: 'الإشراف الهندسي',
    body: 'إشراف هندسي دقيق يضمن جودة التنفيذ والالتزام بالمواصفات.',
  },
];

type Reason = { Icon: LucideIcon; title: string; body: string };

const REASONS: Reason[] = [
  {
    Icon: UserRound,
    title: 'فريق سعودي متخصص',
    body: 'كوادر وطنية ذات خبرة في السوق العقاري السعودي.',
  },
  {
    Icon: Compass,
    title: 'خبرة هندسية عالية',
    body: 'خبرة طويلة في التطوير والتصميم والإشراف الهندسي.',
  },
  {
    Icon: BadgeCheck,
    title: 'جودة تنفيذ استثنائية',
    body: 'التزام بأعلى معايير التنفيذ والجودة في كل تفصيل.',
  },
  {
    Icon: TrendingUp,
    title: 'نتائج واستثمارات مستدامة',
    body: 'حلول تحقق قيمة وعوائد مستدامة على المدى الطويل.',
  },
];

const HERO_IMG =
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=80';
const SKYLINE_IMG =
  'https://images.unsplash.com/photo-1604595568318-cea99fef25c4?auto=format&fit=crop&w=2400&q=80';

export default function ServicesPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'خدماتنا — تاونكس للتطوير العقاري';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div dir="rtl" className="bg-cream font-cairo text-ink">
      <SolidNavbar active="services" />

      {/* 1. HERO */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 lg:grid-cols-2 lg:gap-0">
          {/* DOM order: text first → visual RIGHT in RTL */}
          <div className="order-2 flex flex-col justify-center px-6 py-14 lg:order-1 lg:h-[560px] lg:px-12 lg:py-0">
            <p className="text-[13px] font-bold tracking-wider text-gold">— خدماتنا</p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-ink md:text-[42px] md:leading-[1.15] lg:text-[52px]">
              حلول عقارية متكاملة
              <br />
              <span className="bg-gradient-to-l from-gold to-gold-light bg-clip-text text-transparent">
                تصنع الفرق
              </span>
            </h1>
            <p className="mt-6 max-w-[560px] text-[14px] leading-[1.95] text-ink/70 md:text-[15px]">
              نقدم مجموعة متكاملة من الخدمات العقارية التي تغطي كافة احتياجات عملائنا، مدعومة بخبرة عميقة وفهم دقيق للسوق العقاري السعودي.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 h-[280px] w-full overflow-hidden md:h-[420px] lg:order-2 lg:h-[560px]">
            <img
              src={HERO_IMG}
              alt="مبنى معماري حديث"
              // @ts-expect-error fetchpriority isn't in React's IMG type yet
              fetchpriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="bg-cream px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-ink md:text-[36px]">خدماتنا</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-ink/70 md:text-base">
              نقدم حلولاً عقارية متكاملة تلبي احتياجات الأفراد والشركات والمستثمرين.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {SERVICES.map(({ Icon, title, body }) => (
              <article
                key={title}
                className="group relative flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-white shadow-md transition group-hover:bg-gold-light">
                  <Icon size={26} strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[13px] leading-[1.85] text-ink/65">{body}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-ink/70 transition hover:text-gold"
                >
                  <ChevronLeft size={14} />
                  <span>تعرف أكثر</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="bg-white px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="text-[13px] font-bold tracking-wider text-gold">— لماذا تاونكس</p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink md:text-[34px]">لماذا تختار تاونكس</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="flex flex-col items-center rounded-2xl bg-cream p-7 text-center ring-1 ring-black/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 text-[15px] font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[12.5px] leading-[1.8] text-ink/65">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="relative overflow-hidden">
        <img
          src={SKYLINE_IMG}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-ink/85 via-ink/75 to-ink/60" />
        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 px-5 py-16 text-center md:flex-row md:px-10 md:py-20 md:text-right">
          <div className="md:order-2 md:flex-1">
            <h2 className="text-2xl font-extrabold leading-snug text-white md:text-3xl">
              هل تبحث عن شريك عقاري موثوق؟
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80 md:mx-0 md:text-base">
              تواصل معنا اليوم ودعنا نساعدك في تحقيق أهدافك الاستثمارية وبناء مستقبل عقاري ناجح.
            </p>
          </div>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
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
