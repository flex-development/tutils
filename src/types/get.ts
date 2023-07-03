/**
 * @file Type Definitions - Get
 * @module tutils/types/Get
 */

import type At from './at'
import type Dot from './dot'
import type Fallback from './fallback'
import type IfAny from './if-any'
import type IfKeys from './if-keys'
import type IfNever from './if-never'
import type Join from './join'
import type Keyof from './keyof'
import type NumberLike from './number-like'
import type PropertyKey from './property-key'

/**
 * Retrieves a property value from `T`.
 *
 * Supports dot-notation for nested object paths and array-indexing.
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template K - Property to select
 * @template F - Fallback value type
 */
type Get<T, K extends PropertyKey, F = undefined> = IfAny<
  T,
  T,
  IfNever<
    K,
    F,
    T extends unknown
      ? IfKeys<
          T,
          Keyof<T> extends infer Q extends keyof T
            ? IfAny<K, Q, K> extends infer K extends PropertyKey
              ? K extends Join<
                  [infer H extends string, infer R extends string],
                  Dot
                >
                ? H extends NumberLike | Q
                  ? Fallback<
                      Get<
                        T extends string | readonly unknown[]
                          ? H extends NumberLike
                            ? At<T, H>
                            : H extends keyof T
                            ? T[H]
                            : never
                          : T[H extends `${infer N extends Extract<
                              keyof T,
                              number
                            >}`
                              ? N
                              : H & keyof T],
                        R,
                        F
                      >,
                      F
                    >
                  : F
                : K extends NumberLike | Q
                ? T extends string | readonly unknown[]
                  ? IfNever<
                      K,
                      F,
                      K extends NumberLike
                        ? At<T, K, F>
                        : Fallback<T[K & keyof T], F>
                    >
                  : IfNever<
                      K,
                      F,
                      Fallback<
                        T[K extends `${infer N extends Extract<
                          keyof T,
                          number
                        >}`
                          ? N
                          : K & keyof T],
                        F
                      >
                    >
                : F
              : never
            : never,
          F
        >
      : F
  >
>

export type { Get as default }
