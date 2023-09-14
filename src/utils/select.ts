/**
 * @file Utilities - select
 * @module tutils/utils/select
 */

import type {
  ArrayFallback,
  ArrayPredicate,
  ArrayTypeGuard,
  Mapper,
  Nilable
} from '#src/types'
import cast from './cast'
import constant from './constant'
import fallback from './fallback'
import identity from './identity'
import isNIL from './is-nil'
import reduceRight from './reduce-right'

/**
 * Array filter function.
 *
 * @see {@linkcode ArrayPredicate}
 * @see {@linkcode ArrayTypeGuard}
 *
 * @template T - Array being evaluated
 * @template G - Guarded array item type
 */
type SelectFilter<T extends Nilable<readonly unknown[]>, G> =
  | ArrayPredicate<ArrayFallback<T>>
  | ArrayTypeGuard<ArrayFallback<T>, G>

/**
 * Array map function.
 *
 * @see {@linkcode Mapper}
 *
 * @template T - Array being evaluated
 * @template U - Mapped array item type
 */
type SelectMapper<T extends Nilable<readonly unknown[]>, U> = Mapper<
  ArrayFallback<T>,
  U
>

/**
 * Performs `filter` and `map` operations on an array in one iteration.
 *
 * If `filter` and `map` are omitted, all array items will be selected.
 *
 * @see {@linkcode SelectFilter}
 * @see {@linkcode SelectMapper}
 *
 * @todo examples
 *
 * @template T - Array to select from
 * @template U - Filtered and mapped array item type
 * @template G - Guarded array item type
 *
 * @param {T} arr - Array to select from
 * @param {Nilable<SelectFilter<T, G>>} [filter] - Filter function
 * @param {Nilable<SelectMapper<G[], U>>} [map] - Map function
 * @return {U[]} Filtered and mapped array
 */
const select = <
  T extends Nilable<readonly unknown[]>,
  U = NonNullable<T>[number],
  G extends NonNullable<T>[number] = NonNullable<T>[number]
>(
  arr: T,
  filter?: Nilable<SelectFilter<T, G>>,
  map?: Nilable<SelectMapper<G[], U>>
): U[] => {
  return reduceRight([...fallback(arr, [], isNIL)], (acc, curr, i, arr) => {
    return fallback(filter, constant(true), isNIL)(curr, i, cast(arr))
      ? [fallback(map, identity, isNIL)(cast(curr), i, cast(arr)), ...acc]
      : acc
  }, cast([]))
}

export { select as default, type SelectFilter, type SelectMapper }
