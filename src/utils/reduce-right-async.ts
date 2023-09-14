/**
 * @file Utilities - reduceRightAsync
 * @module tutils/utils/reduceRightAsync
 */

import at from './at'
import cast from './cast'
import type { AsyncReducer } from './reduce-async'

/**
 * Invoke a callback function once per element in an array, in descending order,
 * to generate a final accumulated value.
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
 *
 * @param {ReadonlyArray<T>} arr - Array to reduce
 * @param {AsyncReducer<U, T>} reducer - Reducer function
 * @param {U} [initial=at(arr, -1)] - Initial accumulated value
 * @return {Promise<U>} Final accumulated value
 */
const reduceRightAsync = async <U, T>(
  arr: readonly T[],
  reducer: AsyncReducer<U, T>,
  initial: U = cast(at(arr, -1))
): Promise<U> => {
  /**
   * Accumulated value.
   *
   * @var {U} acc
   */
  let acc: U = initial

  // reduce arr
  for (let i = arr.length - 1; i >= 0; i--) {
    acc = await reducer(acc, arr[i]!, i, arr)
  }

  return acc
}

export default reduceRightAsync
