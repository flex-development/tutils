/**
 * @file Type Definitions - Timestamp
 * @module tutils/types/Timestamp
 */

import type NumberString from './number-string'
import type Opaque from './opaque'
import type TimestampFormat from './timestamp-format'

/**
 * An [ISO 8601][1] or [unix][2] timestamp.
 *
 * [1]: https://en.wikipedia.org/wiki/ISO_8601
 * [2]: https://unixtimestamp.com
 *
 * @see {@linkcode TimestampFormat}
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date
 *
 * @template F - Timestamp format
 */
type Timestamp<F extends TimestampFormat> = Opaque<
  F extends 'unix' ? number : F extends 'iso' ? string : NumberString,
  '$timestamp'
>

export type { Timestamp as default }
