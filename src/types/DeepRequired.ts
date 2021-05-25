import type { BuiltIn } from './BuiltIn'
import type { ObjectUnknown } from './ObjectUnknown'

/**
 * @file Types - DeepRequired
 * @module types/DeepRequired
 */

/**
 * Recursive version of [`Required`][1].
 *
 * See: [type-fest - Basic][2]
 *
 * [1]: https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype
 * [2]: https://github.com/sindresorhus/type-fest/blob/main/source/basic.d.ts
 */
export type DeepRequired<T> = T extends BuiltIn
  ? NonNullable<T>
  : T extends Map<infer K, infer V>
  ? Map<DeepRequired<K>, DeepRequired<V>>
  : T extends ReadonlyMap<infer K, infer V>
  ? ReadonlyMap<DeepRequired<K>, DeepRequired<V>>
  : T extends WeakMap<infer K, infer V>
  ? WeakMap<DeepRequired<K>, DeepRequired<V>>
  : T extends Set<infer U>
  ? Set<DeepRequired<U>>
  : T extends ReadonlySet<infer U>
  ? ReadonlySet<DeepRequired<U>>
  : T extends WeakSet<infer U>
  ? WeakSet<DeepRequired<U>>
  : T extends Promise<infer U>
  ? Promise<DeepRequired<U>>
  : T extends ObjectUnknown
  ? { [K in keyof T]-?: DeepRequired<T[K]> }
  : NonNullable<T>
