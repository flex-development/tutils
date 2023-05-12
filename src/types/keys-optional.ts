/**
 * @file Type Definitions - OptionalKeys
 * @module tutils/types/OptionalKeys
 */

import type ObjectPlain from './object-plain'

/**
 * Extracts all optional keys from `T`.
 *
 * @todo support nested keys
 *
 * @template T - Object type to evaluate
 */
type OptionalKeys<T extends ObjectPlain> = Exclude<
  { [K in keyof T]: T extends Record<K, T[K]> ? never : K }[keyof T],
  undefined
>

export type { OptionalKeys as default }
