/**
 * @file Type Definitions - KeysOptional
 * @module tutils/types/KeysOptional
 */

import type ObjectPlain from './object-plain'

/**
 * Extracts all optional keys from `T`.
 *
 * @template T - Object type
 */
type KeysOptional<T extends ObjectPlain> = Exclude<
  { [K in keyof T]: T extends Record<K, T[K]> ? never : K }[keyof T],
  undefined
>

export { type KeysOptional as default }
