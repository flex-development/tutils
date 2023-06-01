/**
 * @file Type Definitions - Timestamp
 * @module tutils/types/Timestamp
 */

import type IfNever from './if-never'
import type NumberString from './number-string'
import type Opaque from './opaque'
import type TimestampFormat from './timestamp-format'
import type TimestampToken from './timestamp-token'

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
type Timestamp<F extends TimestampFormat> = IfNever<
  F,
  F,
  Opaque<
    F extends 'unix' ? number : F extends 'iso' ? string : NumberString,
    TimestampToken
  >
>

export type { Timestamp as default }
