/**
 * @file Utilities - join
 * @module tutils/utils/join
 */

import type { Joinable, Nilable } from '#src/types'
import cast from './cast'
import select, { type SelectMapper } from './select'

/**
 * Converts an array to a string delimitted by the specified `separator`.
 *
 * If a separator is not provided, items will be separated with a comma (`,`).
 *
 * A `mapper` can be used to convert array items to {@linkcode Joinable} values.
 *
 * @see {@linkcode SelectMapper}
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 *
 * @todo examples
 *
 * @template T - Array to join
 * @template J - Joined array type
 *
 * @param {T} arr - Array to join
 * @param {Nilable<string>} [separator=','] - String used to separate one item
 * of `arr` from the next in the resulting string
 * @param {Nilable<SelectMapper<T, Joinable>>} [mapper] - Array item mapper
 * @return {J} String delimitted by `separator`
 */
const join = <T extends Nilable<readonly unknown[]>, J extends string = string>(
  arr: T,
  separator?: Nilable<string>,
  mapper?: Nilable<SelectMapper<T, Joinable>>
): J => cast(select<T>(arr, null, cast(mapper)).join(separator ?? undefined))

export default join
