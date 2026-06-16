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
    <div className="relative z-20 -mt-28 mb-16 px-5 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex justify-end">
          {/* In RTL, justify-end pushes block to the visual LEFT */}
          <div className="grid w-full max-w-[1050px] grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0">
            {FEATURES.map(({ Icon, title, subtitle }, i) => (
              <div
                key={title}
                className={`flex items-center gap-3 px-3 md:px-6 ${
                  i !== FEATURES.length - 1 ? 'md:border-l md:border-ink/15' : ''
                }`}
              >
                {/* Text first (DOM) → visual RIGHT in RTL; Icon second → visual LEFT */}
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
