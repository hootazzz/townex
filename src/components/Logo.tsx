type Props = { className?: string };

export default function Logo({ className }: Props) {
  return (
    <a
      href="#home"
      aria-label="تاونكس — العودة للصفحة الرئيسية"
      className={`flex flex-col items-center leading-none lg:items-end ${className ?? ''}`}
    >
      <span className="text-3xl font-extrabold tracking-[0.04em] text-white lg:text-[34px]">
        TOWN<span className="text-gold">X</span>
      </span>
      <span className="mt-1 text-[11px] font-medium text-white/80 lg:text-xs">
        تطوير . تصميم . تسويق . إدارة أملاك
      </span>
    </a>
  );
}
