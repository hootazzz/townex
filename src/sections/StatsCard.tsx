import { Building2, Construction, UserRound, BadgeCheck, Palmtree } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Stat = { Icon: LucideIcon; value: string; label: string };

const STATS: Stat[] = [
  { Icon: Building2, value: '+500', label: 'عقار تم تسويقه' },
  { Icon: Construction, value: '+100', label: 'مشروع منفذ' },
  { Icon: UserRound, value: '+300', label: 'عميل' },
  { Icon: BadgeCheck, value: '15', label: 'سنة خبرة' },
  { Icon: Palmtree, value: 'فريق سعودي', label: 'خبرات متخصصة' },
];

// Order mandated by the design brief, with shortened mobile labels:
//   500+ عقار   |  300+ عميل
//   100+ مشروع  |  15 سنة خبرة
const MOBILE_STATS: { value: string; label: string }[] = [
  { value: '+500', label: 'عقار' },
  { value: '+300', label: 'عميل' },
  { value: '+100', label: 'مشروع' },
  { value: '15', label: 'سنة خبرة' },
];

export default function StatsCard() {
  return (
    <div className="mx-auto max-w-[1400px]">
      {/* MOBILE: single elegant 2x2 section — no cards, hairline dividers, generous space */}
      <div className="px-6 py-10 lg:hidden">
        <div className="grid grid-cols-2 [direction:ltr]">
          {MOBILE_STATS.map((s, i) => {
            const isRightCol = i % 2 === 1; // 1, 3
            const isBottomRow = i >= 2;     // 2, 3
            return (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center py-8 text-center [direction:rtl] ${
                  isRightCol ? 'border-l border-ink/10' : ''
                } ${isBottomRow ? 'border-t border-ink/10' : ''}`}
              >
                <div className="text-[34px] font-extrabold leading-none text-gold">{s.value}</div>
                <div className="mt-2 text-[12px] tracking-wide text-ink/65">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DESKTOP: single cream card with 5 columns (unchanged) */}
      <div className="hidden rounded-3xl bg-cream px-10 py-10 shadow-2xl shadow-black/40 lg:block">
        <div className="grid grid-cols-5">
          {STATS.map(({ Icon, value, label }, i) => {
            const isText = isNaN(parseInt(value.replace('+', '')));
            return (
              <div
                key={label}
                className={`flex items-center justify-center gap-4 px-6 ${
                  i !== STATS.length - 1 ? 'border-l border-black/10' : ''
                }`}
              >
                <div className="text-right">
                  <div
                    className={`font-extrabold text-ink ${
                      isText ? 'text-xl' : 'text-3xl'
                    }`}
                  >
                    {value}
                  </div>
                  <div className="mt-1 text-sm text-ink/70">{label}</div>
                </div>
                <Icon className="shrink-0 text-gold" size={42} strokeWidth={1.4} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
