import { Phone } from 'lucide-react';

const BANNER_IMG =
  'https://images.unsplash.com/photo-1604595568318-cea99fef25c4?auto=format&fit=crop&w=2400&q=80';

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={BANNER_IMG}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-ink/90 via-ink/80 to-ink/65" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-5 py-20 text-center md:py-24">
        <h2 className="text-3xl font-extrabold text-white md:text-[36px]">
          جاهز لبدء مشروعك القادم؟
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80 md:text-base">
          تواصل معنا اليوم ودعنا نساعدك في تحقيق أهدافك العقارية
        </p>
        <a
          href="https://wa.me/966501000460"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg transition hover:bg-gold-light"
        >
          <Phone size={16} className="rotate-[12deg]" />
          <span>تواصل معنا الآن</span>
        </a>
      </div>
    </section>
  );
}
