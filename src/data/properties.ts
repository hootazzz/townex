export type Listing = 'sale' | 'rent' | 'invest';
export type PType = 'فيلا' | 'شقة' | 'دور' | 'أرض' | 'مكتب' | 'عمارة' | 'مشروع استثماري';

export type Property = {
  id: string;
  title: string;
  city: string;
  district: string;
  listing: Listing;
  type: PType;
  area: number;
  price: number;
  priceSuffix?: string;
  rooms?: number;
  baths?: number;
  parking?: string;
  usage?: string;
  yearBuilt?: string;
  image: string;
  gallery?: string[];
};

export const LISTING_LABEL: Record<Listing, string> = {
  sale: 'للبيع',
  rent: 'للإيجار',
  invest: 'فرصة استثمارية',
};

export const PROPERTIES: Property[] = [
  {
    id: 'villa-narjis-01',
    title: 'فيلا فاخرة في النرجس',
    city: 'الرياض',
    district: 'النرجس',
    listing: 'sale',
    type: 'فيلا',
    area: 450,
    price: 4200000,
    rooms: 5,
    baths: 7,
    yearBuilt: '2024',
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    id: 'apt-malqa-02',
    title: 'شقة فاخرة في الملقا',
    city: 'الرياض',
    district: 'الملقا',
    listing: 'rent',
    type: 'شقة',
    area: 180,
    price: 120000,
    priceSuffix: '/ سنوياً',
    rooms: 3,
    baths: 4,
    yearBuilt: '2023',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'invest-jeddah-03',
    title: 'مبنى تجاري استثماري',
    city: 'جدة',
    district: 'شارع التحلية',
    listing: 'invest',
    type: 'عمارة',
    area: 2250,
    price: 16500000,
    parking: 'مواقف خاصة',
    usage: '4 أدوار',
    yearBuilt: '2022',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'townhouse-yasmin-04',
    title: 'دور فاخر',
    city: 'الرياض',
    district: 'الياسمين',
    listing: 'sale',
    type: 'دور',
    area: 250,
    price: 2650000,
    rooms: 4,
    baths: 5,
    yearBuilt: '2024',
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'office-olaya-05',
    title: 'مكتب إداري راقي',
    city: 'الرياض',
    district: 'العليا',
    listing: 'rent',
    type: 'مكتب',
    area: 110,
    price: 85000,
    priceSuffix: '/ سنوياً',
    usage: 'مكتب مفتوح',
    parking: 'دورة مياه',
    yearBuilt: '2023',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'land-north-06',
    title: 'أرض سكنية استثمارية',
    city: 'الرياض',
    district: 'شمال الرياض',
    listing: 'invest',
    type: 'أرض',
    area: 600,
    price: 3900000,
    usage: 'سكني',
    parking: 'شارع 20م',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
  },
];

export function getProperty(id: string): Property | undefined {
  return PROPERTIES.find((p) => p.id === id);
}

export function getSimilar(id: string, count = 3): Property[] {
  const current = getProperty(id);
  if (!current) return PROPERTIES.slice(0, count);
  return PROPERTIES.filter((p) => p.id !== id)
    .sort((a, b) => {
      const aMatch = (a.city === current.city ? 1 : 0) + (a.type === current.type ? 1 : 0);
      const bMatch = (b.city === current.city ? 1 : 0) + (b.type === current.type ? 1 : 0);
      return bMatch - aMatch;
    })
    .slice(0, count);
}
