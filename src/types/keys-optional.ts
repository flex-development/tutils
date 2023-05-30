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
  NonNullable<T> extends infer U
    ? { [K in keyof U]: U extends Record<K, U[K]> ? never : K }[keyof U]
    : never,
  undefined
>

export type { OptionalKeys as default }
