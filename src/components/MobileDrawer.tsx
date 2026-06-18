import { useEffect } from 'react';
import { Phone, X as XIcon } from 'lucide-react';

export type NavItem = { label: string; href: string };

type Props = {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  activeHref?: string;
  telHref: string;
};

export default function MobileDrawer({ open, onClose, items, activeHref, telHref }: Props) {
  // Lock body scroll while open + close on Escape
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Slide-in panel from the visual right (RTL: translate +100% = off-screen right) */}
      <div
        className={`absolute inset-y-0 right-0 flex w-[82%] max-w-[340px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <span className="text-xl font-extrabold tracking-wide text-ink">
            TOWN<span className="text-gold">X</span>
          </span>
          <button
            type="button"
            aria-label="إغلاق القائمة"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-ink/5"
          >
            <XIcon size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-5 py-2">
          {items.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={onClose}
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
          href={telHref}
          onClick={onClose}
          className="mx-5 mt-auto mb-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-gold-light"
        >
          <Phone size={16} className="rotate-[12deg]" />
          <span>تواصل معنا الآن</span>
        </a>
      </div>
    </div>
  );
}
