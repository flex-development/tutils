import type { BuiltIn } from './BuiltIn'
import type { KeysOptional } from './KeysOptional'
import type { KeysRequired } from './KeysRequired'
import type { ObjectUnknown } from './ObjectUnknown'
import type { OmitByType } from './OmitByType'

/**
 * @file Types - DeepOmit
 * @module types/DeepOmit
 */

/**
 * Omits properties of `T` using a filter object.
 *
 * See: https://github.com/krzkaczor/ts-essentials#DeepOmit
 *
 * @template T - Object type
 * @template F - Filter object
 */
export type DeepOmit<
  T extends DeepOmitHelper<F>,
  F extends ObjectUnknown
> = T extends BuiltIn
  ? T
  : T extends Map<infer KeyType, infer ValueType>
  ? ValueType extends DeepOmitHelper<F>
    ? Map<KeyType, DeepOmit<ValueType, F>>
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
  ? ItemType extends DeepOmitHelper<F>
    ? Set<DeepOmit<ItemType, F>>
    : T
  : T extends ReadonlySet<infer ItemType>
  ? ItemType extends DeepOmitHelper<F>
    ? ReadonlySet<DeepOmit<ItemType, F>>
    : T
  : T extends WeakSet<infer ItemType>
  ? ItemType extends DeepOmitHelper<F>
    ? WeakSet<DeepOmit<ItemType, F>>
    : T
  : T extends Array<infer ItemType>
  ? ItemType extends DeepOmitHelper<F>
    ? Array<DeepOmit<ItemType, F>>
    : T
  : T extends Promise<infer ItemType>
  ? ItemType extends DeepOmitHelper<F>
    ? Promise<DeepOmit<ItemType, F>>
    : T
  : { [K in Exclude<KeysOptional<T>, keyof F>]+?: T[K] } &
      OmitByType<
        {
          [K in Extract<KeysOptional<T>, keyof F>]+?: F[K] extends true
            ? never
            : T[K] extends DeepOmitHelper<F[K]>
            ? DeepOmit<T[K], F[K]>
            : T[K]
        },
        never
      > &
      { [K in Exclude<KeysRequired<T>, keyof F>]: T[K] } &
      OmitByType<
        {
          [K in Extract<KeysRequired<T>, keyof F>]: F[K] extends true
            ? never
            : T[K] extends DeepOmitHelper<F[K]>
            ? DeepOmit<T[K], F[K]>
            : T[K]
        },
        never
      >

/**
 * Helper for `DeepOmit`.
 *
 * See: https://github.com/krzkaczor/ts-essentials/blob/master/lib/types.ts
 *
 * @template T - Object type
 */
type DeepOmitHelper<T> =
  | {
      [K in keyof T]: T[K] extends never
        ? any
        : T[K] extends object
        ? DeepOmitHelper<T[K]>
        : never
    }
  | Array<DeepOmitHelper<T>>
  | Promise<DeepOmitHelper<T>>
  | Set<DeepOmitHelper<T>>
  | ReadonlySet<DeepOmitHelper<T>>
  | WeakSet<DeepOmitHelper<T>>
  | Map<any, DeepOmitHelper<T>>
  | WeakMap<any, DeepOmitHelper<T>>
