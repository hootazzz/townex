import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';
import MobileDrawer, { type NavItem } from './MobileDrawer';

const TEL = '+966111234567';

const NAV_ITEMS: NavItem[] = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'مشاريعنا', href: '#offers' },
  { label: 'العروض', href: '#offers' },
  { label: 'تواصل معنا', href: '#contact' },
];

type Props = {
  active: 'home' | 'about' | 'services' | 'offers' | 'contact';
};

export default function SolidNavbar({ active }: Props) {
  const [open, setOpen] = useState(false);
  const activeHref = `#${active}`;

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-black/5 bg-white/95 backdrop-blur">
        {/* Mobile/Tablet */}
        <div className="relative flex items-center justify-center px-5 py-4 lg:hidden">
          <a
            href="#home"
            aria-label="الصفحة الرئيسية"
            className="text-2xl font-extrabold tracking-wide text-ink"
          >
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
      </header>

      <MobileDrawer
        open={open}
        onClose={() => setOpen(false)}
        items={NAV_ITEMS}
        activeHref={activeHref}
        telHref={`tel:${TEL}`}
      />
    </>
  );
}
