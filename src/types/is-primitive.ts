/**
 * @file Type Definitions - IsPrimitive
 * @module tutils/types/IsPrimitive
 */

import type IfAnyOrNever from './if-any-or-never'
import type Primitive from './primitive'

/**
 * Returns a boolean indicating if `T` extends {@linkcode Primitive}.
 *
 * @example
 *  type X = IsPrimitive<string>
 *  // true
 * @example
 *  type X = IsPrimitive<Primitive>
 *  // true
 * @example
 *  type X = IsPrimitive<OneOrMany<string>>
 *  // boolean
 * @example
 *  type X = IsPrimitive<readonly string[]>
 *  // false
 * @example
 *  type X = IsPrimitive<any>
 *  // false
 * @example
 *  type X = IsPrimitive<never>
 *  // false
 * @example
 *  type X = IsPrimitive<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsPrimitive<T> = IfAnyOrNever<T, false, T extends Primitive ? true : false>

export type { IsPrimitive as default }
