/**
 * @file Type Definitions - IfLiteral
 * @module tutils/types/IfLiteral
 */

import type IsLiteral from './is-literal'
import type Primitive from './primitive'

/**
 * Returns a type that indicates if `T` is a literal type.
 *
 * @see {@linkcode IsLiteral}
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
 *
 * @template T - Type to evaluate
 * @template P - Primitive value type
 * @template True - Type if `T` is a literal type
 * @template False - Type if `T` is not a literal type
 */
type IfLiteral<T, P extends Primitive, True, False> = IsLiteral<
  T,
  P
> extends true
  ? True
  : False

export type { IfLiteral as default }
