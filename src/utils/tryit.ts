/**
 * @file Utilities - tryit
 * @module tutils/utils/tryit
 */

import type { Fn, Tryit } from '#src/types'

/**
 * Converts `fn` to an error-first callback.
 *
 * @template T - Function to convert
 * @template E - Error type
 *
 * @param {T} fn - Function to convert
 * @return {Tryit<T, E>} Error first callback
 */
function tryit<T extends Fn, E extends Error = Error>(fn: T): Tryit<T, E> {
  return async (
    ...args: Parameters<T>
  ): Promise<[E, null] | [null, Awaited<ReturnType<T>>]> => {
    try {
      return [null, (await fn(...args)) as Awaited<ReturnType<T>>]
    } catch (e: unknown) {
      return [e as E, null]
    }
  }
}

export default tryit
