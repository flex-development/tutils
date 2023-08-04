/**
 * @file Utilities - values
 * @module tutils/utils/values
 */

import type { Values } from '#src/types'
import cast from './cast'

/**
 * Returns an array containing an object's own enumerable string-keyed property
 * values.
 *
 * Non-object arguments are [coerced to objects][1]. Of the primitive values,
 * only strings have own enumerable properties. All other primitives return an
 * empty array.
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion
 *
 * @see {@linkcode Values}
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/values
 *
 * @todo examples
 *
 * @template T - Object containing properties and methods
 *
 * @param {T} obj - Object containing properties and methods
 * @return {Values<T>} Enumerable string-keyed property values
 */
const values = <T>(obj: T): Values<T> => {
  return cast(Object.values<NonNullable<T>>(obj ?? cast({})))
}

export default values
