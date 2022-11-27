/**
 * @file Interfaces - MapLike
 * @module tutils/interfaces/MapLike
 */

/**
 * Type of object where all values are of the same type.
 *
 * @template T - Value type
 */
interface MapLike<T> {
  [index: string]: T
}

export type { MapLike as default }
