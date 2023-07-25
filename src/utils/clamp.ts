/**
 * @file Utilities - clamp
 * @module tutils/utils/clamp
 */

/**
 * Clamps `num` within the range `[min, max]`.
 *
 * @example
 *  clamp(-10, 0, 9)
 *  // 0
 * @example
 *  clamp(10, 0, 9)
 *  // 9
 * @example
 *  clamp(5, 0, 9)
 *  // 5
 * @example
 *  clamp(0, 0, 9)
 *  // 0
 * @example
 *  clamp(9, 0, 9)
 *  // 9
 *
 * @param {number} num - Number to clamp
 * @param {number} min - Lower bound (inclusive)
 * @param {number} max - Upper bound (inclusive)
 * @return {number} Clamped number
 */
const clamp = (num: number, min: number, max: number): number => {
  return num < min ? min : num > max ? max : num
}

export default clamp
