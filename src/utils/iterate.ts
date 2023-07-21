/**
 * @file Utilities - iterate
 * @module tutils/utils/iterate
 */

import type { Fn } from '#src/types'

/**
 * Invokes a `reducer` a total of `n` times and returns an accumulated value.
 *
 * The `reducer` is invoked with two arguments; *`acc`* and *`index`*.
 *
 * @todo examples
 *
 * @template T - Accumulated value type
 *
 * @param {number} n - Number of times to invoke `reducer`
 * @param {T} initial - Initial value
 * @param {Fn<[T, number], T>} reducer - Function invoked per iteration
 * @return {T} Accumulated value
 */
const iterate = <T>(n: number, initial: T, reducer: Fn<[T, number], T>): T => {
  /**
   * Accumulated value.
   *
   * @var {T} acc
   */
  let acc: T = initial

  // invoke reducer n times
  for (let index = 0; index < n; index++) acc = reducer(acc, index)

  return acc
}

export default iterate
