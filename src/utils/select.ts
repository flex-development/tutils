/**
 * @file Utilities - select
 * @module tutils/utils/select
 */

import type { Fn, Nilable } from '#src/types'

/**
 * Performs `filter` and `map` operations on `array` in one iteration.
 *
 * Does nothing if `filter` and `map` are omitted.
 *
 * @template T - Array item type
 * @template V - Mapped and filtered array item type
 *
 * @param {ReadonlyArray<T>} array - Array to filter and map
 * @param {Nilable<Fn<[T, number], boolean>>} [filter] - Filter function
 * @param {Nilable<Fn<[T, number], V>>} [map] - Map function
 * @return {V[]} Filtered and mapped `array`
 */
function select<T, V>(
  array: readonly T[],
  filter?: Nilable<Fn<[T, number], boolean>>,
  map?: Nilable<Fn<[T, number], V>>
): V[] {
  return [...array]
    .reverse()
    .reduce<V[]>((acc: V[], curr: T, index: number): V[] => {
      return (filter ??= () => true)(curr, index)
        ? [(map ??= item => item as unknown as V)(curr, index), ...acc]
        : acc
    }, [])
}

export default select
