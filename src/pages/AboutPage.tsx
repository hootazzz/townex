import { useEffect } from 'react';
import {
  Users,
  Building2,
  Award,
  MapPin,
  ShieldCheck,
  Lightbulb,
  Eye,
  Sparkles,
  Megaphone,
  Pencil,
  HardHat,
  Phone,
  Building,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SolidNavbar from '../components/SolidNavbar';
import Footer from '../components/Footer';
import { WHATSAPP_HREF } from '../data/contact';

const HERO_IMG =
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80';
const STORY_IMG =
  'https://images.unsplash.com/photo-1604595568318-cea99fef25c4?auto=format&fit=crop&w=1800&q=80';
const CTA_IMG =
  'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=2400&q=80';

type Stat = { Icon: LucideIcon; value: string; label: string };
const STATS: Stat[] = [
  { Icon: Users, value: '+150', label: 'عميل سعيد' },
  { Icon: Building2, value: '+200', label: 'مشروع مكتمل' },
  { Icon: Award, value: '+10', label: 'سنوات خبرة' },
  { Icon: MapPin, value: '8', label: 'مدن نخدمها' },
];

type Value = { Icon: LucideIcon; title: string; body: string };
const VALUES: Value[] = [
  {
    Icon: ShieldCheck,
    title: 'المصداقية',
    body: 'نلتزم بالمصداقية ونبني علاقات طويلة الأمد.',
  },
  {
    Icon: Lightbulb,
    title: 'الابتكار',
    body: 'نبتكر حلولاً عقارية حديثة تواكب تطلعات المستقبل.',
  },
  {
    Icon: Eye,
    title: 'الشفافية',
    body: 'نؤمن بالشفافية والوضوح في جميع تعاملاتنا.',
  },
  {
    Icon: Sparkles,
    title: 'الاحترافية',
    body: 'نعمل باحترافية عالية لتقديم أفضل الحلول لعملائنا.',
  },
];

type Department = { Icon: LucideIcon; title: string; body: string };
const DEPARTMENTS: Department[] = [
  {
    Icon: Building,
    title: 'التطوير العقاري',
    body: 'تطوير مشاريع سكنية وتجارية متكاملة بمعايير عالمية وجودة استثنائية.',
  },
  {
    Icon: Megaphone,
    title: 'التسويق العقاري',
    body: 'استراتيجيات تسويقية مبتكرة للوصول إلى المستثمرين والعملاء المستهدفين.',
  },
  {
    Icon: Pencil,
    title: 'إدارة الأملاك',
    body: 'إدارة وتشغيل احترافي للأصول العقارية ورفع كفاءة عائداتها.',
  },
  {
    Icon: HardHat,
    title: 'الإشراف الهندسي',
    body: 'إشراف هندسي دقيق يضمن جودة التنفيذ والالتزام بأعلى المعايير.',
  },
];

export default function AboutPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'من نحن — تاونكس للتطوير العقاري';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div dir="rtl" className="bg-cream font-cairo text-ink">
      <SolidNavbar active="about" />

      {/* 1. HERO */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center px-6 py-14 lg:order-1 lg:h-[520px] lg:px-12 lg:py-0">
            <p className="text-[13px] font-bold tracking-wider text-gold">— من نحن</p>
            <h1 className="mt-4 text-3xl font-extrabold leading-[1.15] text-ink md:text-[42px] lg:text-[48px]">
              نبني أكثر من عقار،
              <br />
              <span className="bg-gradient-to-l from-gold to-gold-light bg-clip-text text-transparent">
                نبني قيمة تدوم.
              </span>
            </h1>
            <p className="mt-6 max-w-[540px] text-[14px] leading-[1.95] text-ink/70 md:text-[15px]">
              تاونكس شركة سعودية متخصصة في التطوير العقاري والتسويق وإدارة الأملاك، نعمل بشغف لنقدم حلولاً عقارية مبتكرة تلبي تطلعات عملائنا وتواكب رؤية المملكة 2030.
            </p>
          </div>
          <div className="order-1 h-[280px] w-full overflow-hidden md:h-[420px] lg:order-2 lg:h-[520px]">
            <img
              src={HERO_IMG}
              alt="مبنى تاونكس"
              // @ts-expect-error fetchpriority isn't in React's IMG type yet
              fetchpriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="bg-cream px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image with floating badge */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={STORY_IMG}
                alt="مدينة الرياض"
                loading="lazy"
                decoding="async"
                className="h-[380px] w-full object-cover md:h-[460px]"
              />
              <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <ShieldCheck size={20} />
                </span>
                <div className="text-right">
                  <div className="text-[12px] text-ink/60">خبرة تمتد لأكثر من</div>
                  <div className="text-[15px] font-extrabold text-gold">10 سنوات</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 text-right lg:order-2">
            <p className="text-[13px] font-bold tracking-wider text-gold">— قصتنا</p>
            <p className="mt-5 text-[14.5px] leading-[2] text-ink/75 md:text-[15px]">
              انطلقنا من رؤية واضحة تهدف إلى رفع مستوى الخدمات العقارية في السعودية، من خلال فريق متخصص يمتلك خبرة عميقة في السوق العقاري وفهماً دقيقاً لاحتياجات الأفراد والمستثمرين.
            </p>
            <p className="mt-5 text-[14.5px] leading-[2] text-ink/75 md:text-[15px]">
              نؤمن أن النجاح الحقيقي لا يقاس بعدد المشاريع، بل بقيمة الأثر الذي نتركه وثقة عملائنا التي نعتز بها.
            </p>
          </div>
        </div>
      </section>

      {/* 3. STATISTICS */}
      <section className="bg-cream px-5 pb-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {STATS.map(({ Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <div className="mt-4 text-[28px] font-extrabold leading-none text-gold md:text-[32px]">
                  {value}
                </div>
                <div className="mt-2 text-[12px] text-ink/65 md:text-[13px]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES */}
      <section className="relative bg-ink px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-gold/60" />
              <h2 className="text-3xl font-extrabold text-white md:text-[34px]">قيمنا</h2>
              <span className="h-px w-10 bg-gold/60" />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="flex flex-col items-center bg-ink p-8 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon size={24} strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-[13px] leading-[1.85] text-white/65">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR EXPERTISE (replaces team photos) */}
      <section className="bg-cream px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="text-[13px] font-bold tracking-wider text-gold">— فريقنا</p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink md:text-[34px]">خبراتنا المتكاملة</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-ink/65 md:text-base">
              أقسام متخصصة بكوادر سعودية محترفة تخدمك في كل خطوة من رحلتك العقارية.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {DEPARTMENTS.map(({ Icon, title, body }) => (
              <article
                key={title}
                className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-white shadow-md transition group-hover:bg-gold-light">
                  <Icon size={26} strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[13px] leading-[1.85] text-ink/65">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="relative overflow-hidden">
        <img
          src={CTA_IMG}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-ink/85 via-ink/80 to-ink/60" />
        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 px-5 py-16 text-center md:flex-row md:px-10 md:py-20 md:text-right">
          <div className="md:order-2 md:flex-1">
            <h2 className="text-2xl font-extrabold leading-snug text-white md:text-3xl">
              هل لديك مشروع عقاري؟
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80 md:mx-0 md:text-base">
              دع فريق تاونكس يساعدك في تحويل رؤيتك إلى واقع.
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
