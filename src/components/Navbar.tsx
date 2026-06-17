import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Logo from './Logo';

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'مشاريعنا', href: '#about' },
  { label: 'العروض', href: '#offers' },
  { label: 'تواصل معنا', href: '#contact' },
];

const TEL_HREF = 'tel:+966500000000';

function useActiveSection() {
  const [active, setActive] = useState<string>('home');
  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.href.slice(1));
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!targets.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.1, 0.5] }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return active;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      {/* Mobile/Tablet: logo centered + hamburger on the left */}
      <div className="relative flex items-center justify-center px-5 pt-5 lg:hidden">
        <Logo className="h-12 w-auto" />
        <button
          type="button"
          aria-label="فتح القائمة"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="absolute left-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Desktop: full nav */}
      <div className="mx-auto hidden max-w-[1500px] items-center justify-between px-5 py-6 lg:flex lg:px-10 lg:py-7">
        <Logo className="h-14 w-auto lg:h-16" />

        <nav className="hidden flex-1 items-center justify-center gap-10 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative pb-2 text-[15px] transition ${
                  isActive
                    ? 'font-semibold text-gold'
                    : 'text-white/90 hover:text-white'
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
          href={TEL_HREF}
          className="hidden items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-gold-light lg:inline-flex"
        >
          <Phone size={16} className="rotate-[12deg]" />
          <span>تواصل معنا الآن</span>
        </a>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
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
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-5 py-2">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.href.slice(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
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
              href={TEL_HREF}
              onClick={() => setOpen(false)}
              className="mx-5 mt-auto mb-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-gold-light"
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
