/**
 * @file Utilities - define
 * @module tutils/utils/define
 */

import type { PropertyDescriptor } from '#src/interfaces'
import type { PropertyKey } from '#src/types'
import cast from './cast'
import description from './descriptor'
import hasOwn from './has-own'

/**
 * Adds a property to an object, or modifies attributes of an existing property.
 *
 * @see {@linkcode PropertyDescriptor}
 *
 * @todo examples
 *
 * @template T - Object on which to add or modify property
 * @template V - Property value
 * @template U - Updated object type
 *
 * @param {T} obj - Object on which to add or modify the property
 * @param {PropertyKey} property - Property to add or modify
 * @param {PropertyDescriptor<V>} [descriptor] - Property descriptor object
 * @return {U} Updated object
 */
const define = <T extends object, V = any, U = T>(
  obj: T,
  property: PropertyKey,
  descriptor: PropertyDescriptor<V> = {}
): U => {
  return Object.defineProperty(cast(obj), property, {
    ...(hasOwn(obj, property)
      ? description(obj, property)
      : hasOwn(descriptor, 'get') || hasOwn(descriptor, 'set')
      ? { configurable: true, enumerable: true }
      : { configurable: true, enumerable: true, writable: true }),
    ...descriptor
  })
}

export default define
