/**
 * @file Utilities - isTypedArray
 * @module tutils/utils/isTypedArray
 */

import type { TypedArray } from '#src/types'
import isBigInt64Array from './is-big-int64-array'
import isBigUint64Array from './is-big-uint64-array'
import isFloat32Array from './is-float32-array'
import isFloat64Array from './is-float64-array'
import isInt16Array from './is-int16-array'
import isInt32Array from './is-int32-array'
import isInt8Array from './is-int8-array'
import isUint16Array from './is-uint16-array'
import isUint32Array from './is-uint32-array'
import isUint8Array from './is-uint8-array'
import isUint8ClampedArray from './is-uint8-clamped-array'

/**
 * Checks if `value` is a {@linkcode TypedArray} instance.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is TypedArray} `true` if `value` is `TypedArray` instance
 */
const isTypedArray = (value: unknown): value is TypedArray => {
  return (
    isBigInt64Array(value) ||
    isBigUint64Array(value) ||
    isFloat32Array(value) ||
    isFloat64Array(value) ||
    isInt8Array(value) ||
    isInt16Array(value) ||
    isInt32Array(value) ||
    isUint8Array(value) ||
    isUint8ClampedArray(value) ||
    isUint16Array(value) ||
    isUint32Array(value)
  )
}

export default isTypedArray
