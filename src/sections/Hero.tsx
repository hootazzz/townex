import { Phone, ChevronLeft } from 'lucide-react';
import heroVilla from '../assets/hero-villa.jpg';

const VILLA_IMG = heroVilla;

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden lg:min-h-[860px]">
      {/* Background image */}
      <img
        src={VILLA_IMG}
        alt=""
        // @ts-expect-error — fetchpriority isn't in React's IMG type yet
        fetchpriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[70%_center] lg:object-center"
      />

      {/* MOBILE overlay: vertical dark gradient for text legibility */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,13,18,0.75) 0%, rgba(11,13,18,0.65) 25%, rgba(11,13,18,0.55) 55%, rgba(11,13,18,0.7) 80%, rgba(11,13,18,0.95) 100%)',
        }}
      />

      {/* DESKTOP overlays: subtle right-side cream wash + bottom fade */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            'linear-gradient(90deg, rgba(244,241,235,0.25) 0%, rgba(244,241,235,0.08) 30%, rgba(244,241,235,0) 50%)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 hidden h-56 lg:block"
        style={{
          background:
            'linear-gradient(0deg, rgba(244,241,235,0.95) 0%, rgba(244,241,235,0) 100%)',
        }}
      />

      {/* MOBILE content — single balanced stack with consistent vertical rhythm */}
      <div className="relative z-10 mx-auto flex max-w-md flex-col items-center px-6 pb-20 pt-24 text-center lg:hidden">
        <h1
          className="font-cairo font-extrabold leading-[1.15] text-white"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,.35)' }}
        >
          <span className="block whitespace-nowrap text-[30px] sm:text-[38px]">شريكك في</span>
          <span className="mt-2 block whitespace-nowrap bg-gradient-to-l from-gold to-gold-light bg-clip-text text-[34px] text-transparent sm:text-[42px]">
            النجاح العقاري
          </span>
        </h1>

        <p
          className="mt-8 max-w-[320px] text-[14px] leading-[1.85] text-white/85"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,.35)' }}
        >
          تسويق عقاري، إدارة أملاك، تصميم وإشراف هندسي بمعايير احترافية
        </p>

        <div className="mt-12 flex w-full flex-col items-center gap-3.5">
          <a
            href="https://wa.me/966501000460"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[14px] font-semibold text-white shadow-lg active:bg-gold-light"
          >
            <Phone size={15} className="rotate-[12deg]" />
            <span>تواصل معنا الآن</span>
          </a>
          <a
            href="#offers"
            className="inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full border border-white/80 px-6 py-3.5 text-[14px] font-semibold text-white active:bg-white/10"
          >
            <ChevronLeft size={16} />
            <span>استعرض العروض</span>
          </a>
        </div>
      </div>

      {/* DESKTOP content — left-positioned, dark text on sky */}
      <div className="relative z-10 mx-auto hidden min-h-[820px] max-w-[1500px] justify-end px-5 pt-36 lg:flex lg:px-10 lg:pt-[150px]">
        <div className="w-full max-w-[480px] text-right">
          <h1 className="font-cairo text-5xl font-extrabold leading-[1.08] text-ink lg:text-[72px] lg:leading-[1.05]">
            <span className="block whitespace-nowrap">شريكك في</span>
            <span className="mt-2 block whitespace-nowrap bg-gradient-to-l from-gold to-gold-light bg-clip-text text-transparent">
              النجاح العقاري
            </span>
          </h1>

          <p className="mt-9 text-[15px] leading-[1.85] text-ink/80 lg:text-base">
            تسويق عقاري، إدارة أملاك، تصميم وإشراف هندسي
            <br />
            بمعايير احترافية
          </p>

          <div className="mt-14 flex flex-wrap-reverse items-center justify-end gap-4">
            <a
              href="#offers"
              className="inline-flex items-center gap-2 rounded-full border border-ink/70 px-7 py-3.5 text-[14px] font-semibold text-ink transition hover:bg-ink/5"
            >
              <ChevronLeft size={16} />
              <span>استعرض العروض</span>
            </a>
            <a
              href="https://wa.me/966501000460"
            target="_blank"
            rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[14px] font-semibold text-white shadow-lg transition hover:bg-gold-light"
            >
              <Phone size={15} className="rotate-[12deg]" />
              <span>تواصل معنا الآن</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
