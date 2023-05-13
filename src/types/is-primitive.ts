/**
 * @file Type Definitions - IsPrimitive
 * @module tutils/types/IsPrimitive
 */

import type Primitive from './primitive'

/**
 * Returns a boolean indicating if `T` extends {@linkcode Primitive}.
 *
 * @template T - Type to evaluate
 */
type IsPrimitive<T> = T extends Primitive ? true : false

export type { IsPrimitive as default }
