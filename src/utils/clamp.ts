/**
 * @file Utilities - clamp
 * @module tutils/utils/clamp
 */

/**
 * Clamps `num` within the range `[min, max]`.
 *
 * @param {number} num - Number to clamp
 * @param {number} min - Lower bound (inclusive)
 * @param {number} max - Upper bound (inclusive)
 * @return {number} Clamped `num`
 */
const clamp = (num: number, min: number, max: number): number => {
  return num < min ? min : num > max ? max : num
}

export default clamp
