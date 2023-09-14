/**
 * @file Utilities - reduceAsync
 * @module tutils/utils/reduceAsync
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
 * @return {Promise<U> | U} Final accumulated value
 */
type AsyncReducer<U, T> = Fn<
  [acc: U, value: T, index: number, array: readonly T[]],
  Promise<U> | U
>

/**
 * Invoke a callback function once per element in an array to generate a final
 * accumulated value.
 *
 * The return value of the callback function is the accumulated result, and is
 * provided as an argument in the next call to the callback function.
 *
 * @see {@linkcode AsyncReducer}
 *
 * @todo examples
 *
 * @async
 *
 * @template U - Accumulated result type
 * @template T - Array value type
 * s
 * @param {ReadonlyArray<T>} arr - Array to reduce
 * @param {AsyncReducer<U, T>} reducer - Reducer function
 * @param {U} [initial=arr[0]] - Initial accumulated value
 * @return {Promise<U>} Final accumulated value
 */
const reduceAsync = async <U, T>(
  arr: readonly T[],
  reducer: AsyncReducer<U, T>,
  initial: U = cast(arr[0])
): Promise<U> => {
  /**
   * Accumulated value.
   *
   * @var {U} acc
   */
  let acc: U = initial

  // reduce arr
  for (const [i, curr] of arr.entries()) acc = await reducer(acc, curr, i, arr)

  return acc
}

export { reduceAsync as default, type AsyncReducer }
