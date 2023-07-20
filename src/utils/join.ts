/**
 * @file Utilities - join
 * @module tutils/utils/join
 */

import type { Joinable, Mapper, Nilable } from '#src/types'
import cast from './cast'
import select from './select'

/**
 * Converts an array to a string delimitted by the specified `separator`.
 *
 * If a separator is not provided, items will be separated with a comma (`,`).
 *
 * A `mapper` can be used to convert array items to {@linkcode Joinable} values.
 *
 * @see {@linkcode Mapper}
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 *
 * @todo examples
 *
 * @template T - Array to join
 * @template J - Joined array type
 *
 * @param {Nilable<T>} arr - Array to join
 * @param {Nilable<string>} [separator=','] - String used to separate one item
 * of `arr` from the next in the resulting string
 * @param {Nilable<Mapper<T, Joinable>>} [mapper] - Array item interpolator
 * @return {J} String delimitted by `separator`
 */
const join = <T extends readonly unknown[], J extends string = string>(
  arr: Nilable<T>,
  separator?: Nilable<string>,
  mapper?: Nilable<Mapper<T, Joinable>>
): J => cast(select(arr, null, mapper).join(separator ?? undefined))

export default join
