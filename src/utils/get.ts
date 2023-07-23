/**
 * @file Utilities - get
 * @module tutils/utils/get
 */

import type { Get, ObjectCurly, PropertyKey } from '#src/types'
import at from './at'
import cast from './cast'
import hasOwn from './has-own'
import isArray from './is-array'
import isNIL from './is-nil'
import isNumeric from './is-numeric'
import isObject from './is-object'
import isString from './is-string'
import isSymbol from './is-symbol'
import isUndefined from './is-undefined'
import select from './select'
import split from './split'
import trim from './trim'

/**
 * Dynamically indexes a `target` value at `path`.
 *
 * If the indexed value resolves to `undefined`, `fallback` will be returned
 * instead.
 *
 * Supports dot-notation for nested paths and array indexing.
 *
 * @todo examples
 *
 * @template T - Value to index
 * @template K - Property to select
 * @template F - Fallback value type
 *
 * @param {T} target - Value to index
 * @param {K} path - Property to select
 * @param {F} [fallback] - Fallback value
 * @return {Get<T, K, F>} Dynamically indexed value or `fallback`
 */
const get = <T, K extends PropertyKey, F = undefined>(
  target: T,
  path: K,
  fallback?: F
): Get<T, K, F> => {
  /**
   * Dynamically indexed value.
   *
   * @var {unknown} ret
   */
  let ret: unknown = isSymbol(path) ? undefined : target

  // get dynamically indexed value
  if ((isObject(target) && hasOwn(target, path)) || isSymbol(path)) {
    ret = target[cast<keyof T>(path)]
  } else {
    for (const key of select(split(path.toString(), /[.[\]]/g), null, trim)) {
      // exit early if indexed value is null or undefined
      if (isNIL(ret)) break

      // reset indexed value
      ret =
        isNumeric(key) && (isArray(ret) || isString(ret))
          ? at(cast<string | readonly unknown[]>(ret), +key)
          : cast<ObjectCurly>(ret)[key]
    }
  }

  return cast(isUndefined(ret) ? fallback : ret)
}

export default get
