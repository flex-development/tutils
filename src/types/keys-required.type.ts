import type KeysOptional from './keys-optional.type'
import type ObjectPlain from './object-plain.type'

/**
 * @file Type Definitions - KeysRequired
 * @module tutils/types/KeysRequired
 */

/**
 * Constructs a type where all properties of `T` are required.
 *
 * @todo Get nested properties recursively
 * @template T - Object type
 */
type KeysRequired<T extends ObjectPlain> = Exclude<keyof T, KeysOptional<T>>

export default KeysRequired
