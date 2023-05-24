/**
 * @file Type Definitions - OptionalKeys
 * @module tutils/types/OptionalKeys
 */

/**
 * Extracts all optional keys from `T`.
 *
 * @template T - Type to evaluate
 */
type OptionalKeys<T> = Exclude<
  { [K in keyof T]: T extends Record<K, T[K]> ? never : K }[keyof T],
  undefined
>

export type { OptionalKeys as default }
