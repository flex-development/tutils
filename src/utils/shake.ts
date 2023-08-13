/**
 * @file Utilities - shake
 * @module tutils/utils/shake
 */

import type { Fn, ObjectCurly, Shake, Values } from '#src/types'
import cast from './cast'
import isUndefined from './is-undefined'
import properties from './properties'

/**
 * Remove properties from an object where the key-value meets a given `filter`
 * condition. The initial target object **will** be modified.
 *
 * All `undefined` properties will be removed if a `filter` is not provided.
 *
 * Inherited properties will not be removed.
 *
 * **Note**: TypeScript does not track inheritance. The return type may differ
 * from the actual return value when target objects contain inherited properties
 * (e.g. `Map`, `Set`) that meet the `filter` condition. In such cases, the
 * return type will have less properties than present on the return value.
 *
 * @see {@linkcode Shake}
 *
 * @todo examples
 *
 * @template T - Object to filter
 * @template F - Key value filter
 *
 * @param {T} obj - Object to filter
 * @param {Fn<[Values<T>[number]], boolean>} [filter=isUndefined] - Value filter
 * @return {Shake<T, F>} Filtered object
 */
const shake = <T extends ObjectCurly, F = undefined>(
  obj: T,
  filter: Fn<[Values<T>[number]], boolean> = isUndefined
): Shake<T, F> => {
  return properties(obj).reduce<Shake<T, F>>((acc, key) => {
    filter(obj[cast<keyof T>(key)]) && Reflect.deleteProperty(acc, key)
    return acc
  }, cast(obj))
}

export default shake
