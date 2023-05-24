/**
 * @file Utilities - timestamp
 * @module tutils/utils/timestamp
 */

import type {
  Nilable,
  NumberString,
  Timestamp,
  TimestampFormat
} from '#src/types'
import timeiso from './timeiso'
import timeunix from './timeunix'

/**
 * Converts the given `date` to an [ISO 8601][1] or [unix][2] timestamp.
 *
 * If `date` is omitted, the current date will be converted a timestamp instead.
 *
 * [1]: https://en.wikipedia.org/wiki/ISO_8601
 * [2]: https://unixtimestamp.com
 *
 * @see {@linkcode Timestamp}
 *
 * @template F - Timestamp format
 *
 * @param {Nilable<Date | NumberString>} date - Date to convert
 * @param {Nilable<F>} [format='unix'] - Timestamp format
 * @return {Timestamp<F>} ISO 8601 or unix timestamp
 */
function timestamp<F extends TimestampFormat = 'unix'>(
  date?: Nilable<Date | NumberString>,
  format?: Nilable<F>
): Timestamp<F> {
  return (format === 'iso' ? timeiso : timeunix)(
    date
  ) as unknown as Timestamp<F>
}

export default timestamp
