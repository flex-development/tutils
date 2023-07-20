/**
 * @file Utilities - constant
 * @module tutils/utils/constant
 */

import type { EmptyArray, Fn } from '#src/types'
import cast from './cast'

/**
 * Creates a function that returns `value`.
 *
 * @todo examples
 *
 * @template T - Return value type
 *
 * @param {T} value - Return value
 * @return {Fn<EmptyArray, T>} Constant function
 */
const constant = <T = undefined>(value: T): Fn<EmptyArray, T> => {
  return () => cast(value)
}

export default constant
