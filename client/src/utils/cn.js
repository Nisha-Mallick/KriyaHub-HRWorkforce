/**
 * Lightweight className combiner.
 * Filters out falsy values and joins the rest with a space.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
