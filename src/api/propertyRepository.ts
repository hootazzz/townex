import type { Property } from '../types/property';
import { createProperty } from '../models/property.model';
import { PROPERTY_SEED } from '../data/properties';

// ────────────────────────────────────────────────────────────────────────────
// Data-source boundary. PropertyService talks ONLY to this repository, never to
// the raw seed/API directly. Swapping to a backend later = reimplement these
// functions (e.g. fetch from Supabase/REST) without touching services or UI.
//
// Methods are synchronous today because the source is local. When a real
// backend is introduced, change the return types to Promise<…> here and in
// PropertyService; only the service layer + its callers adapt — pages already
// funnel through the service.
// ────────────────────────────────────────────────────────────────────────────

let cache: Property[] | null = null;

function load(): Property[] {
  if (!cache) {
    cache = PROPERTY_SEED.map(createProperty);
  }
  return cache;
}

export const propertyRepository = {
  findAll(): Property[] {
    return load();
  },
  findById(id: string): Property | undefined {
    return load().find((p) => p.id === id);
  },
  findBySlug(slug: string): Property | undefined {
    return load().find((p) => p.slug === slug || p.id === slug);
  },
};
