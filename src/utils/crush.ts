/**
 * @file Utilities - crush
 * @module tutils/utils/crush
 */

import type { Crush, Nilable } from '#src/types'
import cast from './cast'
import DOT from './dot'
import get from './get'
import keys from './keys'
import objectify from './objectify'

/**
 * Flattens an object to a single dimension.
 *
 * Nested keys will be expressed using dot-notation. Non-enumerable paths and
 * top-level symbols are not preserved.
 *
 * @see {@linkcode Crush}
 *
 * @todo examples
 *
 * @template T - Object to crush
 *
 * @param {T} obj - Object to crush
 * @return {Crush<T>} Crushed object
 */
const crush = <T extends Nilable<object>>(obj: T): Crush<T> => {
  return cast(
    objectify(
      keys(obj, { deep: true }).reduce<string[]>((acc, key, i, keys) => {
        return keys.slice(i).some(k => k.startsWith(key + DOT))
          ? acc
          : [...acc, key]
      }, []),
      key => key,
      key => get(obj, key)
    )
  )
}

export default crush
