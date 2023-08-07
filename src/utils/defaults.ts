/**
 * @file Utilities - defaults
 * @module tutils/utils/defaults
 */

import type { Defaults, ObjectCurly, Objectify } from '#src/types'
import assignWith from './assign-with'
import cast from './cast'
import isUndefined from './is-undefined'

/**
 * Assigns own properties of one or more `source` objects to a target object for
 * all target properties that resolve to `undefined`.
 *
 * The initial `base` object **will not** be modified.
 *
 * Source objects are applied from left to right.  Subsequent default values are
 * ignored if a property no longer resolves to `undefined`.
 *
 * @see {@linkcode Defaults}
 *
 * @todo examples
 *
 * @template T - Base object
 * @template U - Source object array
 *
 * @param {T} base - Base object
 * @param {U} source - Source object array
 * @return {Defaults<T, U>} Merge result
 */
const defaults = <T extends Objectify<any>, U extends readonly ObjectCurly[]>(
  base: T,
  ...source: U
): Defaults<T, U> => {
  return cast(
    assignWith(
      (curr: unknown, src: unknown) => (isUndefined(curr) ? src : curr),
      base,
      ...source
    )
  )
}

export default defaults
