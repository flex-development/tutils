/**
 * @file Utilities - desegment
 * @module tutils/utils/desegment
 */

import type { Dot, Join, Nilable } from '#src/types'
import cast from './cast'
import DOT from './dot'
import join from './join'

/**
 * Converts a path segment array to a path.
 *
 * @see {@linkcode Join}
 *
 * @todo examples
 *
 * @template T - Path segments type
 *
 * @param {T} segments - Path segments
 * @return {Join<T, Dot>} Reconstructed path
 */
const desegment = <T extends Nilable<readonly string[]>>(
  segments: T
): Join<T, Dot> => cast(join(segments, DOT))

export default desegment
