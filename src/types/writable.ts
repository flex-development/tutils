/**
 * @file Type Definitions - Writable
 * @module tutils/types/Writable
 */

/**
 * Construct a type where all properties of `T` are writable.
 *
 * This is the opposite of {@linkcode Readonly}.
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 */
type Writable<T> = T extends unknown
  ? { -readonly [K in keyof T]: T[K] }
  : never

export type { Writable as default }
