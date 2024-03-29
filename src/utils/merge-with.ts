/**
 * @file Utilities - mergeWith
 * @module tutils/utils/mergeWith
 */

import type {
  Fn,
  Merge,
  ObjectCurly,
  Objectify,
  OwnPropertyKey
} from '#src/types'
import cast from './cast'
import define from './define'
import descriptor from './descriptor'
import isObjectPlain from './is-object-plain'
import properties from './properties'
import reduce from './reduce'

/**
 * Function used to customize assigned values.
 *
 * @param {any} outgoing - Outgoing property value
 * @param {any} incoming - Incoming property value from source object
 * @param {OwnPropertyKey} key - Current property key
 * @return {any} New property value
 */
type MergeCustomizer = Fn<[any, any, OwnPropertyKey]>

/**
 * Recursively merges all enumerable own properties of one or more `source`
 * objects into a target object. The initial `base` object **will not** be
 * modified.
 *
 * A `customizer` is be used to produce merged values. Plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment.
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
 * @see {@linkcode MergeCustomizer}
 *
 * @todo examples
 *
 * @template T - Base object
 * @template U - Source object array
 *
 * @param {MergeCustomizer} customizer - Merged value factory
 * @param {T} base - Base object
 * @param {U} source - Source object array
 * @return {Merge<T, U>} Merge result
 */
const mergeWith = <T extends Objectify<any>, U extends readonly ObjectCurly[]>(
  customizer: MergeCustomizer,
  base: T,
  ...source: U
): Merge<T, U> => {
  return reduce(source, (acc, src) => {
    return reduce(properties(src), (acc, key) => {
      /**
       * Outgoing property value.
       *
       * @const {unknown} outgoing
       */
      const outgoing: unknown = acc[key]

      /**
       * Incoming property value.
       *
       * @var {unknown} incoming
       */
      let incoming: unknown = src[key]

      // do recursive merge if incoming and outgoing values are plain objects
      if (isObjectPlain(outgoing) && isObjectPlain(incoming)) {
        incoming = mergeWith(customizer, outgoing, incoming)
      }

      // define property on accumulated merge result
      return define(acc, key, {
        ...descriptor(src, key),
        value: customizer(outgoing, incoming, key)
      })
    }, acc)
  }, cast({ ...base }))
}

export { mergeWith as default, type MergeCustomizer }
