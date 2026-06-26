// ────────────────────────────────────────────────────────────────────────────
// Property domain types — single source of truth for the data model.
// UI components and the (future) admin dashboard both depend on these.
// ────────────────────────────────────────────────────────────────────────────

/** Physical/listing category of the property. */
export type PropertyType =
  | 'فيلا'
  | 'شقة'
  | 'دور'
  | 'أرض'
  | 'مكتب'
  | 'عمارة'
  | 'مشروع استثماري';

/** What the property is listed for. */
export type PropertyPurpose = 'sale' | 'rent' | 'invest';

/** Lifecycle status shown on the listing. */
export type PropertyStatus = 'available' | 'reserved' | 'sold' | 'rented';

export interface Coordinates {
  lat: number;
  lng: number;
}

/**
 * Full property model. Optional fields are tolerated so the future dashboard
 * can create partial drafts; the PropertyService normalizes raw input into a
 * complete object via the model factory.
 */
export interface Property {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;

  type: PropertyType;
  purpose: PropertyPurpose;
  status: PropertyStatus;

  price: number;
  /** Optional suffix shown after the price, e.g. "/ سنوياً" for rentals. */
  priceSuffix?: string;

  city: string;
  district: string;
  address: string;

  bedrooms: number;
  bathrooms: number;
  /** Area in square meters. */
  area: number;
  parking: number;
  yearBuilt: string;

  features: string[];
  gallery: string[];
  coverImage: string;

  featured: boolean;
  published: boolean;
  sold: boolean;

  coordinates: Coordinates | null;

  createdAt: string;
  updatedAt: string;
}

/** Filter/query criteria accepted by PropertyService.query(). */
export interface PropertyQuery {
  purpose?: PropertyPurpose | 'all';
  type?: PropertyType | 'all';
  city?: string | 'all';
  /** Inclusive area bounds in m². */
  minArea?: number;
  maxArea?: number;
  /** Inclusive price bounds. */
  minPrice?: number;
  maxPrice?: number;
  /** Free-text search across title/district/city/type. */
  search?: string;
  /** Only return published listings (default true for the public site). */
  publishedOnly?: boolean;
  sort?: PropertySort;
}

export type PropertySort = 'newest' | 'priceAsc' | 'priceDesc' | 'areaDesc';

/** Aggregate counts for stat displays / dashboard widgets. */
export interface PropertyStats {
  total: number;
  forSale: number;
  forRent: number;
  investment: number;
}
