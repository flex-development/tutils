/**
 * @file Type Definitions - Flat
 * @module tutils/types/Flat
 */

import type EmptyArray from './empty-array'
import type IfAny from './if-any'
import type IfNever from './if-never'
import type IfTuple from './if-tuple'
import type Nilable from './nilable'
import type Subtract from './subtract'

/**
 * Construct a tuple by spreading each array in `M`.
 *
 * @internal
 *
 * @template M - Tuple elements map
 * @template I - Current index
 * @template Acc - Tuple accumulator
 */
type BuildTuple<
  M extends readonly unknown[],
  I extends number = M['length'],
  Acc extends readonly unknown[] = EmptyArray
> = I extends 0
  ? Acc
  : Subtract<I, 1> extends infer N extends number
  ? BuildTuple<
      M,
      N,
      M[N] extends infer V
        ? V extends readonly unknown[]
          ? [...V, ...Acc]
          : [V, ...Acc]
        : never
    >
  : never

/**
 * Construct a new array with all sub-array items concatenated recursively up to
 * a specified depth.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template D - Maximum recursion depth
 */
type Flat<
  T extends Nilable<readonly unknown[]>,
  D extends Nilable<number> = 1
> = IfAny<
  T,
  T[],
  IfNever<
    T,
    EmptyArray,
    T extends Nilable<never>
      ? EmptyArray
      : IfNever<
          D,
          T,
          D extends Nilable<number>
            ? {
                [K in keyof T]: T[K] extends infer V
                  ? V extends readonly unknown[]
                    ? D extends 0
                      ? V
                      : Flat<
                          V,
                          Subtract<D extends Nilable<never> ? 1 : D & number, 1>
                        > extends infer W extends readonly unknown[]
                      ? IfTuple<W, W, W[number]>
                      : never
                    : V
                  : never
              } extends infer U extends readonly unknown[]
              ? D extends 0
                ? U
                : IfTuple<U, BuildTuple<U>, U>
              : never
            : never
        >
  >
>

export type { Flat as default }
