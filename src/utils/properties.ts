/**
 * @file Utilities - properties
 * @module tutils/utils/properties
 */

import type { Nilable, PropertyKey, Stringify } from '#src/types'
import cast from './cast'
import enumerable from './enumerable'
import type PropertiesOptions from './properties.options'
import select from './select'

/**
 * Construct a union of own property keys.
 *
 * @template K - Property key type
 */
type Properties<K extends PropertyKey> = K extends symbol ? K : Stringify<K>

/**
 * Returns an array containing own properties of a given target value.
 *
 * The own properties of an object are those that are defined directly on that
 * object, and are not inherited from the object's prototype.
 *
 * Non-object arguments are [coerced to objects][1]. Enumerable own properties
 * of a string are its indices.
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion
 *
 * @see {@linkcode Properties}
 * @see {@linkcode PropertiesOptions}
 *
 * @todo examples
 *
 * @template T - Target value
 * @template K - Property key type
 *
 * @param {T} target - Target value
 * @param {Nilable<PropertiesOptions>} [options] - Property retrieval options
 * @param {Nilable<boolean>} [options.enu] - Enumerable properties only
 * @return {Properties<K>[]} Own properties of `target`
 */
const properties = <T, K extends PropertyKey>(
  target: T,
  options?: Nilable<PropertiesOptions>
): Properties<K>[] => {
  return select(
    cast<Properties<K>[]>([
      ...Object.getOwnPropertySymbols(target),
      ...Object.getOwnPropertyNames(target)
    ]),
    property => (options?.enu ? enumerable(target, property) : true)
  )
}

export { properties as default, type Properties }
