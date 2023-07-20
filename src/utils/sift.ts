/**
 * @file Utilities - sift
 * @module tutils/utils/sift
 */

import type { Nilable, Sift } from '#src/types'
import cast from './cast'
import isFalsy from './is-falsy'
import select from './select'

/**
 * Removes falsy values from an array.
 *
 * Falsy values include:
 *
 * - `''`
 * - `0`
 * - `0n`
 * - `Number.NaN`
 * - `false`
 * - `null`
 * - `undefined`
 *
 * @see {@linkcode Sift}
 *
 * @todo examples
 *
 * @template T - Array to filter
 *
 * @param {T} arr - Array to filter
 * @return {Sift<T>} New array with falsy values removed
 */
const sift = <T extends Nilable<readonly unknown[]>>(arr: T): Sift<T> => {
  return cast(select(arr, item => !isFalsy(item)))
}

export default sift
