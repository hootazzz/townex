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

      {/* MOBILE overlay: light wash at top (so navy logo reads on sky), strong
          dark gradient on the lower half behind the headline + CTAs */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(244,241,235,0.55) 0%, rgba(244,241,235,0.25) 14%, rgba(11,13,18,0) 28%, rgba(11,13,18,0.6) 48%, rgba(11,13,18,0.88) 70%, rgba(11,13,18,0.97) 100%)',
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

      {/* MOBILE content — Navbar (logo) sits on the light top wash; headline
          and CTAs anchor to the bottom where the dark gradient lives so
          contrast is high and nothing collides with the villa silhouette */}
      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-md flex-col items-center px-6 pb-16 pt-44 text-center lg:hidden">
        <div className="mt-auto" />
        <h1 className="font-cairo font-extrabold tracking-tight">
          <span
            className="block whitespace-nowrap text-[32px] leading-[1.2] text-white sm:text-[40px]"
            style={{ textShadow: '0 3px 22px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)' }}
          >
            شريكك في
          </span>
          <span
            className="mt-3 block whitespace-nowrap text-[36px] leading-[1.2] text-gold-light sm:text-[44px]"
            style={{ textShadow: '0 3px 22px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)' }}
          >
            النجاح العقاري
          </span>
        </h1>

        <p
          className="mt-7 max-w-[300px] text-[14.5px] font-medium leading-[1.95] text-white/90"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
        >
          تسويق عقاري، إدارة أملاك، تصميم وإشراف هندسي بمعايير احترافية
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-3.5">
          <a
            href="https://wa.me/966501000460"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-[300px] items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[14px] font-semibold text-white shadow-xl shadow-black/30 active:bg-gold-light"
          >
            <Phone size={15} className="rotate-[12deg]" />
            <span>تواصل معنا الآن</span>
          </a>
          <a
            href="#offers"
            className="inline-flex w-full max-w-[300px] items-center justify-center gap-2 rounded-full border border-white/80 bg-white/5 px-6 py-3.5 text-[14px] font-semibold text-white backdrop-blur-sm active:bg-white/15"
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
