import { Phone, ChevronLeft } from 'lucide-react';
import heroVilla from '../assets/hero-villa.jpg';

const VILLA_IMG = heroVilla;

export default function Hero() {
  return (
    <section className="relative min-h-[860px] w-full overflow-hidden">
      {/* Background image */}
      <img
        src={VILLA_IMG}
        alt="Luxury villa"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Very subtle left-side wash to lift text off the sky */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(244,241,235,0.25) 0%, rgba(244,241,235,0.08) 30%, rgba(244,241,235,0) 50%)',
        }}
      />
      {/* Bottom fade so features row reads clearly */}
      <div
        className="absolute inset-x-0 bottom-0 h-56"
        style={{
          background:
            'linear-gradient(0deg, rgba(244,241,235,0.95) 0%, rgba(244,241,235,0) 100%)',
        }}
      />

      {/* Content — text on the visual LEFT over the open sky */}
      <div className="relative z-10 mx-auto flex min-h-[820px] max-w-[1500px] justify-end px-5 pt-40 md:px-10 md:pt-44">
        <div className="w-full max-w-[480px] text-right">
          <h1 className="font-cairo text-5xl font-extrabold leading-[1.08] text-ink md:text-[72px] md:leading-[1.05]">
            <span className="block whitespace-nowrap">شريكك في</span>
            <span className="block whitespace-nowrap bg-gradient-to-l from-gold to-gold-light bg-clip-text text-transparent">
              النجاح العقاري
            </span>
          </h1>

          <p className="mt-7 text-[15px] leading-[1.7] text-ink/80 md:text-base">
            تسويق عقاري، إدارة أملاك، تصميم وإشراف هندسي
            <br />
            بمعايير احترافية
          </p>

          {/* Buttons — DOM order: outlined first → visual RIGHT; gold second → visual LEFT */}
          <div className="mt-12 flex flex-wrap-reverse items-center justify-end gap-4">
            <a
              href="#offers"
              className="inline-flex items-center gap-2 rounded-full border border-ink/70 px-7 py-3.5 text-[14px] font-semibold text-ink transition hover:bg-ink/5"
            >
              <ChevronLeft size={16} />
              <span>استعرض العروض</span>
            </a>
            <a
              href="#contact"
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
