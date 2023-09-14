/**
 * @file Utilities - omit
 * @module tutils/utils/omit
 */

import type { Omit, PropertyKey, Spread } from '#src/types'
import cast from './cast'
import clone from './clone'
import reduce from './reduce'

/**
 * Removes configurable properties from an object.
 *
 * Non-object arguments are coerced to objects.
 *
 * The initial target value **will not** be modified.
 *
 * @see {@linkcode Spread}
 * @see {@linkcode Omit}
 *
 * @todo examples
 *
 * @template T - Target value type
 * @template K - Keys to remove
 *
 * @param {T} target - Value to omit from
 * @param {ReadonlyArray<K>} keys - Keys to remove
 * @return {Omit<Spread<T>, K>} New object with properties in `keys` removed
 */
const omit = <T, K extends PropertyKey>(
  target: T,
  keys: readonly K[]
): Omit<Spread<T>, K> => {
  return reduce(keys, (acc, key) => {
    Reflect.deleteProperty(acc, key)
    return acc
  }, cast({ ...clone(target) }))
}

export default omit
