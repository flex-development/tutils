/**
 * @file Utilities - alphabetize
 * @module tutils/utils/alphabetize
 */

import { SortOrder, type CompareResult } from '#src/enums'
import type { Fn, Nilable, Writable } from '#src/types'
import type AlphabetizeOptions from './alphabetize.options'
import sort from './sort'

/**
 * Sorts an array alphabetically without modifying it.
 *
 * A `mapper` can be used to convert array items to strings.
 *
 * @see {@linkcode AlphabetizeOptions}
 *
 * @todo examples
 *
 * @template T - Array to sort
 *
 * @param {T} arr - Array to sort
 * @param {Fn<[T[number]], string>} mapper - Array item interpolator
 * @param {Nilable<AlphabetizeOptions>} [options={}] - Comparsion options
 * @return {Writable<T>} Alphabetically sorted copy of target array
 */
const alphabetize = <T extends readonly unknown[]>(
  arr: T,
  mapper: Fn<[T[number]], string>,
  options: Nilable<AlphabetizeOptions> = null
): Writable<T> => {
  const {
    caseFirst = 'upper',
    locales,
    numeric = true,
    order = SortOrder.ASC,
    ...opts
  } = (options ??= {})

  return sort(arr, (a: T[number], b: T[number]): CompareResult => {
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
