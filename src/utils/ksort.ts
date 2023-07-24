/**
 * @file Utilities - ksort
 * @module tutils/utils/ksort
 */

import type { PropertyDescriptor } from '#src/interfaces'
import type { Nilable, ObjectCurly, Objectify } from '#src/types'
import alphabetize from './alphabetize'
import cast from './cast'
import define from './define'
import descriptor from './descriptor'
import identity from './identity'
import isArray from './is-array'
import isObjectPlain from './is-object-plain'
import type KsortOptions from './ksort.options'
import properties from './properties'

/**
 * Returns an object with sorted keys.
 *
 * The initial target object **will** be modified.
 *
 * @see {@linkcode KsortOptions}
 *
 * @todo examples
 *
 * @template T - Object containing keys to sort
 *
 * @param {T} obj - Object containing keys to sort
 * @param {Nilable<KsortOptions>} [options] - Key sorting options
 * @return {T} Target object with sorted keys
 */
const ksort = <T extends Objectify<any>>(
  obj: T,
  options?: Nilable<KsortOptions>
): T => {
  // do nothing if obj is not an array or plain object
  if (!isArray(obj) && !isObjectPlain(obj)) return obj

  /**
   * Sorted values cache.
   *
   * @const {WeakMap<object, object>} cache
   */
  const cache: WeakMap<object, object> = new WeakMap()

  /**
   * Sorts the keys of plain objects in the given array.
   *
   * @template T - Array containing plain objects
   *
   * @param {T} arr - Array containing plain objects
   * @return {T} New array containing plain objects with sorted keys
   */
  const arrsort = <T extends unknown[]>(arr: T): T => {
    // return cached output value
    if (cache.has(arr)) return cast(cache.get(arr))

    // cache array
    cache.set(arr, arr)

    // sort keys of plain objects in arr
    for (const [key, item] of arr.entries()) {
      if (isArray(item)) arr[key] = arrsort(cast(item))
      if (isObjectPlain(item)) arr[key] = sort(item)
    }

    return arr
  }

  /**
   * Removes all properties from an object.
   *
   * @template T - Target object
   *
   * @param {T} obj - Target object
   * @return {T} Empty object
   */
  const clear = <T extends ObjectCurly>(obj: T): T => {
    for (const key of properties(obj)) Reflect.deleteProperty(obj, key)
    return obj
  }

  /**
   * Returns a new object with sorted keys.
   *
   * @template T - Object to sort
   *
   * @param {T} object - Object to sort
   * @return {T} New object with sorted keys
   */
  const sort = <T extends ObjectCurly>(object: T): T => {
    // return cached output value
    if (cache.has(object)) return cast(cache.get(object))

    /**
     * Property names mapped to property descriptors.
     *
     * @const {[string | symbol,  PropertyDescriptor][]}
     */
    const props: [string | symbol, PropertyDescriptor][] = [
      ...alphabetize(Object.getOwnPropertyNames(object), identity, options),
      ...Object.getOwnPropertySymbols(object)
    ].map(key => [key, descriptor(object, key)])

    /**
     * New object with sorted keys.
     *
     * @const {T} ret
     */
    const ret: T = clear(object)

    // cache object with sorted keys
    cache.set(object, ret)

    // define properties of new object and recursively sort keys
    for (const [key, descriptor] of props) {
      if (options?.deep) {
        switch (true) {
          case isArray(descriptor.value):
            descriptor.value = arrsort(cast<unknown[]>(descriptor.value))
            break
          case isObjectPlain(descriptor.value):
            descriptor.value = sort(cast<ObjectCurly>(descriptor.value))
            break
          default:
            break
        }
      }

      // define property
      define(ret, key, descriptor)
    }

    return ret
  }

  return cast(
    isArray(obj) ? (options?.deep ? arrsort(cast(obj)) : obj) : sort(obj)
  )
}

export default ksort
