import type { PropertyQuery, PropertySort } from '../types/property';

// ────────────────────────────────────────────────────────────────────────────
// Bridges the Arabic UI filter labels (dropdown values) to a typed
// PropertyQuery that PropertyService understands. Keeps pages free of
// filtering math and gives the future dashboard a reusable mapping.
// ────────────────────────────────────────────────────────────────────────────

export const AREA_OPTIONS = [
  'الكل',
  'حتى 200م²',
  '200م² - 500م²',
  '500م² - 1000م²',
  'أكثر من 1000م²',
] as const;

export const PRICE_OPTIONS = [
  'الكل',
  'حتى 500 ألف',
  '500 ألف - 2 مليون',
  '2 - 5 مليون',
  'أكثر من 5 مليون',
] as const;

export const SORT_OPTIONS = [
  'الأحدث',
  'السعر: الأقل',
  'السعر: الأعلى',
  'المساحة: الأكبر',
] as const;

export function areaBounds(label: string): Pick<PropertyQuery, 'minArea' | 'maxArea'> {
  switch (label) {
    case 'حتى 200م²':
      return { maxArea: 200 };
    case '200م² - 500م²':
      return { minArea: 200, maxArea: 500 };
    case '500م² - 1000م²':
      return { minArea: 500, maxArea: 1000 };
    case 'أكثر من 1000م²':
      return { minArea: 1000 };
    default:
      return {};
  }
}

export function priceBounds(label: string): Pick<PropertyQuery, 'minPrice' | 'maxPrice'> {
  switch (label) {
    case 'حتى 500 ألف':
      return { maxPrice: 500_000 };
    case '500 ألف - 2 مليون':
      return { minPrice: 500_000, maxPrice: 2_000_000 };
    case '2 - 5 مليون':
      return { minPrice: 2_000_000, maxPrice: 5_000_000 };
    case 'أكثر من 5 مليون':
      return { minPrice: 5_000_000 };
    default:
      return {};
  }
}

export function sortValue(label: string): PropertySort {
  switch (label) {
    case 'السعر: الأقل':
      return 'priceAsc';
    case 'السعر: الأعلى':
      return 'priceDesc';
    case 'المساحة: الأكبر':
      return 'areaDesc';
    default:
      return 'newest';
  }
}
