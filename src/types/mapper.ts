/**
 * @file Type Definitions - Mapper
 * @module tutils/types/Mapper
 */

import type Fn from './fn'

/**
 * Array item interpolator.
 *
 * @template T - Array being interpolated
 * @template R - Mapped array item type
 *
 * @param {T[number]} item - Current array item
 * @param {number} index - Index of `item` in `array`
 * @param {T} array - Array being interpolated
 * @return {R} Mapped array item
 */
type Mapper<T extends readonly unknown[], R = any> = Fn<
  [T[number], number, T],
  R
>

export type { Mapper as default }
