/**
 * @file Type Definitions - IfLiteral
 * @module tutils/types/IfLiteral
 */

import type IsLiteral from './is-literal'
import type IsNever from './is-never'
import type Primitive from './primitive'

/**
 * Returns a type that indicates if `U` extends a literal {@linkcode Primitive}.
 *
 * @see {@linkcode IsLiteral}
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
 *
 * @example
 *  type X = IfLiteral<3n, Primitive, 1, 0>
 *  // 1
 * @example
 *  type X = IfLiteral<3n, bigint, 1, 0>
 *  // 1
 * @example
 *  type X = IfLiteral<false, Primitive, 1, 0>
 *  // 1
 * @example
 *  type X = IfLiteral<true, boolean, 1, 0>
 *  // 1
 * @example
 *  type X = IfLiteral<3, Primitive, 1, 0>
 *  // 1
 * @example
 *  type X = IfLiteral<3, number, 1, 0>
 *  // 1
 * @example
 *  type X = IfLiteral<'msg', Primitive, 1, 0>
 *  // 1
 * @example
 *  type X = IfLiteral<'msg', string, 1, 0>
 *  // 1
 * @example
 *  type X = IfLiteral<NIL, Primitive, 1, 0>
 *  // 1
 * @example
 *  type X = IfLiteral<Primitive, Primitive, 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfLiteral<NonNullable<Primitive>, Primitive, 1, 0>
 *  // 0
 * @example
 *  type X = IfLiteral<3 & { id: string }, Primitive, 1, 0>
 *  // 0
 * @example
 *  type X = IfLiteral<{ hello: 'world' }, Primitive, 1, 0>
 *  // 0
 * @example
 *  type X = IfLiteral<any, Primitive, 1, 0>
 *  // 0
 * @example
 *  type X = IfLiteral<never, Primitive, 1, 0>
 *  // 0
 * @example
 *  type X = IfLiteral<unknown, Primitive, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template P - Primitive value type
 * @template T - Type if `U` extends a literal `Primitive`
 * @template F - Type if `U` does not extend a literal `Primitive`
 */
type IfLiteral<U, P extends Primitive, T, F> = IsNever<U> extends true
  ? F
  : U extends unknown
  ? IsLiteral<U, P> extends true
    ? T
    : F
  : F

export type { IfLiteral as default }
