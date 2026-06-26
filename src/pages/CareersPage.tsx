import { useEffect } from 'react';
import {
  Briefcase,
  MessageCircle,
  Building2,
  TrendingUp,
  Landmark,
  Users,
  Send,
  FileSearch,
  UsersRound,
  PartyPopper,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SolidNavbar from '../components/SolidNavbar';
import Footer from '../components/Footer';
import { WHATSAPP_HREF } from '../data/contact';

const HERO_IMG =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80';

const REASONS: { Icon: LucideIcon; title: string; body: string }[] = [
  { Icon: Building2, title: 'بيئة عمل احترافية', body: 'مساحات عمل حديثة وثقافة تحترم الإنجاز والتطور.' },
  { Icon: TrendingUp, title: 'فرص تطوير مستمرة', body: 'تدريب وتأهيل مستمر لبناء مسار مهني واضح.' },
  { Icon: Landmark, title: 'مشاريع عقارية مميزة', body: 'العمل على مشاريع نوعية تترك أثراً حقيقياً.' },
  { Icon: Users, title: 'فريق سعودي متخصص', body: 'كوادر وطنية محترفة تشاركك الشغف والخبرة.' },
];

const STEPS: { Icon: LucideIcon; title: string }[] = [
  { Icon: Send, title: 'إرسال الطلب' },
  { Icon: FileSearch, title: 'مراجعة السيرة الذاتية' },
  { Icon: UsersRound, title: 'المقابلة' },
  { Icon: PartyPopper, title: 'الانضمام للفريق' },
];

export default function CareersPage() {
  useEffect(() => {
    const prev = document.title;
    document.title = 'وظائفنا | TOWNEX';
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div dir="rtl" className="bg-cream font-cairo text-ink">
      <SolidNavbar active="careers" />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={HERO_IMG}
          alt=""
          // @ts-expect-error fetchpriority isn't in React's IMG type yet
          fetchpriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-ink/92 via-ink/82 to-ink/65" />
        <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-24 text-center md:px-10 md:py-32">
          <p className="text-[13px] font-bold tracking-wider text-gold">— انضم إلينا</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-[56px]">
            وظائفنا
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-[1.95] text-white/90 md:text-base">
            انضم إلى فريق TOWNEX وساهم في بناء مستقبل القطاع العقاري في المملكة.
          </p>
        </div>
      </section>

      {/* NO VACANCIES CARD */}
      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[720px]">
          <div className="rounded-3xl bg-white p-10 text-center shadow-[0_24px_60px_-18px_rgba(11,13,18,0.25)] ring-1 ring-black/5 md:p-14">
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold/15 text-gold">
              <Briefcase size={34} strokeWidth={1.6} />
            </span>
            <h2 className="mt-6 text-2xl font-extrabold text-ink md:text-[28px]">
              لا توجد شواغر متاحة حالياً
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[14.5px] leading-[1.95] text-ink/70">
              جميع الوظائف الحالية تم شغلها. نعمل باستمرار على توسيع فريقنا، وسيتم نشر الفرص الجديدة هنا فور توفرها.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold/15 px-5 py-2 text-[13px] font-bold text-gold">
              🚀 قريباً
            </div>
            <div className="mt-8">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg transition hover:bg-gold-light"
              >
                <MessageCircle size={16} />
                <span>تواصل معنا</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="text-[13px] font-bold tracking-wider text-gold">— مميزات العمل</p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink md:text-[34px]">لماذا العمل معنا؟</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {REASONS.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="group flex flex-col items-center rounded-2xl bg-cream p-7 text-center shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-white shadow-md transition group-hover:bg-gold-light">
                  <Icon size={24} strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 text-[15px] font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[13px] leading-[1.85] text-ink/65">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIRING TIMELINE */}
      <section className="bg-cream px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="text-[13px] font-bold tracking-wider text-gold">— خطوات التوظيف</p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink md:text-[34px]">كيف يتم التوظيف؟</h2>
          </div>
          <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, i) => (
              <li
                key={step.title}
                className="relative rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5"
              >
                <span className="absolute -top-3 right-1/2 inline-flex h-7 min-w-[28px] translate-x-1/2 items-center justify-center rounded-full bg-gold px-2 text-[12px] font-bold text-white shadow">
                  {i + 1}
                </span>
                <span className="mx-auto mt-2 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <step.Icon size={24} strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 text-[15px] font-bold text-ink">{step.title}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink">
        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 px-5 py-16 text-center md:flex-row md:px-10 md:py-20 md:text-right">
          <div className="md:order-2 md:flex-1">
            <h2 className="text-2xl font-extrabold leading-snug text-white md:text-3xl">
              جاهز للانضمام إلينا؟
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/75 md:mx-0 md:text-base">
              إذا كنت ترى أنك مناسب للعمل معنا فلا تتردد في التواصل.
            </p>
          </div>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg transition hover:bg-gold-light md:order-1"
          >
            <MessageCircle size={16} />
            <span>راسلنا عبر واتساب</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
