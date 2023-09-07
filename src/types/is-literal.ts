/**
 * @file Type Definitions - IsLiteral
 * @module tutils/types/IsLiteral
 */

import type IfAnyOrNever from './if-any-or-never'
import type IfFalse from './if-false'
import type IfNever from './if-never'
import type IfNil from './if-nil'
import type IfTrue from './if-true'
import type Primitive from './primitive'

/**
 * Returns a boolean indicating if `T` extends a literal {@linkcode Primitive}.
 *
 * @internal
 *
 * @template T - Type to evaluate
 * @template P - Primitive value type
 * @template U - Copy of pre-distributed `T`
 */
type LiteralCheck<T, P extends Primitive = Primitive, U = T> = IfAnyOrNever<
  T,
  false,
  // dprint-ignore
  T extends object
    ? false
    : T extends Extract<T, P>
    ? Extract<P, T> extends infer X
      ? IfNever<
          X,
          true,
          IfNil<
            X,
            true,
            boolean extends U ? false : IfFalse<T, true, IfTrue<T, true, false>>
          >
        >
      : never
    : false
>

/**
 * Returns a boolean indicating if `T` extends a literal {@linkcode Primitive}.
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
 *
 * @example
 *  type X = IsLiteral<3n>
 *  // true
 * @example
 *  type X = IsLiteral<3n, bigint>
 *  // true
 * @example
 *  type X = IsLiteral<false>
 *  // true
 * @example
 *  type X = IsLiteral<true, boolean>
 *  // true
 * @example
 *  type X = IsLiteral<3>
 *  // true
 * @example
 *  type X = IsLiteral<3, number>
 *  // true
 * @example
 *  type X = IsLiteral<'msg'>
 *  // true
 * @example
 *  type X = IsLiteral<'msg', string>
 *  // true
 * @example
 *  type X = IsLiteral<NIL>
 *  // true
 * @example
 *  type X = IsLiteral<Primitive>
 *  // boolean
 * @example
 *  type X = IsLiteral<NonNullable<Primitive>>
 *  // false
 * @example
 *  type X = IsLiteral<3 & { id: string }>
 *  // false
 * @example
 *  type X = IsLiteral<any>
 *  // false
 * @example
 *  type X = IsLiteral<never>
 *  // false
 * @example
 *  type X = IsLiteral<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 * @template P - Primitive value type
 */
type IsLiteral<T, P extends Primitive = Primitive> = LiteralCheck<T, P>

export type { IsLiteral as default }
