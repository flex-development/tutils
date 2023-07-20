/**
 * @file Utilities - enumerable
 * @module tutils/utils/enumerable
 */

import type { PropertyKey } from '#src/types'
import descriptor from './descriptor'

/**
 * Returns a boolean indicating if `key` is an enumerable own property of a
 * given value.
 *
 * @todo examples
 *
 * @template T - Target value
 * @template K - Property to check
 *
 * @param {T} target - Target value
 * @param {K} key - Property to check
 * @return {boolean} `true` if `key` is enumerable own property of `target`
 */
const enumerable = <T, K extends PropertyKey>(target: T, key: K): boolean => {
  return !!descriptor(target, key).enumerable
}

export default enumerable
