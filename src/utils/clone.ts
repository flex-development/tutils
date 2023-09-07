/**
 * @file Utilities - clone
 * @module tutils/utils/clone
 */

import type { PropertyDescriptor } from '#src/interfaces'
import type { Class, Objectify } from '#src/types'
import cast from './cast'
import define from './define'
import descriptor from './descriptor'
import fallback from './fallback'
import ifelse from './ifelse'
import isArray from './is-array'
import isArrayBuffer from './is-array-buffer'
import isBuffer from './is-buffer'
import isDataView from './is-data-view'
import isDate from './is-date'
import isFunction from './is-function'
import isMap from './is-map'
import isPrimitive from './is-primitive'
import isRegExp from './is-reg-exp'
import isSet from './is-set'
import isTypedArray from './is-typed-array'
import isUndefined from './is-undefined'
import isURL from './is-url'
import properties from './properties'

/**
 * Creates a deep clone of `value`.
 *
 * This function is loosely based on the [structured clone algorithm][1].
 *
 * [1]: https://mdn.io/Structured_clone_algorithm
 *
 * @todo document differences between structured clone algorithm
 * @todo examples
 *
 * @template T - Cloned value type
 *
 * @param {T} value - Value to recursively clone
 * @return {T} Deep cloned `value`
 */
const clone = <T>(value: T): T => {
  /**
   * Cloned values cache.
   *
   * @const {WeakMap<Objectify<any>, Objectify<any>>} cache
   */
  const cache: WeakMap<Objectify<any>, Objectify<any>> = new WeakMap()

  /**
   * Deep clones `value`.
   *
   * @template T - Value type
   *
   * @param {T} value - Value to deep clone
   * @return {T} Deep cloned `value`
   */
  const dclone = <T>(value: T): T => {
    // primitives do not need to be cloned
    if (isPrimitive(value)) return value

    // bind functions to empty objects to create clones
    if (isFunction(value)) return cast(value.bind({}))

    /**
     * Object to clone.
     *
     * @const {Objectify<any> & T} obj
     */
    const obj: Objectify<any> & T = cast(value)

    /**
     * Cloned object constructor.
     *
     * @const {Class<T>} Clone
     */
    const Clone: Class<Objectify<any> & T> = cast(obj.constructor)

    /**
     * Cloned value.
     *
     * @var {Objectify<any> & T} cloned
     */
    let cloned!: Objectify<any> & T

    // init cloned array
    if (isArray(obj)) cloned = new Clone(obj.length)

    // init cloned array buffer
    if (isArrayBuffer(obj)) {
      cloned = new Clone(obj.byteLength)
      new Uint8Array(cast(cloned)).set(new Uint8Array(obj))
    }

    // init cloned buffer
    if (isBuffer(obj)) cloned = cast(Uint8Array.prototype.slice.call(obj))

    // init cloned data view
    if (isDataView(obj)) {
      cloned = new Clone(dclone(obj.buffer), obj.byteOffset, obj.byteLength)
    }

    // init cloned date
    if (isDate(obj)) cloned = new Clone(obj.getTime())

    // init cloned regex
    if (isRegExp(obj)) cloned = new Clone(obj.source, obj.flags)

    // init cloned typed array
    if (isTypedArray(obj)) {
      cloned = new Clone(dclone(obj.buffer), obj.byteOffset, obj.length)
    }

    // init cloned url
    if (isURL(obj)) cloned = new Clone(obj.href)

    // init unknown clone
    if (isUndefined(cloned) && isFunction(Clone)) cloned = new Clone()

    // check for circular references and return corresponding clone
    if (cache.has(obj)) return cast(cache.get(obj))

    // cache object and clone
    cache.set(obj, cloned = fallback(cloned, cast({})))

    // define own properties of initial object on cloned object
    for (const key of properties(obj)) {
      /**
       * Property descriptor for {@linkcode key}.
       *
       * @const {PropertyDescriptor} $d
       */
      const $d: PropertyDescriptor = descriptor(obj, key)

      // define property on cloned object
      define(
        cloned,
        key,
        ifelse($d.value, { ...$d, value: dclone($d.value) }, $d)
      )
    }

    // repopulate map
    if (isMap(obj) && isMap(cloned)) {
      for (const [key, val] of obj.entries()) cloned.set(key, dclone(val))
    }

    // repopulate set
    if (isSet(obj) && isSet(cloned)) for (const v of obj) cloned.add(dclone(v))

    return cloned
  }

  return dclone(value)
}

export default clone
