/**
 * @file Utilities - truncate
 * @module tutils/utils/truncate
 */

import type { Nilable } from '#src/types'
import DOT from './dot'

/**
 * Truncates a string to a specified `length`.
 *
 * @example
 *  truncate('hello world', 8)
 *  // 'hello...'
 * @example
 *  truncate('beep boop', -7)
 *  // 'beep...'
 *
 * @param {string} str - String to truncate
 * @param {number} length - Output string length (including `suffix`)
 * @param {Nilable<string>} [suffix=DOT.repeat(3)] - Output string ending
 * @return {string} Truncated `string`
 */
const truncate = (
  str: string,
  length: number,
  suffix?: Nilable<string>
): string => {
  suffix ??= DOT.repeat(3)
  return str.slice(0, Math.abs(length) - suffix.length) + suffix
}

export default truncate
