/**
 * @file Type Definitions - DeepOmit
 * @module tutils/types/DeepOmit
 */

import type BuiltIn from './built-in.type'
import type KeysOptional from './keys-optional.type'
import type KeysRequired from './keys-required.type'
import type ObjectPlain from './object-plain.type'
import type OmitByType from './omit-by-type.type'

/**
 * Omits properties of `T` using filter object `F`.
 *
 * @see https://github.com/krzkaczor/ts-essentials#DeepOmit
 *
 * @template T - Object type
 * @template F - Filter object
 */
type DeepOmit<
  T extends DeepOmitHelper<F>,
  F extends ObjectPlain
> = T extends BuiltIn ? T
  : T extends Map<infer KeyType, infer ValueType>
    ? ValueType extends DeepOmitHelper<F> ? Map<KeyType, DeepOmit<ValueType, F>>
    : T
  : T extends ReadonlyMap<infer KeyType, infer ValueType>
    ? ValueType extends DeepOmitHelper<F>
      ? ReadonlyMap<KeyType, DeepOmit<ValueType, F>>
    : T
  : T extends WeakMap<infer KeyType, infer ValueType>
    ? ValueType extends DeepOmitHelper<F>
      ? WeakMap<KeyType, DeepOmit<ValueType, F>>
    : T
  : T extends Set<infer ItemType>
    ? ItemType extends DeepOmitHelper<F> ? Set<DeepOmit<ItemType, F>>
    : T
  : T extends ReadonlySet<infer ItemType>
    ? ItemType extends DeepOmitHelper<F> ? ReadonlySet<DeepOmit<ItemType, F>>
    : T
  : T extends WeakSet<infer ItemType>
    ? ItemType extends DeepOmitHelper<F> ? WeakSet<DeepOmit<ItemType, F>>
    : T
  : T extends (infer ItemType)[]
    ? ItemType extends DeepOmitHelper<F> ? DeepOmit<ItemType, F>[]
    : T
  : T extends Promise<infer ItemType>
    ? ItemType extends DeepOmitHelper<F> ? Promise<DeepOmit<ItemType, F>>
    : T
  : 
    & { [K in Exclude<KeysOptional<T>, keyof F>]+?: T[K] }
    & OmitByType<
      {
        [K in Extract<KeysOptional<T>, keyof F>]+?: F[K] extends true ? never
          : T[K] extends DeepOmitHelper<F[K]> ? DeepOmit<T[K], F[K]>
          : T[K]
      },
      never
    >
    & { [K in Exclude<KeysRequired<T>, keyof F>]: T[K] }
    & OmitByType<
      {
        [K in Extract<KeysRequired<T>, keyof F>]: F[K] extends true ? never
          : T[K] extends DeepOmitHelper<F[K]> ? DeepOmit<T[K], F[K]>
          : T[K]
      },
      never
    >

/**
 * Helper for `DeepOmit`.
 *
 * @see https://github.com/krzkaczor/ts-essentials/blob/master/lib/types.ts
 *
 * @template T - Object type
 */
type DeepOmitHelper<T> =
  | DeepOmitHelper<T>[]
  | Map<any, DeepOmitHelper<T>>
  | Promise<DeepOmitHelper<T>>
  | ReadonlySet<DeepOmitHelper<T>>
  | Set<DeepOmitHelper<T>>
  | WeakMap<any, DeepOmitHelper<T>>
  | WeakSet<DeepOmitHelper<T>>
  | {
    [K in keyof T]: T[K] extends never ? any
      : T[K] extends object ? DeepOmitHelper<T[K]>
      : never
  }

export default DeepOmit
