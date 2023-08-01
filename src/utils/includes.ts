/**
 * @file Utilities - includes
 * @module tutils/utils/includes
 */

import type { Fn, Nilable, PropertyKey, Values } from '#src/types'
import cast from './cast'
import equal from './equal'
import isNIL from './is-nil'
import isString from './is-string'

/**
 * Checks if an array or string includes `value`.
 *
 * An array includes `value` if `value` is deeply equal to at least one item in
 * the array. A string includes `value` if `value` is equal to at least one
 * character in the string.
 *
 * When searching an array, an `identity` function can be used to convert array
 * items to unique keys. If provided, two items with the same identity key will
 * be considered equal.
 *
 * @todo examples
 *
 * @template T - Search target type
 * @template K - Identity key type
 *
 * @param {T} target - Search target
 * @param {unknown} value - Value to search for
 * @param {Nilable<number>} [position] - Position to begin search
 * @param {Nilable<Fn<[Values<T>[number]], K>>} [identity] - Identity function
 * @return {boolean} `true` if `target` includes `value`
 */
const includes = <
  T extends Nilable<string | readonly unknown[]>,
  K extends PropertyKey = PropertyKey
>(
  target: T,
  value: unknown,
  position?: Nilable<number>,
  identity?: Nilable<Fn<[Values<T>[number]], K>>
): boolean => {
  position ??= 0

  return isNIL(target)
    ? false
    : isString(target)
    ? target.includes(cast(value), position)
    : target.slice(position).some(item => equal(value, item, identity))
}

export default includes
