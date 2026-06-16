import { Phone } from 'lucide-react';
import Logo from './Logo';

const NAV_ITEMS: { label: string; active?: boolean }[] = [
  { label: 'الرئيسية', active: true },
  { label: 'من نحن' },
  { label: 'خدماتنا' },
  { label: 'عروضنا' },
  { label: 'تواصل معنا' },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      {/* Mobile/Tablet: logo centered only */}
      <div className="flex items-center justify-center px-5 pt-5 lg:hidden">
        <Logo className="h-12 w-auto" />
      </div>

      {/* Desktop: full nav */}
      <div className="mx-auto hidden max-w-[1500px] items-center justify-between px-5 py-6 lg:flex lg:px-10 lg:py-7">
        {/* Logo first in DOM → visual RIGHT in RTL */}
        <Logo className="h-14 w-auto md:h-16" />

        {/* Nav items (center) */}
        <nav className="hidden flex-1 items-center justify-center gap-10 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`relative pb-2 text-[15px] transition ${
                item.active
                  ? 'font-semibold text-gold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
              {item.active && (
                <span className="absolute -bottom-0.5 right-1/2 h-[2px] w-8 translate-x-1/2 rounded-full bg-gold" />
              )}
            </a>
          ))}
        </nav>

        {/* CTA last in DOM → visual LEFT in RTL */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-gold-light md:inline-flex"
        >
          <Phone size={16} className="rotate-[12deg]" />
          <span>تواصل معنا الآن</span>
        </a>
      </div>
    </header>
  );
}
