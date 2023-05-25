/**
 * @file Utilities - alphabetize
 * @module tutils/utils/alphabetize
 */

import { SortOrder, type CompareResult } from '#src/enums'
import type { Fn, Nilable } from '#src/types'
import type AlphabetizeOptions from './alphabetize.options'
import sort from './sort'

/**
 * Sorts `array` alphabetically without modifying it.
 *
 * A `mapper` is used to convert array items to strings.
 *
 * @see {@linkcode AlphabetizeOptions}
 *
 * @template T - Array item type
 *
 * @param {ReadonlyArray<T>} array - Array to sort
 * @param {Fn<[T], string>} mapper - Mapper function
 * @param {Nilable<AlphabetizeOptions>} [options={}] - Comparsion options
 * @return {T[]} `array` sorted alphabetically
 */
function alphabetize<T>(
  array: readonly T[],
  mapper: Fn<[T], string>,
  options: Nilable<AlphabetizeOptions> = null
): T[] {
  const {
    caseFirst = 'upper',
    locales,
    numeric = true,
    order = SortOrder.ASC,
    ...opts
  } = (options ??= {})

  return sort(array, (a: T, b: T): CompareResult => {
    /**
     * Target string.
     *
     * @const {string} target
     */
    const target: string = mapper(order === SortOrder.ASC ? a : b)

    /**
     * String to compare against {@linkcode target}.
     *
     * @const {string} that
     */
    const that: string = mapper(order === SortOrder.ASC ? b : a)

    return target.localeCompare(that, locales, {
      ...opts,
      caseFirst,
      numeric,
      usage: 'sort'
    })
  })
}

export default alphabetize
