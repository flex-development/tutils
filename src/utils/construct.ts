/**
 * @file Utilities - construct
 * @module tutils/utils/construct
 */

import type { Construct, Nilable, ObjectCurly } from '#src/types'
import cast from './cast'
import get from './get'
import keys from './keys'
import set from './set'

/**
 * Reconstructs a crushed object.
 *
 * A crushed object is one that was flattened to a single dimension.
 *
 * @see {@linkcode Construct}
 *
 * @todo examples
 *
 * @template T - Object to reconstruct
 *
 * @param {T} obj - Object to reconstruct
 * @return {Construct<T>} Reconstructed crushed object
 */
const construct = <T extends Nilable<ObjectCurly>>(obj: T): Construct<T> => {
  return keys(obj).reduce<Construct<T>>((acc, path) => {
    return cast(set(acc, path, get(obj, path)))
  }, cast({}))
}

export default construct
