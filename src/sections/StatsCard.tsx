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
      <div className="rounded-3xl bg-cream px-6 py-8 shadow-2xl shadow-black/40 md:px-10 md:py-10">
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-5 md:gap-y-0">
          {STATS.map(({ Icon, value, label }, i) => {
            const isText = isNaN(parseInt(value.replace('+', '')));
            return (
              <div
                key={label}
                className={`flex items-center justify-center gap-4 px-4 md:px-6 ${
                  i !== STATS.length - 1 ? 'md:border-l md:border-black/10' : ''
                }`}
              >
                {/* Text first → visual RIGHT in RTL; Icon second → visual LEFT */}
                <div className="text-right">
                  <div
                    className={`font-extrabold text-ink ${
                      isText ? 'text-lg md:text-xl' : 'text-2xl md:text-3xl'
                    }`}
                  >
                    {value}
                  </div>
                  <div className="mt-1 text-xs text-ink/70 md:text-sm">{label}</div>
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
