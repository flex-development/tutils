import type { ObjectPlain } from './ObjectPlain'

/**
 * @file Types - KeysOptional
 * @module types/KeysOptional
 */

/**
 * Constructs a type where all properties of `T` are optional.
 *
 * @todo Get nested properties recursively
 * @template T - Object type
 */
export type KeysOptional<T extends ObjectPlain> = {
  [K in keyof T]-?: undefined extends { [K2 in keyof T]: K2 }[K] ? K : never
}[keyof T]
