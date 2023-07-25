/**
 * @file Utilities - assignWith
 * @module tutils/utils/assignWith
 */

import type { Assign, Fn, ObjectCurly, Objectify } from '#src/types'
import cast from './cast'
import clone from './clone'
import define from './define'
import descriptor from './descriptor'
import properties from './properties'

/**
 * Function used to customize assigned values.
 *
 * @param {unknown} outgoing - Outgoing property value
 * @param {unknown} incoming - Incoming property value from source object
 * @param {string | symbol} key - Current property key
 * @return {unknown} New property value
 */
type AssignCustomizer = Fn<[unknown, unknown, string | symbol], unknown>

/**
 * Assigns own properties of one or more `source` objects to a target object.
 *
 * A `customizer` is used to produce assigned values. The initial `base` object
 * **will not** be modified.
 *
 * Source objects are applied from left to right. Subsequent sources overwrite
 * property assignments of previous sources.
 *
 * New properties are *defined* rather than *assigned*. Both enumerable and
 * non-enumerable properties will be copied from source objects. Inherited
 * properties are not copied.
 *
 * **Note**: The return type may differ from the actual return value when using
 * a `customizer`. Additionally, TypeScript does not track inheritance. The
 * return type may also differ from the actual return value when source objects
 * contain inherited properties (e.g. `Map`, `Set`). In such cases, the return
 * type will include more keys than present on the return value.
 *
 * @see {@linkcode Assign}
 * @see {@linkcode AssignCustomizer}
 *
 * @todo examples
 *
 * @template T - Base object
 * @template U - Source object array
 *
 * @param {AssignCustomizer} customizer - Assigned value factory
 * @param {T} base - Base object
 * @param {U} source - Source object(s)
 * @return {Assign<T, U>} Assignment result
 */
const assignWith = <T extends Objectify<any>, U extends readonly ObjectCurly[]>(
  customizer: AssignCustomizer,
  base: T,
  ...source: U
): Assign<T, U> => {
  return source.reduce<Assign<T, U>>((acc, src) => {
    return properties(src).reduce<Assign<T, U>>((acc, key) => {
      return define(acc, key, {
        ...descriptor(src, key),
        value: customizer(acc[key], src[key], key)
      })
    }, acc)
  }, cast(clone(base)))
}

export { assignWith as default, type AssignCustomizer }
