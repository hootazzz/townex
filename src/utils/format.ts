/** Format a number with thousands separators (e.g. 4200000 -> "4,200,000"). */
export function formatNumber(n: number): string {
  return new Intl.NumberFormat('en-US').format(n);
}

/** Price formatted for display (without currency suffix). */
export function formatPrice(n: number): string {
  return formatNumber(n);
}
