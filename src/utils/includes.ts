/**
 * @file Utilities - includes
 * @module tutils/utils/includes
 */

import type {
  Fn,
  IfString,
  IndexSignature,
  NIL,
  Nilable,
  NumberString
} from '#src/types'
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
 * @template T - Value to search
 * @template K - Identity key type
 *
 * @param {T} value - Value to search
 * @param {unknown} target - Search target
 * @param {Nilable<Fn<[T[0]], K>>} [identity] - Identity key function
 * @param {number | undefined} [position=0] - Position to begin search
 * @return {boolean} `true` if `data` includes `target`
 */
function includes<
  T extends string | readonly unknown[],
  K extends IndexSignature = NumberString
>(
  value: T,
  target: unknown,
  identity?: IfString<T, NIL, Nilable<Fn<[T[0]], K>>>,
  position: number | undefined = 0
): boolean {
  return isString(value)
    ? value.includes(target as string, position)
    : value.slice(position).some(item => equal(target, item, identity))
}

export default includes
