/**
 * @file Utilities - reverse
 * @module tutils/utils/reverse
 */

import type { Reverse } from '#src/types'
import cast from './cast'
import clone from './clone'
import isArray from './is-array'
import join from './join'
import split from './split'

/**
 * Reverses an array or string without modifying it.
 *
 * @see {@linkcode Reverse}
 *
 * @todo examples
 *
 * @template T - Array or string to reverse
 *
 * @param {T} target - Array or string to reverse
 * @return {Reverse<T>} Reversed `value`
 */
const reverse = <T extends string | readonly unknown[]>(
  target: T
): Reverse<T> => {
  return isArray(target)
    ? cast([...clone(target)].reverse())
    : cast(join(split(target, '').reverse(), ''))
}

export default reverse
