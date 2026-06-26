import type {
  Property,
  PropertyPurpose,
  PropertyStatus,
  PropertyType,
} from '../types/property';

// ────────────────────────────────────────────────────────────────────────────
// Display label maps + model factory. Keeps Arabic UI labels and default-fill
// logic in one place so both the public site and the future dashboard agree.
// ────────────────────────────────────────────────────────────────────────────

export const PURPOSE_LABEL: Record<PropertyPurpose, string> = {
  sale: 'للبيع',
  rent: 'للإيجار',
  invest: 'فرصة استثمارية',
};

export const STATUS_LABEL: Record<PropertyStatus, string> = {
  available: 'متاح',
  reserved: 'محجوز',
  sold: 'مباع',
  rented: 'مؤجر',
};

export const PROPERTY_TYPES: PropertyType[] = [
  'فيلا',
  'شقة',
  'دور',
  'أرض',
  'مكتب',
  'عمارة',
  'مشروع استثماري',
];

/**
 * Raw shape coming from any data source (local seed today, API later).
 * Only id/title/type/purpose/price are truly required; everything else is
 * defaulted by createProperty so partial dashboard drafts are safe.
 */
export type RawProperty = Partial<Property> &
  Pick<Property, 'id' | 'title' | 'type' | 'purpose' | 'price'>;

function slugify(input: string): string {
  return input
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^؀-ۿ\w-]/g, '');
}

/**
 * Normalizes a raw record into a complete Property, filling sensible defaults.
 * This is the single chokepoint the dashboard will reuse when creating/editing.
 */
export function createProperty(raw: RawProperty): Property {
  const now = new Date().toISOString();
  const gallery = raw.gallery ?? [];
  const coverImage = raw.coverImage ?? gallery[0] ?? '';

  return {
    id: raw.id,
    title: raw.title,
    slug: raw.slug ?? raw.id ?? slugify(raw.title),
    description: raw.description ?? raw.shortDescription ?? '',
    shortDescription: raw.shortDescription ?? raw.description ?? '',

    type: raw.type,
    purpose: raw.purpose,
    status: raw.status ?? 'available',

    price: raw.price,
    priceSuffix: raw.priceSuffix,

    city: raw.city ?? '',
    district: raw.district ?? '',
    address: raw.address ?? [raw.city, raw.district].filter(Boolean).join(' - '),

    bedrooms: raw.bedrooms ?? 0,
    bathrooms: raw.bathrooms ?? 0,
    area: raw.area ?? 0,
    parking: raw.parking ?? 0,
    yearBuilt: raw.yearBuilt ?? '',

    features: raw.features ?? [],
    gallery,
    coverImage,

    featured: raw.featured ?? false,
    published: raw.published ?? true,
    sold: raw.sold ?? raw.status === 'sold',

    coordinates: raw.coordinates ?? null,

    createdAt: raw.createdAt ?? now,
    updatedAt: raw.updatedAt ?? now,
  };
}

/** Convenience: a property's "city - district" location string. */
export function propertyLocation(p: Property): string {
  return [p.city, p.district].filter(Boolean).join(' - ');
}
