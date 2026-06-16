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

export default function StatsCard() {
  return (
    <div className="mx-auto max-w-[1400px]">
      {/* MOBILE: cards laid out as 2-column grid; last item spans full width */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {STATS.map(({ Icon, value, label }, i) => {
          const isText = isNaN(parseInt(value.replace('+', '')));
          const fullSpan = i === STATS.length - 1 && STATS.length % 2 !== 0;
          return (
            <div
              key={label}
              className={`flex items-center justify-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-sm ring-1 ring-black/5 ${
                fullSpan ? 'col-span-2' : ''
              }`}
            >
              <div className="text-right">
                <div
                  className={`font-extrabold text-ink ${
                    isText ? 'text-base' : 'text-2xl'
                  }`}
                >
                  {value}
                </div>
                <div className="mt-0.5 text-[11px] leading-tight text-ink/65">{label}</div>
              </div>
              <Icon className="shrink-0 text-gold" size={36} strokeWidth={1.4} />
            </div>
          );
        })}
      </div>

      {/* DESKTOP: single cream card with 5 columns (unchanged) */}
      <div className="hidden rounded-3xl bg-cream px-10 py-10 shadow-2xl shadow-black/40 md:block">
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
