import {
  Megaphone,
  Building,
  Pencil,
  HardHat,
  Search,
  FileText,
  Camera,
  Send,
  MessagesSquare,
  CheckCircle,
  ClipboardList,
  Wrench,
  Users,
  BarChart3,
  Eye,
  Layout,
  Sofa,
  Stamp,
  Hammer,
  PackageCheck,
  ScrollText,
  Compass,
  Activity,
  ShieldCheck,
  ListChecks,
  Award,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  Icon: LucideIcon;
  heroImage: string;
  benefits: { Icon: LucideIcon; label: string }[];
  process: { Icon: LucideIcon; title: string; body: string }[];
  gallery?: string[];
};

export const SERVICES: Service[] = [
  {
    slug: 'real-estate-marketing',
    title: 'التسويق العقاري',
    short: 'استراتيجيات تسويق احترافية للوصول إلى العملاء المستهدفين وتحقيق أفضل النتائج.',
    long:
      'نساعدك في الوصول إلى المشترين والمستثمرين المناسبين من خلال استراتيجيات تسويقية احترافية مدعومة بفهم عميق للسوق العقاري السعودي.',
    Icon: Megaphone,
    heroImage:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=80',
    benefits: [
      { Icon: BarChart3, label: 'زيادة فرص البيع' },
      { Icon: Users, label: 'الوصول للعملاء المستهدفين' },
      { Icon: Eye, label: 'تحسين ظهور العقار' },
      { Icon: Activity, label: 'تسريع عملية التسويق' },
    ],
    process: [
      { Icon: Search, title: 'دراسة العقار', body: 'تحليل خصائص العقار وتحديد القيمة السوقية المناسبة.' },
      { Icon: FileText, title: 'إعداد المحتوى', body: 'كتابة وصف احترافي يبرز مميزات العقار وموقعه.' },
      { Icon: Camera, title: 'التصوير الاحترافي', body: 'تصوير عالي الجودة للداخل والخارج بأحدث المعدات.' },
      { Icon: Send, title: 'النشر والترويج', body: 'نشر العقار على القنوات المناسبة لجمهوره المستهدف.' },
      { Icon: MessagesSquare, title: 'إدارة الاستفسارات', body: 'الرد على العملاء وترتيب المعاينات بشكل احترافي.' },
      { Icon: CheckCircle, title: 'إتمام الصفقة', body: 'متابعة التفاوض والإجراءات حتى التوقيع النهائي.' },
    ],
  },
  {
    slug: 'property-management',
    title: 'إدارة الأملاك',
    short: 'إدارة وتشغيل الأصول العقارية بكفاءة واحترافية مع متابعة مستمرة.',
    long:
      'إدارة احترافية للعقارات والأصول تضمن الحفاظ على قيمة العقار وتحقيق أفضل عائد استثماري.',
    Icon: Building,
    heroImage:
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=2000&q=80',
    benefits: [
      { Icon: Users, label: 'متابعة المستأجرين' },
      { Icon: BarChart3, label: 'تحصيل الإيجارات' },
      { Icon: Wrench, label: 'إدارة الصيانة' },
      { Icon: FileText, label: 'تقارير دورية' },
    ],
    process: [
      { Icon: ClipboardList, title: 'استلام العقار', body: 'توثيق حالة العقار ومحتوياته عند بداية الإدارة.' },
      { Icon: Eye, title: 'تقييم الوضع الحالي', body: 'دراسة الموقع والإيجار العادل والمتطلبات.' },
      { Icon: Activity, title: 'تشغيل العقار', body: 'الإعداد والتسويق وإيجاد المستأجرين المناسبين.' },
      { Icon: Users, title: 'إدارة المستأجرين', body: 'العقود والتجديدات والتواصل اليومي مع المستأجرين.' },
      { Icon: Wrench, title: 'المتابعة الدورية', body: 'صيانة وقائية وزيارات تفقدية منتظمة للعقار.' },
      { Icon: FileText, title: 'التقارير', body: 'تقارير شفافة دورية عن الإيرادات والمصروفات والحالة.' },
    ],
  },
  {
    slug: 'design-build',
    title: 'التصميم والتنفيذ',
    short: 'تصميم معماري وتنفيذ متكامل بمعايير عالية وجودة استثنائية.',
    long:
      'من الفكرة الأولى وحتى التسليم النهائي نقدم حلول تصميم وتنفيذ متكاملة بأعلى معايير الجودة.',
    Icon: Pencil,
    heroImage:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80',
    benefits: [
      { Icon: Pencil, label: 'تصميم احترافي' },
      { Icon: Compass, label: 'حلول مبتكرة' },
      { Icon: Award, label: 'تنفيذ عالي الجودة' },
      { Icon: ShieldCheck, label: 'متابعة دقيقة' },
    ],
    process: [
      { Icon: Search, title: 'دراسة الاحتياجات', body: 'فهم متطلبات العميل ودراسة الموقع والميزانية.' },
      { Icon: Layout, title: 'التصميم المعماري', body: 'إعداد المخططات المعمارية والواجهات بأسلوب عصري.' },
      { Icon: Sofa, title: 'التصميم الداخلي', body: 'تصاميم داخلية تجمع بين الجمال والعملية.' },
      { Icon: Stamp, title: 'اعتماد المخططات', body: 'إنهاء التراخيص والاعتمادات من الجهات المعنية.' },
      { Icon: Hammer, title: 'التنفيذ', body: 'بناء المشروع وفق المعايير والمواصفات المعتمدة.' },
      { Icon: PackageCheck, title: 'التسليم النهائي', body: 'الفحص النهائي والتسليم بحالة جاهزة للاستخدام.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    slug: 'engineering-supervision',
    title: 'الإشراف الهندسي',
    short: 'إشراف هندسي دقيق يضمن جودة التنفيذ والالتزام بالمواصفات.',
    long:
      'متابعة هندسية دقيقة تضمن جودة التنفيذ والالتزام بالمخططات والمواصفات المعتمدة.',
    Icon: HardHat,
    heroImage:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80',
    benefits: [
      { Icon: ShieldCheck, label: 'ضمان الجودة' },
      { Icon: ListChecks, label: 'تقليل الأخطاء' },
      { Icon: Users, label: 'متابعة المقاولين' },
      { Icon: PackageCheck, label: 'استلام الأعمال' },
    ],
    process: [
      { Icon: ScrollText, title: 'مراجعة المخططات', body: 'دراسة دقيقة للمخططات والمواصفات قبل البدء.' },
      { Icon: Eye, title: 'زيارات ميدانية', body: 'زيارات منتظمة لموقع العمل لمتابعة سير التنفيذ.' },
      { Icon: Activity, title: 'متابعة التنفيذ', body: 'الإشراف على التزام المقاولين بالخطة الزمنية.' },
      { Icon: BarChart3, title: 'تقارير الجودة', body: 'تقارير دورية حول جودة التنفيذ والتقدم في العمل.' },
      { Icon: Wrench, title: 'معالجة الملاحظات', body: 'متابعة تصحيح أي ملاحظات فنية بشكل فوري.' },
      { Icon: PackageCheck, title: 'الاستلام النهائي', body: 'فحص الأعمال النهائية وتسليمها للعميل.' },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string): Service[] {
  return SERVICES.filter((s) => s.slug !== slug).slice(0, 3);
}
