/**
 * @file Type Definitions - KeysRequired
 * @module tutils/types/KeysRequired
 */

import type ObjectPlain from './object-plain'

/**
 * Extracts all required keys from `T`.
 *
 * @template T - Object type
 */
type KeysRequired<T extends ObjectPlain> = Exclude<
  { [K in keyof T]: T extends Record<K, T[K]> ? K : never }[keyof T],
  undefined
>

export { type KeysRequired as default }
