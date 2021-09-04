import type { KeysOptional } from './KeysOptional'
import type { ObjectPlain } from './ObjectPlain'

/**
 * @file Types - KeysRequired
 * @module types/KeysRequired
 */

/**
 * Constructs a type where all properties of `T` are required.
 *
 * @todo Get nested properties recursively
 * @template T - Object type
 */
export type KeysRequired<T extends ObjectPlain> = Exclude<
  keyof T,
  KeysOptional<T>
>