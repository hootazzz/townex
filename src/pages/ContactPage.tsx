import { useEffect, useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ChevronLeft,
  User,
  ArrowLeft,
  Quote,
} from 'lucide-react';
import SolidNavbar from '../components/SolidNavbar';
import Footer from '../components/Footer';
import TikTokIcon from '../components/icons/TikTokIcon';
import {
  TEL,
  TEL_DISPLAY,
  TEL_HREF,
  WHATSAPP_HREF,
  TIKTOK_HREF,
  EMAIL,
  EMAIL_HREF,
  ADDRESS,
} from '../data/contact';

type Social = {
  // Accepts both lucide icons and our custom TikTokIcon — both take a `size` prop.
  Icon: React.ComponentType<{ size?: number | string; className?: string }>;
  title: string;
  body: string;
  cta: string;
  href: string;
};

const SOCIALS: Social[] = [
  {
    Icon: MessageCircle,
    title: 'واتساب',
    body: 'تواصل مباشرة مع فريقنا',
    cta: 'ابدأ المحادثة',
    href: WHATSAPP_HREF,
  },
  {
    Icon: TikTokIcon,
    title: 'تيك توك',
    body: 'تابع جديد مشاريعنا وأحدث الفرص العقارية',
    cta: 'زيارة الحساب',
    href: TIKTOK_HREF,
  },
  {
    Icon: Phone,
    title: 'اتصال مباشر',
    body: 'تحدث مع فريق المبيعات الآن',
    cta: 'اتصل الآن',
    href: TEL_HREF,
  },
  {
    Icon: Mail,
    title: 'البريد الإلكتروني',
    body: 'راسلنا لأي استفسار أو طلب',
    cta: 'إرسال بريد',
    href: EMAIL_HREF,
  },
];

const SERVICE_OPTIONS = [
  'التسويق العقاري',
  'إدارة الأملاك',
  'التصميم والتنفيذ',
  'الإشراف الهندسي',
  'استشارة مجانية',
  'أخرى',
];

/* Top navigation now provided by the shared <SolidNavbar/> component. */

/* ---------------- Contact Form ---------------- */

type FormState = { name: string; phone: string; service: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;
type Status = 'idle' | 'loading' | 'success';

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = 'يرجى إدخال الاسم الكامل';
  const phone = form.phone.trim();
  if (!phone) {
    errors.phone = 'يرجى إدخال رقم الجوال';
  } else {
    // Saudi mobile: starts with 05XXXXXXXX or +9665XXXXXXXX or 009665XXXXXXXX
    const ok = /^(?:\+?966|00966|0)?5\d{8}$/.test(phone.replace(/[\s-]/g, ''));
    if (!ok) errors.phone = 'يرجى إدخال رقم جوال سعودي صحيح';
  }
  return errors;
}

function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;
    setStatus('loading');
    // No backend wired up — simulate a request so the UX feels real.
    window.setTimeout(() => setStatus('success'), 900);
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5" role="status">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
          <Phone size={20} className="rotate-[12deg]" />
        </div>
        <h3 className="text-lg font-bold text-ink">تم استلام طلبك بنجاح</h3>
        <p className="mt-2 text-sm text-ink/70">سيتواصل معك أحد أعضاء فريق تاونكس في أقرب وقت ممكن.</p>
        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setForm({ name: '', phone: '', service: '', message: '' });
          }}
          className="mt-5 text-sm font-semibold text-gold hover:text-gold-light"
        >
          إرسال طلب آخر
        </button>
      </div>
    );
  }

  const inputBase =
    'w-full rounded-xl bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink/45 ring-1 ring-black/10 transition focus:outline-none focus:ring-2 focus:ring-gold';

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-3.5">
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <div>
          <div className="relative">
            <User size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-ink/40" />
            <input
              type="text"
              value={form.name}
              onChange={update('name')}
              aria-label="الاسم الكامل"
              aria-invalid={!!errors.name}
              placeholder="الاسم الكامل"
              className={`${inputBase} pr-11 ${errors.name ? 'ring-2 ring-red-400' : ''}`}
            />
          </div>
          {errors.name && <p className="mt-1 text-[12px] text-red-500">{errors.name}</p>}
        </div>
        <div>
          <div className="relative">
            <Phone size={16} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-[12deg] text-ink/40" />
            <input
              type="tel"
              dir="ltr"
              value={form.phone}
              onChange={update('phone')}
              aria-label="رقم الجوال"
              aria-invalid={!!errors.phone}
              placeholder="05xxxxxxxx"
              className={`${inputBase} pr-11 text-right ${errors.phone ? 'ring-2 ring-red-400' : ''}`}
            />
          </div>
          {errors.phone && <p className="mt-1 text-[12px] text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <select
        value={form.service}
        onChange={update('service')}
        aria-label="نوع الخدمة"
        className={`${inputBase} appearance-none bg-[length:14px] bg-[left_1rem_center] bg-no-repeat`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%230B0D12' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
        }}
      >
        <option value="" disabled>
          اختر نوع الخدمة
        </option>
        {SERVICE_OPTIONS.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <textarea
        value={form.message}
        onChange={update('message')}
        aria-label="رسالتك"
        rows={5}
        placeholder="رسالتك"
        className={`${inputBase} resize-none`}
      />

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold py-4 text-[15px] font-semibold text-white shadow-md transition hover:bg-gold-light disabled:opacity-70"
      >
        {status === 'loading' ? (
          <>
            <span
              className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
              aria-hidden="true"
            />
            <span>جاري الإرسال...</span>
          </>
        ) : (
          <>
            <ArrowLeft size={18} />
            <span>تواصل معنا الآن</span>
          </>
        )}
      </button>

      <p className="text-center text-[12px] text-ink/55">
        سيتم التواصل معك في أقرب وقت ممكن
      </p>
    </form>
  );
}

