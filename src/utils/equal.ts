/**
 * @file Utilities - equal
 * @module tutils/utils/equal
 */

import type {
  Fn,
  Nilable,
  Objectify,
  OwnPropertyKey,
  PropertyKey,
  TypedArray
} from '#src/types'
import cast from './cast'
import hasOwn from './has-own'
import identity from './identity'
import isArray from './is-array'
import isArrayBuffer from './is-array-buffer'
import isDataView from './is-data-view'
import isDate from './is-date'
import isMap from './is-map'
import isObjectLike from './is-object-like'
import isRegExp from './is-reg-exp'
import isSet from './is-set'
import isTypedArray from './is-typed-array'
import iterate from './iterate'
import reduce from './reduce'

/**
 * Checks if two values are deeply equal.
 *
 * A `customizer` can be used to map values before comparison. It **will not**
 * be called with nested property values.
 *
 * @todo examples
 *
 * @template T - Target value type
 * @template U - Comparison value type
 * @template H - Customized value type
 *
 * @param {T} a - Target value
 * @param {U} b - Comparison value
 * @param {Nilable<Fn<[T | U], H>>} [customizer=identity] - Value customizer
 * @return {boolean} `true` if `a` and `b` are deeply equal
 */
const equal = <T, U, H = PropertyKey>(
  a: T,
  b: U,
  customizer?: Nilable<Fn<[T | U], H>>
): boolean => {
  /**
   * Compared values cache.
   *
   * @const {WeakMap<Objectify<any>, Objectify<any>>} cache
   */
  const cache: WeakMap<Objectify<any>, Objectify<any>> = new WeakMap()

  /**
   * Returns an array containing own properties.
   *
   * @param {Objectify<any>} obj - Target object
   * @return {OwnPropertyKey[]} Own properties array
   */
  const owned = (obj: Objectify<any>): OwnPropertyKey[] => {
    return [
      ...Object.getOwnPropertySymbols(obj),
      ...Object.getOwnPropertyNames(obj)
    ]
  }

  /**
   * Returns a boolean indicating if `a` and `b` are deeply equal.
   *
   * @param {unknown} a - Target value
   * @param {unknown} b - Comparison value
   * @return {boolean} `true` if `a` and `b` are deeply equal
   */
  const dequal = (a: unknown, b: unknown): boolean => {
    // exit early if a and b are strictly equal
    if (a === b) return true

    // exit early if a or b is not object like
    if (!isObjectLike(a) || !isObjectLike(b)) return a !== a && b !== b

    // exit early on constructor mismatch
    if (a.constructor !== b.constructor) return false

    // compare cyclic values
    if (cache.get(a) && cache.get(b)) {
      return cache.get(a) === b && cache.get(b) === a
    }

    // cache objects
    cache.set(a, b)
    cache.set(b, a)

    // compare arrays
    if (isArray(a) && isArray(b)) {
      return a.length === b.length
        ? iterate(a.length, true, (acc: boolean, i: number) => {
          return acc && dequal(cast<unknown[]>(a)[i], cast<unknown[]>(b)[i])
        })
        : false
    }

    // compare array buffers
    if (isArrayBuffer(a) && isArrayBuffer(b)) {
      return dequal(new Uint8Array(a), new Uint8Array(b))
    }

    // compare data views
    if (isDataView(a) && isDataView(b)) {
      return a.byteLength === b.byteLength
        ? iterate(a.byteLength, true, (acc: boolean, i: number) => {
          return (
            acc &&
            cast<DataView>(a).getInt8(i) === cast<DataView>(b).getInt8(i)
          )
        })
        : false
    }

    // compare dates
    if (isDate(a) && isDate(b)) return a.getTime() === b.getTime()

    // compare maps
    if (isMap(a) && isMap(b)) {
      return a.size === b.size
        ? reduce([...a.entries()], (acc, [key, value]) => {
          return acc && isMap(b) && b.has(key) && dequal(value, b.get(key))
        }, true)
        : false
    }

    // compare regular expressions
    if (isRegExp(a) && isRegExp(b)) return a.toString() === b.toString()

    // compare sets
    if (isSet(a) && isSet(b)) {
      return a.size === b.size
        ? reduce([...a], (acc, value) => {
          return acc && [...cast<Set<unknown>>(b)].some(v => dequal(value, v))
        }, true)
        : false
    }

    // compare typed arrays
    if (isTypedArray(a) && isTypedArray(b)) {
      return a.length === b.length
        ? iterate(a.length, true, (acc: boolean, i: number) => {
          return acc && cast<TypedArray>(a)[i] === cast<TypedArray>(b)[i]
        })
        : false
    }

    /**
     * Own properties of {@linkcode a}.
     *
     * @const {OwnPropertyKey[]} properties
     */
    const properties: OwnPropertyKey[] = owned(a)

    // compare property values
    switch (true) {
      case properties.length !== owned(b).length:
        return false
      default:
        for (const p of properties) {
          if (p === 'stack' && a instanceof Error) continue
          if (!hasOwn(b, p)) return false
          if (!dequal(Reflect.get(a, p), Reflect.get(b, p))) return false
        }
    }

    return true
  }

  customizer ??= cast<Fn<[T | U], H>>(identity)
  return dequal(customizer(a), customizer(b))
}

export default equal
