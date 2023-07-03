/**
 * @file Type Definitions - OrUppercase
 * @module tutils/types/OrUppercase
 */

/**
 * Constructs a union of `T` and its uppercase alternatives.
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uppercasestringtype
 *
 * @example
 *  type X = OrUppercase<'and'>
 *  // 'AND' | 'and'
 * @example
 *  type X = OrUppercase<'crlf' | 'lf'>
 *  // 'CRLF' | 'LF' | 'crlf' | 'lf'
 *
 * @template T - Type to evaluate
 */
type OrUppercase<T extends string> = T | Uppercase<T>

export type { OrUppercase as default }
