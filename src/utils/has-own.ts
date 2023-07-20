/**
 * @file Utilities - hasOwn
 * @module tutils/utils/hasOwn
 */

import type { PropertyKey } from '#src/types'

/**
 * Returns a boolean indicating if `key` is an own property of a given object.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn
 *
 * @todo examples
 *
 * @template T - Target object
 * @template K - Property to check
 *
 * @param {T} obj - Target object
 * @param {K} key - Property to check
 * @return {boolean} `true` if `key` is own property of `obj`
 */
const hasOwn = <T extends object, K extends PropertyKey>(
  obj: T,
  key: K
): boolean => Object.hasOwn(obj, key)

export default hasOwn
