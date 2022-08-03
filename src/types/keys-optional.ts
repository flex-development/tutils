/**
 * @file Type Definitions - KeysOptional
 * @module tutils/types/KeysOptional
 */

import type ObjectPlain from './object-plain'

/**
 * Creates a list of optional properties in `T`.
 *
 * @todo Get nested properties recursively
 *
 * @template T - Object type
 */
type KeysOptional<T extends ObjectPlain> = {
  [K in keyof T]-?: undefined extends { [K2 in keyof T]: K2 }[K] ? K : never
}[keyof T]

export { type KeysOptional as default }
