import type { BuiltIn } from './BuiltIn'
import type { IsTuple } from './IsTuple'
import type { ObjectUnknown } from './ObjectUnknown'

/**
 * @file Types - DeepPartial
 * @module types/DeepPartial
 */

/**
 * Recursive version of [`Partial`][1].
 *
 * @template T - Value type
 *
 * [1]: https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
 */
export type DeepPartial<T> = T extends BuiltIn
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
  : T extends Array<infer U>
  ? T extends IsTuple<T>
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Array<DeepPartial<U>>
  : T extends Promise<infer U>
  ? Promise<DeepPartial<U>>
  : T extends ObjectUnknown
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
