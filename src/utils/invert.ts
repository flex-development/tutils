/**
 * @file Utilities - invert
 * @module tutils/utils/invert
 */

import type { Invert, Nilable, Primitive, PropertyKey } from '#src/types'
import cast from './cast'
import define from './define'
import get from './get'
import properties from './properties'

/**
 * Returns a new object with keys and values reversed.
 *
 * @see {@linkcode Invert}
 *
 * @todo examples
 *
 * @template T - Object to invert
 *
 * @param {T} obj - Object to invert
 * @return {Invert<T>} Inverted object
 */
const invert = <T extends Nilable<{ [K in PropertyKey]?: Primitive }>>(
  obj: T
): Invert<T> => {
  return properties(obj).reduce<Invert<T>>((acc, key) => {
    return define(acc, get(obj, key), { value: key })
  }, cast({}))
}

export default invert
