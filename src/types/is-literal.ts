/**
 * @file Type Definitions - IsLiteral
 * @module tutils/types/IsLiteral
 */

import type IfBoolean from './if-boolean'
import type IfFalse from './if-false'
import type IfNever from './if-never'
import type IfTrue from './if-true'
import type IsNull from './is-null'
import type IsUndefined from './is-undefined'
import type Primitive from './primitive'

/**
 * Returns a boolean indicating if `T` is a literal type.
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
 *
 * @example
 *  type X = IsLiteral<1>                   // true
 * @example
 *  type X = IsLiteral<3, number>           // true
 * @example
 *  type X = IsLiteral<null | undefined>    // true
 * @example
 *  type X = IsLiteral<number>              // false
 *
 * @template T - Type to evaluate
 * @template P - Primitive value type
 */
type IsLiteral<T, P extends Primitive = Primitive> = IfNever<
  T,
  false,
  [T] extends [P]
    ? [P] extends [T]
      ? [null] extends [P]
        ? IsNull<T>
        : [undefined] extends [P]
        ? IsUndefined<T>
        : false
      : IfNever<
          Extract<NonNullable<Primitive>, T>,
          true,
          IfBoolean<P, IfFalse<T, true, IfTrue<T, T, false>>, false>
        >
    : false
>

export type { IsLiteral as default }
