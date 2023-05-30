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
  NonNullable<T> extends infer U
    ? { [K in keyof U]: U extends Record<K, U[K]> ? K : never }[keyof U]
    : never,
  undefined
>

export type { RequiredKeys as default }
