type Props = { className?: string };

export default function Logo({ className }: Props) {
  return (
    <div className={`flex flex-col items-center leading-none lg:items-end ${className ?? ''}`}>
      <div className="text-3xl font-extrabold tracking-[0.04em] text-white md:text-[34px]">
        TOWN<span className="text-gold">X</span>
      </div>
      <div className="mt-1 text-[11px] font-medium text-white/80 md:text-xs">
        تطوير . تصميم . تسويق . إدارة أملاك
      </div>
    </div>
  );
}
