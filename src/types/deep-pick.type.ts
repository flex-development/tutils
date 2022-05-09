/**
 * @file Type Definitions - DeepPick
 * @module tutils/types/DeepPick
 */

import type ObjectPlain from './object-plain.type'
import type OmitByType from './omit-by-type.type'
import type PathValue from './path-value.type'
import type Path from './path.type'

/**
 * Constructs a type by picking a set of properties `K` from `T`.
 *
 * @template T - Object type
 * @template P - Object path or paths union (dot notation friendly)
 */
type DeepPick<T extends ObjectPlain, P extends Path<T>> = OmitByType<
  {
    [K in keyof T]: K extends P ? PathValue<T, K>
      : P extends `${infer Key}.${infer Rest}`
        ? K extends Key
          ? Rest extends Path<T[K]> ? { [K2 in Rest]: PathValue<T[K], Rest> }
          : never
        : never
      : never
  },
  never
>

export default DeepPick
