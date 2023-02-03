/**
 * @file Type Guards - isPrimitive
 * @module tutils/guards/isPrimitive
 */

import type { Primitive } from '#src/types'
import isBigInt from './is-big-int'
import isJsonPrimitive from './is-json-primitive'
import isSymbol from './is-symbol'
import isUndefined from './is-undefined'

/**
 * Checks if the given `value` is a [primitive][1].
 *
 * [1]: https://developer.mozilla.org/docs/Glossary/Primitive
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is Primitive} `true` if `value` is a primitive
 */
const isPrimitive = (value: unknown): value is Primitive => {
  return (
    isBigInt(value) ||
    isJsonPrimitive(value) ||
    isSymbol(value) ||
    isUndefined(value)
  )
}

export default isPrimitive