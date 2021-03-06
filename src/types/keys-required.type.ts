/**
 * @file Type Definitions - KeysRequired
 * @module tutils/types/KeysRequired
 */

import type KeysOptional from './keys-optional.type'
import type ObjectPlain from './object-plain.type'

/**
 * Creates a list of required properties in `T`.
 *
 * @todo Get nested properties recursively
 *
 * @template T - Object type
 */
type KeysRequired<T extends ObjectPlain> = Exclude<keyof T, KeysOptional<T>>

export default KeysRequired
