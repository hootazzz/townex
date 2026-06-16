import { Phone, Mail, MapPin, MessageCircle, Linkedin, Twitter, Ghost } from 'lucide-react';

const TEL_DISPLAY = '+966 11 123 4567';
const TEL = '+966111234567';
const EMAIL = 'info@townx.sa';

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
  { label: 'مشاريعنا', href: '#about' },
  { label: 'العروض', href: '#offers' },
  { label: 'تواصل معنا', href: '#contact' },
];

const SOCIALS = [
  { Icon: MessageCircle, label: 'واتساب', href: 'https://wa.me/966500000000' },
  { Icon: Linkedin, label: 'لينكدإن', href: 'https://www.linkedin.com/' },
  { Icon: Twitter, label: 'تويتر', href: 'https://twitter.com/' },
  { Icon: Ghost, label: 'سناب شات', href: 'https://www.snapchat.com/' },
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
                <a href={`tel:${TEL}`} dir="ltr" className="hover:text-gold">
                  {TEL_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Mail size={14} className="text-gold" />
                <a href={`mailto:${EMAIL}`} className="hover:text-gold">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <MapPin size={14} className="text-gold" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>

            <div className="mt-5 flex gap-2">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-gold hover:text-white"
                >
                  <Icon size={15} />
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
