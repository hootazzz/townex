import { UserRound, Building2, ShieldCheck, FileText } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const OFFICE_IMG =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80';

type Feature = { Icon: LucideIcon; title: string; body: string };

const FEATURES: Feature[] = [
  {
    Icon: Building2,
    title: 'إدارة احترافية للأصول',
    body: 'نعتني بأصولك ونرفع كفاءة تشغيلها وعوائدها',
  },
  {
    Icon: UserRound,
    title: 'فريق سعودي متخصص',
    body: 'كوادر وطنية بخبرة واسعة في التطوير والتسويق والإدارة',
  },
  {
    Icon: ShieldCheck,
    title: 'جودة تنفيذ عالية',
    body: 'التزام بأعلى معايير الجودة في التصميم والتنفيذ',
  },
  {
    Icon: FileText,
    title: 'تقارير ومتابعة مستمرة',
    body: 'تقارير دورية وشفافية كاملة في كل خطوة',
  },
];

export default function CompanyExpertise() {
  return (
    <section className="bg-cream px-0 py-16 md:py-20">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-0 md:grid-cols-2 md:gap-14 md:px-10">
        {/* Image left (DOM order: text first → visual RIGHT in RTL; image second → visual LEFT) */}
        <div className="px-5 md:order-2 md:px-0">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={OFFICE_IMG}
              alt="مكتب تاونكس"
              loading="lazy"
              decoding="async"
              className="h-[420px] w-full object-cover md:h-[480px]"
            />
          </div>
        </div>

        {/* Content right */}
        <div className="px-5 text-right md:order-1 md:px-0">
          <h2 className="text-3xl font-extrabold leading-tight text-ink md:text-[36px]">
            خبرة هندسية ورؤية استثمارية
          </h2>
          <p className="mt-5 text-[15px] leading-[1.9] text-ink/75">
            نجمع بين الخبرة الهندسية وفهم السوق العقاري لتقديم حلول متكاملة تحقق قيمة مستدامة للملاك والمستثمرين.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-y-7 sm:grid-cols-2 sm:gap-x-8">
            {FEATURES.map(({ Icon, title, body }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="text-right">
                  <h3 className="text-[15px] font-bold text-ink">{title}</h3>
                  <p className="mt-1 text-[12.5px] leading-[1.7] text-ink/65">{body}</p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
