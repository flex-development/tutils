/**
 * @file Utilities - chunk
 * @module tutils/utils/chunk
 */

import type { Nilable } from '#src/types'

/**
 * Returns a two-dimensional array containing arrays of length `size`.
 *
 * If `array` can't be split evenly, the final chunk will contain the remaining
 * items.
 *
 * @template T - Array item type
 *
 * @param {ReadonlyArray<T>} array - Array to split
 * @param {Nilable<number>} [size=2] - Chunk size
 * @return {T[][]} Chunks array
 */
function chunk<T>(array: readonly T[], size?: Nilable<number>): T[][] {
  /**
   * Chunks array.
   *
   * @const {T[][]} chunks
   */
  const chunks: T[][] = []

  for (let i = 0; i < Math.ceil(array.length / (size ??= 2)); i++) {
    /**
     * Index to begin chunk.
     *
     * @const {number} chunk_index
     */
    const chunk_index: number = i * size

    // add chunk
    chunks.push(array.slice(chunk_index, chunk_index + size))
  }

  return chunks
}

export default chunk
