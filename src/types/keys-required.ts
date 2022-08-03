/**
 * @file Type Definitions - KeysRequired
 * @module tutils/types/KeysRequired
 */

import type KeysOptional from './keys-optional'
import type ObjectPlain from './object-plain'

/**
 * Creates a list of required properties in `T`.
 *
 * @todo Get nested properties recursively
 *
 * @template T - Object type
 */
type KeysRequired<T extends ObjectPlain> = Exclude<keyof T, KeysOptional<T>>

export { type KeysRequired as default }
