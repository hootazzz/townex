import logoSrc from '../assets/townex-logo.png';

type Props = { className?: string };

export default function Logo({ className }: Props) {
  return (
    <a
      href="#home"
      aria-label="تاونكس للتطوير العقاري — الصفحة الرئيسية"
      className={`inline-block ${className ?? ''}`}
    >
      <img
        src={logoSrc}
        alt="تاونكس للتطوير العقاري"
        decoding="async"
        className="h-full w-auto object-contain"
      />
    </a>
  );
}
