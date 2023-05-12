/**
 * @file Type Definitions - RequiredKeys
 * @module tutils/types/RequiredKeys
 */

import type ObjectPlain from './object-plain'

/**
 * Extracts all required keys from `T`.
 *
 * @todo support nested keys
 *
 * @template T - Object type to evaluate
 */
type RequiredKeys<T extends ObjectPlain> = Exclude<
  { [K in keyof T]: T extends Record<K, T[K]> ? K : never }[keyof T],
  undefined
>

export type { RequiredKeys as default }
