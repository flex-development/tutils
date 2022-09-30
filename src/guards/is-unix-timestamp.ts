/**
 * @file Type Guards - isUnixTimestamp
 * @module tutils/guards/isUnixTimestamp
 */

import type { TimestampUnix } from '#src/types'

/**
 * Checks if `timestamp` is a valid [unix timestamp][1].
 *
 * [1]: https://unixtimestamp.com
 *
 * @param {any} [timestamp] - Value to check
 * @return {boolean} `true` if `timestamp` is valid unix timestamp
 */
const isUnixTimestamp = (timestamp?: any): timestamp is TimestampUnix => {
  return typeof timestamp === 'number' && new Date(timestamp).getTime() > 0
}

export default isUnixTimestamp
