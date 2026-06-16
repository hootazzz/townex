import { Users, ShieldCheck, FileText, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Feature = { Icon: LucideIcon; title: string; subtitle: string };

const FEATURES: Feature[] = [
  { Icon: Users, title: 'فريق سعودي', subtitle: 'احترافي' },
  { Icon: ShieldCheck, title: 'جودة عالية', subtitle: 'تنفيذ بمعايير دقيقة' },
  { Icon: FileText, title: 'شفافية كاملة', subtitle: 'تقارير واضحة ومستمرة' },
  { Icon: TrendingUp, title: 'نتائج حقيقية', subtitle: 'قيمة وعوائد مستدامة' },
];

export default function FeaturesRow() {
  return (
    <div className="relative z-20 mt-6 px-5 pb-2 md:-mt-28 md:mb-16 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        {/* MOBILE: 2x2 grid of self-contained cards on cream */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {FEATURES.map(({ Icon, title, subtitle }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-black/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Icon size={22} strokeWidth={1.6} />
              </span>
              <div className="text-[13px] font-bold text-ink">{title}</div>
              <div className="text-[11px] leading-[1.5] text-ink/65">{subtitle}</div>
            </div>
          ))}
        </div>

        {/* DESKTOP: horizontal row with dividers (unchanged) */}
        <div className="hidden md:flex md:justify-end">
          <div className="grid w-full max-w-[1050px] grid-cols-4">
            {FEATURES.map(({ Icon, title, subtitle }, i) => (
              <div
                key={title}
                className={`flex items-center gap-3 px-6 ${
                  i !== FEATURES.length - 1 ? 'border-l border-ink/15' : ''
                }`}
              >
                <div className="text-right">
                  <div className="text-[14px] font-bold text-ink">{title}</div>
                  <div className="mt-0.5 text-[11px] text-ink/70">{subtitle}</div>
                </div>
                <Icon className="shrink-0 text-gold" size={34} strokeWidth={1.4} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
