/**
 * @file Utilities - isJsonPrimitive
 * @module tutils/utils/isJsonPrimitive
 */

import type { JsonPrimitive } from '#src/types'
import isBoolean from './is-boolean'
import isNull from './is-null'
import isNumber from './is-number'
import isString from './is-string'

/**
 * Checks if the given `value` is a [primitive][1] [`JSON` value][2].
 *
 * [1]: https://developer.mozilla.org/docs/Glossary/Primitive
 * [2]: https://restfulapi.net/json-data-types
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is JsonPrimitive} `true` if `value` is primitive JSON value
 */
const isJsonPrimitive = (value: unknown): value is JsonPrimitive => {
  return isBoolean(value) || isNumber(value) || isNull(value) || isString(value)
}

export default isJsonPrimitive
