/**
 * @file Type Definitions - Joinable
 * @module tutils/types/Joinable
 */

import type Primitive from './primitive'

/**
 * Types supported by [`Array.prototype.join`][1].
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 */
type Joinable = Exclude<Primitive, symbol>

export type { Joinable as default }
