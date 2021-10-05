import type { ObjectPlain } from './ObjectPlain'
import type { OmitByType } from './OmitByType'
import type { Path } from './Path'
import type { PathValue } from './PathValue'

/**
 * @file Type Definitions - DeepPick
 * @module tutils/types/DeepPick
 */

/**
 * Constructs a type by picking a set of properties `K` from `T`.
 *
 * @template T - Object type
 * @template P - Object path or paths union (dot notation friendly)
 */
export type DeepPick<T extends ObjectPlain, P extends Path<T>> = OmitByType<
  {
    [K in keyof T]: K extends P
      ? PathValue<T, K>
      : P extends `${infer Key}.${infer Rest}`
      ? K extends Key
        ? Rest extends Path<T[K]>
          ? { [K2 in Rest]: PathValue<T[K], Rest> }
          : never
        : never
      : never
  },
  never
>
