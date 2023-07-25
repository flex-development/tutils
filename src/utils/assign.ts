/**
 * @file Utilities - assign
 * @module tutils/utils/assign
 */

import type { Assign, ObjectCurly, Objectify } from '#src/types'
import assignWith from './assign-with'

/**
 * Assigns own properties of one or more `source` objects to a cloned `base`
 * object.
 *
 * Source objects are applied from left to right. Subsequent sources overwrite
 * property assignments of previous sources.
 *
 * New properties are *defined* rather than *assigned*. Both enumerable and
 * non-enumerable properties will be copied from source objects. Inherited
 * properties are not copied.
 *
 * **Note**: TypeScript does not track inheritance. The return type may differ
 * from the actual return value when source objects contain inherited properties
 * (e.g. `Map`, `Set`). In such cases, the return type will include more keys
 * than present on the return value.
 *
 * @see {@linkcode Assign}
 * @see {@linkcode assignWith}
 *
 * @todo examples
 *
 * @template T - Base object
 * @template U - Source object array
 *
 * @param {T} base - Base object
 * @param {U} source - Source object(s)
 * @return {Assign<T, U>} Assignment result
 */
const assign = <T extends Objectify<any>, U extends readonly ObjectCurly[]>(
  base: T,
  ...source: U
): Assign<T, U> => {
  return assignWith<T, U>((_, incoming) => incoming, base, ...source)
}

export default assign
