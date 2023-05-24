/**
 * @file Utilities - timeiso
 * @module tutils/utils/timeiso
 */

import type { Nilable, NumberString, Timestamp } from '#src/types'
import timeunix from './timeunix'

/**
 * Converts the given `date` to an [ISO 8601][1] timestamp.
 *
 * If `date` is omitted, the current date will be converted a timestamp instead.
 *
 * [1]: https://en.wikipedia.org/wiki/ISO_8601
 *
 * @see {@linkcode Timestamp}
 *
 * @param {Nilable<Date | NumberString>} date - Date to convert
 * @return {Timestamp<'iso'>} ISO 8601 timestamp
 */
const timeiso = (date?: Nilable<Date | NumberString>): Timestamp<'iso'> => {
  return new Date(timeunix(date)).toISOString()
}

export default timeiso
