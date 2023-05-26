/**
 * @file Utilities - get
 * @module tutils/utils/get
 */

import type { Get, NumberString } from '#src/types'
import at from './at'
import cast from './cast'
import isArray from './is-array'
import isEmptyString from './is-empty-string'
import isNIL from './is-nil'
import isNumeric from './is-numeric'
import isString from './is-string'
import isUndefined from './is-undefined'
import trim from './trim'

/**
 * Dynamically indexes `data` at `path`.
 *
 * If the indexed value is `undefined`, `fallback` will be returned instead.
 *
 * Supports dot-notation for nested paths and array indexing.
 *
 * @template T - Value to index
 * @template P - Index path
 * @template F - Fallback value type
 *
 * @param {T} data - Value to index
 * @param {P} path - Index path
 * @param {F} [fallback] - Fallback value
 * @return {Get<T, P, F>} Dynamically indexed value or `fallback`
 */
function get<T, P extends NumberString, F = undefined>(
  data: T,
  path: P,
  fallback?: F
): Get<T, P, F> {
  /**
   * Path segments.
   *
   * @const {string[]} segments
   */
  const segments: string[] = `${path}`.split(/[.[\]]/g).map(trim)

  /**
   * Dynamically indexed value.
   *
   * @var {unknown} value
   */
  let value: unknown = data

  // dynamically index data
  for (const key of segments) {
    // exit early if indexed value is null or undefined
    if (isNIL(value)) break

    // do nothing if key is an empty string
    if (isEmptyString(key)) continue

    // reset indexed value
    switch (true) {
      case (isArray(value) || isString(value)) && isNumeric(key):
        value = at(cast<string | readonly unknown[]>(value), +key)
        break
      default:
        value = cast<Record<string, any>>(value)[key]
        break
    }
  }

  return (isUndefined(value) ? fallback : value) as Get<T, P, F>
}

export default get
