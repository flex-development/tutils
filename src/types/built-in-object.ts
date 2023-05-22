/**
 * @file Type Definitions - BuiltInObject
 * @module tutils/types/BuiltInObject
 */

import type BuiltIn from './built-in'
import type Primitive from './primitive'

/**
 * Standard built-in objects.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects
 */
type BuiltInObject = Exclude<BuiltIn, Primitive>

export type { BuiltInObject as default }
