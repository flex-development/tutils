/**
 * @file Type Definitions - BuiltIn
 * @module tutils/types/BuiltIn
 */

import type Primitive from './primitive'

/**
 * Built-in values.
 */
type BuiltIn = Date | Error | Function | Primitive | RegExp

export type { BuiltIn as default }
