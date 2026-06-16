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
    <div className="relative z-20 px-6 pb-14 pt-16 lg:-mt-20 lg:mb-20 lg:px-10 lg:pb-0 lg:pt-0">
      <div className="mx-auto max-w-[1500px]">
        {/* MOBILE: minimal 2x2, no cards — generous whitespace, icon stacked above text */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:hidden">
          {FEATURES.map(({ Icon, title, subtitle }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <Icon size={28} strokeWidth={1.4} className="text-gold" />
              <div className="mt-3 text-[14px] font-bold tracking-wide text-ink">{title}</div>
              <div className="mt-1 text-[11.5px] leading-[1.6] text-ink/55">{subtitle}</div>
            </div>
          ))}
        </div>

        {/* DESKTOP: horizontal row with dividers (unchanged) */}
        <div className="hidden lg:flex lg:justify-end">
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
