/**
 * @file Utilities - descriptor
 * @module tutils/utils/descriptor
 */

import type { PropertyDescriptor } from '#src/interfaces'
import type { PropertyKey } from '#src/types'

/**
 * Returns an object describing the configuration of a specific property.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
 *
 * @todo examples
 *
 * @template T - Property value type
 *
 * @param {unknown} target - Value to look for `key` in
 * @param {PropertyKey} key - Property key
 * @return {PropertyDescriptor<T>} Property descriptor object
 */
const descriptor = <T = any>(
  target: unknown,
  key: PropertyKey
): PropertyDescriptor<T> => Object.getOwnPropertyDescriptor(target, key) ?? {}

export default descriptor
