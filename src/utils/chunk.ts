/**
 * @file Utilities - chunk
 * @module tutils/utils/chunk
 */

import type { Nilable } from '#src/types'

/**
 * Returns a two-dimensional array containing arrays of length `size`.
 *
 * The final chunk will contain all remaining items if the given array can't be
 * split evenly.
 *
 * @todo examples
 *
 * @template T - Array to split
 *
 * @param {T} arr - Array to split
 * @param {Nilable<number>} [size=2] - Chunk size
 * @return {T[number][][]} Chunks array
 */
const chunk = <T extends readonly unknown[]>(
  arr: T,
  size?: Nilable<number>
): T[number][][] => {
  /**
   * Chunks array.
   *
   * @const {T[number][][]} chunks
   */
  const chunks: T[number][][] = []

  // chunk array
  for (let i = 0; i < Math.ceil(arr.length / (size ??= 2)); i++) {
    /**
     * Index to begin chunk.
     *
     * @const {number} idx
     */
    const idx: number = i * size

    // add chunk
    chunks.push(arr.slice(idx, idx + size))
  }

  return chunks
}

export default chunk
