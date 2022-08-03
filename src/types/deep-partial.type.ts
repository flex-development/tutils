/**
 * @file Type Definitions - DeepPartial
 * @module tutils/types/DeepPartial
 */

import type BuiltIn from './built-in.type'
import type IsTuple from './is-tuple.type'
import type ObjectUnknown from './object-unknown.type'

/**
 * Recursive version of [`Partial`][1].
 *
 * [1]: https://typescriptlang.org/docs/handbook/utility-types.html#partialtype
 *
 * @template T - Value type
 */
type DeepPartial<T> = T extends BuiltIn
  ? T
  : T extends Map<infer K, infer V>
  ? Map<DeepPartial<K>, DeepPartial<V>>
  : T extends ReadonlyMap<infer K, infer V>
  ? ReadonlyMap<DeepPartial<K>, DeepPartial<V>>
  : T extends WeakMap<infer K, infer V>
  ? WeakMap<DeepPartial<K>, DeepPartial<V>>
  : T extends Set<infer U>
  ? Set<DeepPartial<U>>
  : T extends ReadonlySet<infer U>
  ? ReadonlySet<DeepPartial<U>>
  : T extends WeakSet<infer U>
  ? WeakSet<DeepPartial<U>>
  : T extends (infer U)[]
  ? T extends IsTuple<T>
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : DeepPartial<U>[]
  : T extends Promise<infer U>
  ? Promise<DeepPartial<U>>
  : T extends ObjectUnknown
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

export { type DeepPartial as default }
