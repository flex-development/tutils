/**
 * @file Utilities - clone
 * @module tutils/utils/clone
 */

import type { Class, Optional } from '#src/types'
import cast from './cast'
import define from './define'
import descriptor from './descriptor'
import isArray from './is-array'
import isArrayBuffer from './is-array-buffer'
import isBuffer from './is-buffer'
import isDataView from './is-data-view'
import isFunction from './is-function'
import isMap from './is-map'
import isPrimitive from './is-primitive'
import isRegExp from './is-reg-exp'
import isSet from './is-set'
import isTypedArray from './is-typed-array'
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
 * @template T - Value type
 *
 * @param {T} value - Value to recursively clone
 * @return {T} Deep cloned `value`
 */
const clone = <T>(value: T): T => {
  // primitives do not need to be cloned
  if (isPrimitive(value)) return value

  // bind functions to empty objects to create clones
  if (isFunction(value)) return cast(value.bind({}))

  /**
   * Object to clone.
   *
   * @const {T & object} obj
   */
  const obj: T & object = cast(value)

  /**
   * Initializes a cloned object.
   *
   * @template T - Object type
   *
   * @param {T} obj - Object to clone
   * @return {T} Initialized clone
   */
  const init = <T extends object>(obj: T): T => {
    /**
     * Cloned object constructor.
     *
     * @const {Class<T>} Clone
     */
    const Clone: Class<T> = cast<Class<T>>(obj.constructor)

    /**
     * Initialized clone.
     *
     * @var {T} result
     */
    let result!: T

    // clone array value
    if (isArray(obj)) result = new Clone(obj.length)

    // clone array buffer
    if (isArrayBuffer(obj)) {
      result = new Clone(obj.byteLength)
      new Uint8Array(cast(result)).set(new Uint8Array(obj))
    }

    // clone buffer
    if (isBuffer(obj)) result = cast(Uint8Array.prototype.slice.call(obj))

    // clone dataview
    if (isDataView(obj)) {
      result = new Clone(init(obj.buffer), obj.byteOffset, obj.byteLength)
    }

    // clone regexp
    if (isRegExp(obj)) result = new Clone(obj.source, obj.flags)

    // clone typed array
    if (isTypedArray(obj)) {
      result = new Clone(init(obj.buffer), obj.byteOffset, obj.length)
    }

    // clone unknown value
    if (!cast<Optional<T>>(result)) result = new Clone()

    return result
  }

  /**
   * Cloned {@linkcode obj}.
   *
   * @const {T} result
   */
  const ret: T & object = init(obj)

  // redefine own properties on cloned object
  for (const key of properties(obj)) {
    define(ret, key, {
      ...descriptor(obj, key),
      value: clone(descriptor(obj, key).value)
    })
  }

  // repopulate map
  if (isMap(obj) && isMap(ret)) {
    for (const [key, val] of obj.entries()) ret.set(key, clone(val))
  }

  // repopulate set
  if (isSet(obj) && isSet(ret)) for (const val of obj) ret.add(clone(val))

  return ret
}

export default clone
