import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import TikTokIcon from './icons/TikTokIcon';
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

const SERVICES = [
  'تطوير المشاريع العقارية',
  'التصميم المعماري',
  'التسويق العقاري',
  'إدارة الأملاك',
  'الاستشارات الاستثمارية',
  'بيع وشراء العقارات',
];

const QUICK_LINKS = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'مشاريعنا', href: '#offers' },
  { label: 'العروض', href: '#offers' },
  { label: 'تواصل معنا', href: '#contact' },
];

type Social =
  | { kind: 'whatsapp'; label: string; href: string }
  | { kind: 'tiktok'; label: string; href: string };

const SOCIALS: Social[] = [
  { kind: 'whatsapp', label: 'واتساب', href: WHATSAPP_HREF },
  { kind: 'tiktok', label: 'تيك توك', href: TIKTOK_HREF },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand column — first in DOM → visual RIGHT in RTL */}
          <div>
            <div className="text-3xl font-extrabold tracking-[0.04em] text-white">
              TOWN<span className="text-gold">X</span>
            </div>
            <div className="mt-1 text-[12px] text-white/70">
              تطوير . تصميم . تسويق . إدارة أملاك
            </div>
            <p className="mt-6 text-[13px] leading-[1.85] text-white/70">
              نقدم حلولاً عقارية متكاملة بمعايير عالمية ورؤية سعودية لبناء مستقبل أفضل.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[15px] font-bold text-white">خدماتنا</h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-[13px] text-white/65 transition hover:text-gold"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[15px] font-bold text-white">روابط سريعة</h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[13px] text-white/65 transition hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[15px] font-bold text-white">تواصل معنا</h3>
            <ul className="mt-5 space-y-3 text-[13px]">
              <li className="flex items-center gap-2 text-white/70">
                <Phone size={14} className="text-gold" />
                <a href={TEL_HREF} dir="ltr" className="hover:text-gold">
                  {TEL_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <MessageCircle size={14} className="text-gold" />
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                  className="hover:text-gold"
                >
                  {TEL_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Mail size={14} className="text-gold" />
                <a href={EMAIL_HREF} className="hover:text-gold">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <MapPin size={14} className="text-gold" />
                <span>{ADDRESS}</span>
              </li>
            </ul>

            <div className="mt-5 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.kind}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-gold hover:text-white"
                >
                  {s.kind === 'whatsapp' ? <MessageCircle size={15} /> : <TikTokIcon size={15} />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 py-5 text-center text-[12px] text-white/55 md:px-10">
          © {new Date().getFullYear()} جميع الحقوق محفوظة لتاونكس العقارية.
        </div>
      </div>
    </footer>
  );
}

