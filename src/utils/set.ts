/**
 * @file Utilities - set
 * @module tutils/utils/set
 */

import type { PropertyDescriptor } from '#src/interfaces'
import type { PropertyKey, Setter } from '#src/types'
import at from './at'
import cast from './cast'
import define from './define'
import get from './get'
import isNaN from './is-nan'
import isObject from './is-object'
import isSymbol from './is-symbol'
import isUndefined from './is-undefined'
import select from './select'
import split from './split'
import trim from './trim'

/**
 * Adds a property to an object, or modifies an existing property.
 *
 * The initial target object **will** be modified.
 *
 * This is the opposite of {@linkcode get}.
 *
 * Supports dot-notation for array and nested path updates.
 *
 * @see {@linkcode Setter}
 *
 * @todo examples
 *
 * @template T - Target object
 * @template K - Property to set
 * @template V - Property value
 *
 * @param {T} obj - Target object
 * @param {K} path - Property to set
 * @param {V} value - Property value
 * @param {PropertyDescriptor<V>} [descriptor] - Property descriptor object
 * @return {Setter<T, K, V>} Updated object
 */
const set = <T extends object, K extends PropertyKey, V>(
  obj: T,
  path: K,
  value: V,
  descriptor: PropertyDescriptor<V> = {}
): Setter<T, K, V> => {
  if (isSymbol(path)) define(obj, path, { ...descriptor, value })
  else {
    /**
     * Property path segments.
     *
     * @const {string[]} segments
     */
    const segments: string[] = select(
      split(path.toString(), /[.[\]]/g),
      segment => !!trim(segment)
    )

    /**
     * Set operation runner.
     *
     * @param {any} node - Value to update
     * @return {void} Nothing when complete
     */
    const $set = (node: any): void => {
      if (isObject(node)) {
        if (segments.length > 1) {
          /**
           * Current property path segment.
           *
           * @const {string} key
           */
          const key: string = segments.shift()!

          /**
           * Value of {@linkcode node} at {@linkcode key}.
           *
           * @const {any} value
           */
          const value: any = get(node, key)

          // reset value of node at key
          define(node, key, {
            configurable: true,
            enumerable: true,
            value: isUndefined(value)
              ? !isNaN(+at(segments, 0, ''))
                ? []
                : {}
              : value,
            writable: true
          })

          // set next value
          $set(get(node, key))
        } else if (segments.length) {
          define(node, at(segments, 0), { ...descriptor, value })
        }
      }

      return void 0
    }

    // set value
    $set(obj)
  }

  return cast(obj)
}

export default set
