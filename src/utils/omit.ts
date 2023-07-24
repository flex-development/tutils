/**
 * @file Utilities - omit
 * @module tutils/utils/omit
 */

import type { Omit, PropertyKey } from '#src/types'
import cast from './cast'
import clone from './clone'

/**
 * Removes properties from an object.
 *
 * The initial target object **will not** be modified.
 *
 * @see {@linkcode Omit}
 *
 * @todo examples
 *
 * @template T - Target object type
 * @template K - Keys to remove
 *
 * @param {T} obj - Object to omit from
 * @param {ReadonlyArray<K>} keys - Keys to remove
 * @return {Omit<T, K>} New object with properties in `keys` removed
 */
const omit = <T extends object, K extends PropertyKey>(
  obj: T,
  keys: readonly K[]
): Omit<T, K> => {
  return keys.reduce<Omit<T, K>>((acc, key) => {
    Reflect.deleteProperty(acc, key)
    return acc
  }, cast(clone(obj)))
}

export default omit
