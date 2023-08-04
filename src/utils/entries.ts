/**
 * @file Utilities - entries
 * @module tutils/utils/entries
 */

import type { Entries } from '#src/types'
import cast from './cast'

/**
 * Returns an array containing an object's own enumerable string-keyed property
 * key-value pairs.
 *
 * Non-object arguments are [coerced to objects][1]. Of the primitive values,
 * only strings have own enumerable properties. All other primitives return an
 * empty array.
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion
 *
 * @see {@linkcode Entries}
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 *
 * @todo examples
 *
 * @template T - Object containing properties and methods
 *
 * @param {T} obj - Object containing properties and methods
 * @return {Entries<T>} Enumerable string-keyed property key-value pairs
 */
const entries = <T>(obj: T): Entries<T> => {
  return cast(Object.entries<NonNullable<T>>(obj ?? cast({})))
}

export default entries
