/**
 * @file Utilities - overwriteWith
 * @module tutils/utils/overwriteWith
 */

import type { Fn, ObjectCurly, Overwrite } from '#src/types'
import cast from './cast'
import clone from './clone'
import define from './define'
import descriptor from './descriptor'
import hasOwn from './has-own'
import properties from './properties'

/**
 * Function used to customize assigned values.
 *
 * @param {unknown} outgoing - Outgoing property value
 * @param {unknown} incoming - Incoming property value from source object
 * @param {string | symbol} key - Current property key
 * @return {unknown} New property value
 */
type OverwriteCustomizer = Fn<[unknown, unknown, string | symbol], unknown>

/**
 * Assigns own properties from one or more `source` objects to a destination
 * object for all mutual properties in `base`. A mutual property is a property
 * that is an own property of both `base` and a `source` object. The initial
 * base object will **not** be modified.
 *
 * A `customizer` is used to produce assigned values.
 *
 * Source objects are applied from left to right. Subsequent sources overwrite
 * property assignments of previous sources.
 *
 * @see {@linkcode Overwrite}
 * @see {@linkcode OverwriteCustomizer}
 *
 * @todo examples
 *
 * @template T - Base object
 * @template U - Source object array
 *
 * @param {OverwriteCustomizer} customizer - Assigned value factory
 * @param {T} base - Base object
 * @param {U} source - Source object(s)
 * @return {Overwrite<T, U>} Overwrite result
 */
const overwriteWith = <T extends ObjectCurly, U extends readonly ObjectCurly[]>(
  customizer: OverwriteCustomizer,
  base: T,
  ...source: U
): Overwrite<T, U> => {
  return source.reduce<Overwrite<T, U>>((acc, src) => {
    return properties(src).reduce<Overwrite<T, U>>((acc, key) => {
      return hasOwn(acc, key)
        ? define(acc, key, {
            ...descriptor(src, key),
            value: customizer(acc[key], src[key], key)
          })
        : acc
    }, acc)
  }, cast(clone(base)))
}

export { overwriteWith as default, type OverwriteCustomizer }
