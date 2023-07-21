/**
 * @file Utilities - overwrite
 * @module tutils/utils/overwrite
 */

import type { ObjectCurly, Overwrite } from '#src/types'
import overwriteWith from './overwrite-with'

/**
 * Assigns own properties from one or more `source` objects to a destination
 * object for all mutual properties in `base`. A mutual property is a property
 * that is an own property of both `base` and a `source` object. The initial
 * base object will **not** be modified.
 *
 * Source objects are applied from left to right. Subsequent sources overwrite
 * property assignments of previous sources.
 *
 * @see {@linkcode Overwrite}
 * @see {@linkcode overwriteWith}
 *
 * @todo examples
 *
 * @template T - Base object
 * @template U - Source object array
 *
 * @param {T} base - Base object
 * @param {U} source - Source object(s)
 * @return {Overwrite<T, U>} Overwrite result
 */
const overwrite = <T extends ObjectCurly, U extends readonly ObjectCurly[]>(
  base: T,
  ...source: U
): Overwrite<T, U> => {
  return overwriteWith<T, U>((_, incoming) => incoming, base, ...source)
}

export default overwrite
