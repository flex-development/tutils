/**
 * @file Test Globals - pf
 * @module tests/globals/pf
 * @see https://github.com/facebook/jest/tree/main/packages/pretty-format
 */

import { format, PrettyFormatOptions } from 'pretty-format'

/**
 * Returns a string representation of `val`.
 *
 * @param {unknown} val - Value to stringify
 * @param {PrettyFormatOptions} [options={min:true}] - Formatting options
 * @return {string} String representation of `val`
 */
const pf = (val: unknown, options: PrettyFormatOptions = {}): string => {
  // Set min default
  if (options.min === undefined) Object.assign(options, { min: true })

  return format(val, options)
}

global.pf = pf
