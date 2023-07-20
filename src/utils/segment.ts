/**
 * @file Utilities - segment
 * @module tutils/utils/segment
 */

import type { Nilable, Segment } from '#src/types'
import cast from './cast'
import DOT from './dot'
import isEmptyString from './is-empty-string'
import isNIL from './is-nil'
import split from './split'

/**
 * Returns a path segment array.
 *
 * @todo examples
 *
 * @template T - Path to split
 *
 * @param {T} path - Path to split
 * @param {Nilable<number>} [limit] - Maximum array size
 * @return {Segment<T>} Path segments array
 */
const segment = <T extends Nilable<string>>(
  path: T,
  limit?: Nilable<number>
): Segment<T> => {
  return cast(isEmptyString(path) || isNIL(path) ? [] : split(path, DOT, limit))
}

export default segment