/* ---------------- Sidebar cards ---------------- */

function SocialCard({ s }: { s: Social }) {
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold text-white shadow-sm">
        <s.Icon size={22} />
      </span>
      <div className="flex-1 text-right">
        <div className="text-[15px] font-bold text-ink">{s.title}</div>
        <div className="mt-0.5 text-[12px] leading-[1.5] text-ink/60">{s.body}</div>
        <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-gold/40 px-3 py-1 text-[11.5px] font-semibold text-gold transition group-hover:bg-gold group-hover:text-white">
          <ChevronLeft size={12} />
          <span>{s.cta}</span>
        </span>
      </div>
    </a>
  );
}

function ContactInfo() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
      <h3 className="mb-4 text-center text-[15px] font-bold text-ink">معلومات التواصل</h3>
      <ul className="space-y-4 text-right">
        <li className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
            <Phone size={15} className="rotate-[12deg]" />
          </span>
          <div>
            <a href={TEL_HREF} dir="ltr" className="block text-[14px] font-bold text-ink hover:text-gold">
              {TEL_DISPLAY}
            </a>
            <div className="text-[11.5px] text-ink/55">اتصل بنا الآن</div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
            <Mail size={15} />
          </span>
          <div>
            <a href={EMAIL_HREF} className="block text-[14px] font-bold text-ink hover:text-gold">
              {EMAIL}
            </a>
            <div className="text-[11.5px] text-ink/55">راسلنا عبر البريد الإلكتروني</div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
            <MapPin size={15} />
          </span>
          <div>
            <div className="text-[14px] font-bold text-ink">{ADDRESS}</div>
            <div className="text-[11.5px] text-ink/55">حي الملك عبد الله المالي</div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
            <Clock size={15} />
          </span>
          <div>
            <div className="text-[14px] font-bold text-ink">ساعات العمل</div>
            <div className="text-[11.5px] text-ink/55">السبت - الخميس</div>
            <div dir="ltr" className="text-right text-[11.5px] text-ink/55">9 صباحًا - 9 مساءً</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

/* ---------------- Page ---------------- */

export default function ContactPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'تواصل معنا — تاونكس للتطوير العقاري';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div dir="rtl" className="bg-cream font-cairo text-ink">
      <SolidNavbar active="contact" />

      {/* MAIN CONTACT SECTION */}
      <main className="mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-16 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
          {/* RIGHT (visual): heading + quote + form — first in DOM → visual RIGHT in RTL */}
          <section className="lg:flex-1">
            <p className="text-[13px] font-bold tracking-wider text-gold">— تواصل معنا</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-ink md:text-[44px] md:leading-[1.15]">
              لنبدأ رحلتك العقارية
            </h1>
            <p className="mt-5 max-w-[640px] text-[14px] leading-[1.95] text-ink/70 md:text-[15px]">
              نؤمن أن كل مشروع ناجح يبدأ بخطوة تواصل بسيطة. سواء كنت تبحث عن فرصة استثمارية، تسويق عقارك، إدارة أملاكك أو تنفيذ مشروعك القادم، فريق تاونكس جاهز لخدمتك.
            </p>

            {/* Quote card */}
            <div className="relative mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
              <Quote size={28} className="text-gold/70" />
              <p className="mt-3 text-center text-[18px] font-bold leading-[1.9] text-gold md:text-[20px]">
                نبني الثقة قبل العقار،
                <br />
                ونصنع القيمة قبل الصفقة.
              </p>
            </div>

            <div className="mt-8">
              <ContactForm />
            </div>
          </section>

          {/* LEFT (visual): socials + contact info — second in DOM → visual LEFT in RTL */}
          <aside className="space-y-4 lg:w-[360px] lg:shrink-0">
            {SOCIALS.map((s) => (
              <SocialCard key={s.title} s={s} />
            ))}
            <ContactInfo />
          </aside>
        </div>
      </main>

      {/* BOTTOM CTA BANNER */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1604595568318-cea99fef25c4?auto=format&fit=crop&w=2400&q=80"
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-ink/85 via-ink/75 to-ink/60" />
        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 px-5 py-16 text-center md:flex-row md:px-10 md:py-20 md:text-right">
          <div className="md:order-2 md:flex-1">
            <h2 className="text-2xl font-extrabold leading-snug text-white md:text-3xl">
              هل لديك مشروع أو عقار
              <br />
              يحتاج إلى شريك موثوق؟
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/80 md:mx-0 md:text-base">
              دع فريق تاونكس يحول رؤيتك إلى واقع.
            </p>
          </div>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg transition hover:bg-gold-light md:order-1"
          >
            <ArrowLeft size={16} />
            <span>احجز استشارة مجانية</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
