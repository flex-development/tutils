/**
 * @file Utilities - tryit
 * @module tutils/utils/tryit
 */

import type { Fn, Tryit } from '#src/types'
import cast from './cast'

/**
 * Converts a function to an asynchronous error-first callback.
 *
 * @todo examples
 *
 * @template T - Function to convert
 * @template E - Error type
 *
 * @param {T} fn - Function to convert
 * @return {Tryit<T, E>} Error first callback
 */
const tryit = <T extends Fn, E extends Error = Error>(fn: T): Tryit<T, E> => {
  return async (
    ...args: Parameters<T>
  ): Promise<[E, null] | [null, Awaited<ReturnType<T>>]> => {
    try {
      return [null, await fn(...args)]
    } catch (e: unknown) {
      return [cast<E>(e), null]
    }
  }
}

export default tryit
