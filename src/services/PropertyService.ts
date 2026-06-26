import type {
  Property,
  PropertyQuery,
  PropertyStats,
} from '../types/property';
import { propertyRepository } from '../api/propertyRepository';

// ────────────────────────────────────────────────────────────────────────────
// PropertyService — the SINGLE entry point every property-aware page/component
// uses (Home, Properties, Property Details, Search, Filters). UI never imports
// the repository, seed, or model factory directly.
//
// When the admin dashboard + backend arrive, write operations (create/update/
// delete/reorder images/setCover/setStatus/publish) get added here and proxied
// to the repository — the read API below stays stable.
// ────────────────────────────────────────────────────────────────────────────

function matches(p: Property, q: PropertyQuery): boolean {
  if (q.publishedOnly !== false && !p.published) return false;
  if (q.purpose && q.purpose !== 'all' && p.purpose !== q.purpose) return false;
  if (q.type && q.type !== 'all' && p.type !== q.type) return false;
  if (q.city && q.city !== 'all' && p.city !== q.city) return false;
  if (typeof q.minArea === 'number' && p.area < q.minArea) return false;
  if (typeof q.maxArea === 'number' && p.area > q.maxArea) return false;
  if (typeof q.minPrice === 'number' && p.price < q.minPrice) return false;
  if (typeof q.maxPrice === 'number' && p.price > q.maxPrice) return false;
  if (q.search && q.search.trim()) {
    const t = q.search.trim();
    const hay = `${p.title} ${p.district} ${p.city} ${p.type}`;
    if (!hay.includes(t)) return false;
  }
  return true;
}

function sortList(list: Property[], sort?: PropertyQuery['sort']): Property[] {
  const out = list.slice();
  switch (sort) {
    case 'priceAsc':
      return out.sort((a, b) => a.price - b.price);
    case 'priceDesc':
      return out.sort((a, b) => b.price - a.price);
    case 'areaDesc':
      return out.sort((a, b) => b.area - a.area);
    case 'newest':
    default:
      return out.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  }
}

export const PropertyService = {
  /** All published properties (newest first). */
  getAll(): Property[] {
    return sortList(
      propertyRepository.findAll().filter((p) => p.published),
      'newest'
    );
  },

  getById(id: string): Property | undefined {
    return propertyRepository.findById(id);
  },

  getBySlug(slug: string): Property | undefined {
    return propertyRepository.findBySlug(slug);
  },

  /**
   * Featured published properties. When a limit is given and there aren't
   * enough featured listings, it's topped up with the newest others so
   * fixed-size displays (e.g. the home carousel) stay full.
   */
  getFeatured(limit?: number): Property[] {
    const all = PropertyService.getAll();
    const featured = all.filter((p) => p.featured);
    if (typeof limit !== 'number') return featured.length ? featured : all;
    const rest = all.filter((p) => !p.featured);
    return [...featured, ...rest].slice(0, limit);
  },

  /** Related properties (same city or type), excluding the given id. */
  getRelated(id: string, limit = 3): Property[] {
    const current = propertyRepository.findById(id);
    const all = PropertyService.getAll().filter((p) => p.id !== id);
    if (!current) return all.slice(0, limit);
    return all
      .sort((a, b) => {
        const am = (a.city === current.city ? 1 : 0) + (a.type === current.type ? 1 : 0);
        const bm = (b.city === current.city ? 1 : 0) + (b.type === current.type ? 1 : 0);
        return bm - am;
      })
      .slice(0, limit);
  },

  /** Filtered + sorted query used by the Properties page / search. */
  query(q: PropertyQuery = {}): Property[] {
    const filtered = propertyRepository.findAll().filter((p) => matches(p, q));
    return sortList(filtered, q.sort);
  },

  /** Aggregate counts for stat cards / dashboard widgets. */
  getStats(): PropertyStats {
    const all = PropertyService.getAll();
    return {
      total: all.length,
      forSale: all.filter((p) => p.purpose === 'sale').length,
      forRent: all.filter((p) => p.purpose === 'rent').length,
      investment: all.filter((p) => p.purpose === 'invest').length,
    };
  },
};
