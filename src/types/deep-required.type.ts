/**
 * @file Type Definitions - DeepRequired
 * @module tutils/types/DeepRequired
 */

import type BuiltIn from './built-in.type'
import type ObjectUnknown from './object-unknown.type'

/**
 * Recursive version of [`Required`][1].
 *
 * [1]: https://typescriptlang.org/docs/handbook/utility-types.html#requiredtype
 *
 * @see https://github.com/sindresorhus/type-fest/blob/main/source/basic.d.ts
 */
type DeepRequired<T> = T extends BuiltIn ? NonNullable<T>
  : T extends Map<infer K, infer V> ? Map<DeepRequired<K>, DeepRequired<V>>
  : T extends ReadonlyMap<infer K, infer V>
    ? ReadonlyMap<DeepRequired<K>, DeepRequired<V>>
  : T extends WeakMap<infer K, infer V>
    ? WeakMap<DeepRequired<K>, DeepRequired<V>>
  : T extends Set<infer U> ? Set<DeepRequired<U>>
  : T extends ReadonlySet<infer U> ? ReadonlySet<DeepRequired<U>>
  : T extends WeakSet<infer U> ? WeakSet<DeepRequired<U>>
  : T extends Promise<infer U> ? Promise<DeepRequired<U>>
  : T extends ObjectUnknown ? { [K in keyof T]-?: DeepRequired<T[K]> }
  : NonNullable<T>

export default DeepRequired
