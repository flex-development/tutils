/**
 * @file Utilities - merge
 * @module tutils/utils/merge
 */

import type { Merge, ObjectCurly, Objectify } from '#src/types'
import mergeWith from './merge-with'

/**
 * Recursively merges all enumerable own properties of one or more `source`
 * objects into a target object. The initial `base` object **will not** be
 * modified.
 *
 * Source objects are applied from left to right. Subsequent sources overwrite
 * property assignments of previous sources.
 *
 * **Note**: TypeScript does not track enumerability or property inheritance.
 * The return type may differ from the actual return value when source objects
 * contain non-enumerable or inherited properties (e.g. `Map`, `Set`). In such
 * cases, the return type will include more keys than present on the return
 * value.
 *
 * @see {@linkcode Merge}
 * @see {@linkcode mergeWith}
 *
 * @todo examples
 *
 * @template T - Base object
 * @template U - Source object array
 *
 * @param {T} base - Base object
 * @param {U} source - Source object array
 * @return {Merge<T, U>} Merge result
 */
const merge = <T extends Objectify<any>, U extends readonly ObjectCurly[]>(
  base: T,
  ...source: U
): Merge<T, U> => {
  return mergeWith<T, U>((_, src: unknown) => src, base, ...source)
}

export default merge
