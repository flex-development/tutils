/**
 * @file Utilities - includes
 * @module tutils/utils/includes
 */

import type { Fn, Nilable, PropertyKey } from '#src/types'
import cast from './cast'
import equal from './equal'
import isString from './is-string'

/**
 * Checks if an array or string `value` includes `target`.
 *
 * An array `value` includes `target` if `target` is deeply equal to at least
 * one item in the array. A string `value` includes `target` if `target` is
 * equal to at least one character in the string.
 *
 * When searching an array, an `identity` function can be used to convert array
 * items to unique keys. If provided, two items with the same identity key will
 * be considered equal.
 *
 * @todo examples
 *
 * @template T - Value to search
 * @template K - Identity key type
 *
 * @param {T} value - Value to search
 * @param {unknown} target - Search target
 * @param {Nilable<Fn<[T[number]], K>>} [identity] - Identity key function
 * @param {Nilable<number>} [position] - Position to begin search
 * @return {boolean} `true` if `value` includes `target`
 */
const includes = <
  T extends string | readonly unknown[],
  K extends PropertyKey = PropertyKey
>(
  value: T,
  target: unknown,
  position?: Nilable<number>,
  identity?: Nilable<Fn<[T[number]], K>>
): boolean => {
  position ??= 0

  return isString(value)
    ? value.includes(cast(target), position)
    : value.slice(position).some(item => equal(target, item, identity))
}

export default includes
