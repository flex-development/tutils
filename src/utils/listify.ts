/**
 * @file Utilities - listify
 * @module tutils/utils/listify
 */

import type { Entries, Mapper, Nilable } from '#src/types'
import entries from './entries'
import select from './select'

/**
 * Converts an object to an array.
 *
 * @see {@linkcode Mapper}
 *
 * @template T - Object to convert
 * @template U - Array item type
 *
 * @param {T} obj - Object to convert
 * @param {Mapper<Entries<T>, U>} mapper - Object entry interpolator
 * @return {U[]} New array
 */
const listify = <T extends Nilable<object>, U>(
  obj: T,
  mapper: Mapper<Entries<T>, U>
): U[] => {
  /**
   * Own enumerable string-keyed property key-value pairs of {@linkcode obj}.
   *
   * @const {Entries<T>} pairs
   */
  const pairs: Entries<T> = entries(obj)

  return select(pairs, null, (entry, i) => mapper(entry, i, pairs))
}

export default listify
