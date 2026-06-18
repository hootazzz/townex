import { useEffect, useState } from 'react';
import { Phone, Menu } from 'lucide-react';
import Logo from './Logo';
import MobileDrawer, { type NavItem } from './MobileDrawer';

const NAV_ITEMS: NavItem[] = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'مشاريعنا', href: '#offers' },
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
  const activeHref = `#${active}`;

  return (
    <>
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
      </header>

      <MobileDrawer
        open={open}
        onClose={() => setOpen(false)}
        items={NAV_ITEMS}
        activeHref={activeHref}
        telHref={TEL_HREF}
      />
    </>
  );
}
