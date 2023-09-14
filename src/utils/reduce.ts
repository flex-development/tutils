/**
 * @file Utilities - reduce
 * @module tutils/utils/reduce
 */

import type { Fn } from '#src/types'
import cast from './cast'

/**
 * Callback function invoked once per element in an array to generate a final
 * accumulated value.
 *
 * @template U - Accumulated result type
 * @template T - Array value type
 *
 * @param {U} acc - Accumulated value
 * @param {T} value - Current `array` value
 * @param {number} index - Current `array` index
 * @param {ReadonlyArray<T>} arr - Array being reduced
 * @return {U} Final accumulated value
 */
type Reducer<U, T> = Fn<
  [acc: U, value: T, index: number, array: readonly T[]],
  U
>

/**
 * Invoke a callback function once per element in an array to generate a final
 * accumulated value.
 *
 * The return value of the callback function is the accumulated result, and is
 * provided as an argument in the next call to the callback function.
 *
 * @see {@linkcode Reducer}
 *
 * @todo examples
 *
 * @template U - Accumulated result type
 * @template T - Array value type
 *
 * @param {ReadonlyArray<T>} arr - Array to reduce
 * @param {Reducer<U, T>} reducer - Reducer function
 * @param {U} [initial=arr[0]] - Initial accumulated value
 * @return {U} Final accumulated value
 */
const reduce = <U, T>(
  arr: readonly T[],
  reducer: Reducer<U, T>,
  initial: U = cast(arr[0])
): U => arr.reduce(reducer, initial)

export { reduce as default, type Reducer }
