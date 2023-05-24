/**
 * @file Type Definitions - RequiredKeys
 * @module tutils/types/RequiredKeys
 */

/**
 * Extracts all required keys from `T`.
 *
 * @template T - Type to evaluate
 */
type RequiredKeys<T> = Exclude<
  { [K in keyof T]: T extends Record<K, T[K]> ? K : never }[keyof T],
  undefined
>

export type { RequiredKeys as default }
