/**
 * @file Utilities - hasOwn
 * @module tutils/utils/hasOwn
 */

import type { PropertyKey } from '#src/types'
import cast from './cast'
import isNIL from './is-nil'

/**
 * Returns a boolean indicating if `key` is an own property of a given object.
 *
 * **Note**: Non-object arguments are [coerced to objects][1].
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn
 *
 * @todo examples
 *
 * @template T - Target value
 * @template K - Property to check
 *
 * @param {T} target - Target value
 * @param {K} key - Property to check
 * @return {boolean} `true` if `key` is own property of `target`
 */
const hasOwn = <T, K extends PropertyKey>(target: T, key: K): boolean => {
  return !isNIL(target) && Object.hasOwn(cast(target), key)
}

export default hasOwn
