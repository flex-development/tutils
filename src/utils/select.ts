/**
 * @file Utilities - select
 * @module tutils/utils/select
 */

import type { ArrayPredicate, Mapper, Nilable, Values } from '#src/types'
import cast from './cast'
import constant from './constant'

/**
 * Performs `filter` and `map` operations on an array in one iteration.
 *
 * If `filter` and `map` are omitted, all array items will be selected.
 *
 * @see {@linkcode ArrayPredicate}
 * @see {@linkcode Mapper}
 *
 * @todo examples
 *
 * @template T - Array to select from
 * @template U - Filtered and mapped array item type
 *
 * @param {T} arr - Array to select from
 * @param {Nilable<ArrayPredicate<NonNullable<T>>>} [filter] - Filter function
 * @param {Nilable<Mapper<NonNullable<T>, U>>} [map] - Map function
 * @return {U[]} Filtered and mapped array
 */
const select = <T extends Nilable<readonly unknown[]>, U = Values<T>[number]>(
  arr: T,
  filter?: Nilable<ArrayPredicate<NonNullable<T>>>,
  map?: Nilable<Mapper<NonNullable<T>, U>>
): U[] => {
  return [...(arr ??= cast([])!)].reduceRight<U[]>((acc, curr, i) => {
    return (filter ??= constant(true))(curr, i, cast(arr))
      ? [(map ?? (item => cast(item)))(curr, i, cast(arr)), ...acc]
      : acc
  }, [])
}

export default select
