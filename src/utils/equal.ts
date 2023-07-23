/**
 * @file Utilities - equal
 * @module tutils/utils/equal
 */

import type { Fn, Nilable, PropertyKey } from '#src/types'
import { dequal } from 'dequal'
import isFunction from './is-function'

/**
 * Returns a boolean indicating if values `a` and `b` are deeply equal.
 *
 * An `identity` function can be used to convert either value to a unique key.
 * If provided, items with the same identity key will be considered equal.
 *
 * @see https://github.com/lukeed/dequal
 *
 * @todo examples
 *
 * @template A - First comparison value type
 * @template B - Second comparison value type
 * @template K - Identity key type
 *
 * @param {A} a - First comparison value
 * @param {B} b - Second comparison value
 * @param {Nilable<Fn<[A | B], K>>} [identity] - Identity key function
 * @return {boolean} `true` if `a` and `b` are deeply equal
 */
const equal = <A, B, K extends PropertyKey = PropertyKey>(
  a: A,
  b: B,
  identity?: Nilable<Fn<[A | B], K>>
): boolean => {
  return isFunction(identity) ? dequal(identity(a), identity(b)) : dequal(a, b)
}

export default equal
