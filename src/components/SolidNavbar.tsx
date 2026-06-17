import { useEffect, useState } from 'react';
import { Phone, Menu, X as XIcon } from 'lucide-react';

const TEL = '+966111234567';

const NAV_ITEMS = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'مشاريعنا', href: '#offers' },
  { label: 'العروض', href: '#offers' },
  { label: 'تواصل معنا', href: '#contact' },
];

type Props = {
  /** Hash (without #) of the page this navbar lives on, used to highlight the matching nav item. */
  active: 'home' | 'about' | 'services' | 'offers' | 'contact';
};

export default function SolidNavbar({ active }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-white/95 backdrop-blur">
      {/* Mobile/Tablet */}
      <div className="relative flex items-center justify-center px-5 py-4 lg:hidden">
        <a href="#home" aria-label="الصفحة الرئيسية" className="text-2xl font-extrabold tracking-wide text-ink">
          TOWN<span className="text-gold">X</span>
        </a>
        <button
          type="button"
          aria-label="فتح القائمة"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="absolute left-5 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink transition hover:bg-ink/10"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Desktop */}
      <div className="mx-auto hidden max-w-[1500px] items-center justify-between px-10 py-5 lg:flex">
        <a href="#home" className="flex flex-col items-end leading-none">
          <span className="text-[28px] font-extrabold tracking-[0.04em] text-ink">
            TOWN<span className="text-gold">X</span>
          </span>
          <span className="mt-1 text-[11px] font-medium text-ink/65">
            تطوير . تصميم . تسويق . إدارة أملاك
          </span>
        </a>

        <nav className="flex flex-1 items-center justify-center gap-10">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href.slice(1) === active;
            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative pb-2 text-[15px] transition ${
                  isActive ? 'font-semibold text-gold' : 'text-ink/75 hover:text-ink'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 right-1/2 h-[2px] w-8 translate-x-1/2 rounded-full bg-gold" />
                )}
              </a>
            );
          })}
        </nav>

        <a
          href={`tel:${TEL}`}
          className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-gold-light"
        >
          <Phone size={16} className="rotate-[12deg]" />
          <span>تواصل معنا الآن</span>
        </a>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 right-0 flex w-[82%] max-w-[340px] flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between px-5 py-5">
              <span className="text-xl font-extrabold tracking-wide text-ink">
                TOWN<span className="text-gold">X</span>
              </span>
              <button
                type="button"
                aria-label="إغلاق القائمة"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-ink/5"
              >
                <XIcon size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-5 py-2">
              {NAV_ITEMS.map((item) => {
                const isActive = item.href.slice(1) === active;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 text-[15px] transition ${
                      isActive
                        ? 'bg-gold/10 font-semibold text-gold'
                        : 'text-ink/80 hover:bg-ink/5 hover:text-ink'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
            <a
              href={`tel:${TEL}`}
              onClick={() => setOpen(false)}
              className="mx-5 mt-auto mb-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-white shadow-md"
            >
              <Phone size={16} className="rotate-[12deg]" />
              <span>تواصل معنا الآن</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
