/**
 * @file Utilities - select
 * @module tutils/utils/select
 */

import type { Mapper, Nilable, Predicate } from '#src/types'
import cast from './cast'
import constant from './constant'

/**
 * Performs `filter` and `map` operations on an array in one iteration.
 *
 * If `filter` and `map` are omitted, all array items will be selected.
 *
 * @see {@linkcode Mapper}
 * @see {@linkcode Predicate}
 *
 * @todo examples
 *
 * @template T - Array to select from
 * @template U - Filtered and mapped array item type
 *
 * @param {Nilable<T>} arr - Array to select from
 * @param {Nilable<Predicate<T>>} [filter] - Filter function
 * @param {Nilable<Mapper<T, U>>} [map] - Map function
 * @return {U[]} Filtered and mapped array
 */
const select = <T extends readonly unknown[], U = T[number]>(
  arr: Nilable<T>,
  filter?: Nilable<Predicate<T>>,
  map?: Nilable<Mapper<T, U>>
): U[] => {
  arr ??= cast<NonNullable<typeof arr>>([])
  return [...arr].reduceRight<U[]>((acc, curr, i) => {
    return (filter ??= constant(true))(curr, i, cast(arr))
      ? [(map ?? (item => cast(item)))(curr, i, cast(arr)), ...acc]
      : acc
  }, [])
}

export default select
