/**
 * @file Utilities - times
 * @module tutils/utils/times
 */

import type { Fn, Nilable, Times } from '#src/types'
import cast from './cast'
import identity from './identity'

/**
 * Invokes an `iteratee` a total of `n` times and returns an array containing
 * the result of each invocation.
 *
 * The `iteratee` is invoked with one argument; *`index`*.
 *
 * @see {@linkcode Times}
 *
 * @todo examples
 *
 * @template N - Iteratee results array length
 * @template T - Iteratee result type
 *
 * @param {number} n - Number of times to invoke `iteratee`
 * @param {Nilable<Fn<[number], T>>} [iteratee=identity] - Iterator function
 * @return {Times<N, T>} Iteratee result array
 */
const times = <N extends number, T = number>(
  n: N,
  iteratee?: Nilable<Fn<[number], T>>
): Times<N, T> => {
  /**
   * Iteratee invocation results.
   *
   * @const {T[]} results
   */
  const results: T[] = []

  // invoke iteratee n times
  for (let index = 0; index < n; index++) {
    results.push((iteratee ?? cast<Fn<[number], T>>(identity))(index))
  }

  return cast(results)
}

export default times
