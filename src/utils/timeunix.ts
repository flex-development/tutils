/**
 * @file Utilities - timeunix
 * @module tutils/utils/timeunix
 */

import type { Nilable, NumberString, Timestamp } from '#src/types'
import isNaN from './is-nan'
import isNIL from './is-nil'

/**
 * Converts a `date` to a [unix timestamp][1].
 *
 * If `date` is omitted, the current date will be converted a timestamp instead.
 *
 * [1]: https://unixtimestamp.com
 *
 * @see {@linkcode Timestamp}
 *
 * @todo examples
 *
 * @param {Nilable<Date | NumberString>} [date] - Date to convert
 * @return {Timestamp<'unix'>} Unix timestamp
 * @throws {RangeError} If timestamp is invalid
 */
const timeunix = (date?: Nilable<Date | NumberString>): Timestamp<'unix'> => {
  /**
   * {@linkcode date} as unix timestamp.
   *
   * @const {Timestamp<'unix'>} timestamp
   */
  const timestamp: Timestamp<'unix'> = isNIL(date)
    ? Date.now()
    : new Date(date).getTime()

  // throw if timestamp is invalid
  if (isNaN(timestamp)) {
    throw new RangeError('Invalid date', { cause: { date } })
  }

  return timestamp
}

export default timeunix
