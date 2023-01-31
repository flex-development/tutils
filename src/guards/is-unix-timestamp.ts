/**
 * @file Type Guards - isUnixTimestamp
 * @module tutils/guards/isUnixTimestamp
 */

import type { TimestampUnix } from '#src/types'

/**
 * Checks if the given `value` is a valid [unix timestamp][1].
 *
 * [1]: https://unixtimestamp.com
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is TimestampUnix} `true` if `value` is valid unix timestamp
 */
const isUnixTimestamp = (value: unknown): value is TimestampUnix => {
  return typeof value === 'number' && new Date(value).getTime() > 0
}

export default isUnixTimestamp
