/**
 * @file Type Definitions - OrLowercase
 * @module tutils/types/OrLowercase
 */

/**
 * Constructs a union of `T` and its lowercase alternatives.
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#lowercasestringtype
 *
 * @example
 *  type X = OrLowercase<'AND'>
 *  // 'AND' | 'and'
 * @example
 *  type X = OrLowercase<'CRLF' | 'LF'>
 *  // 'CRLF' | 'LF' | 'crlf' | 'lf'
 *
 * @template T - Type to evaluate
 */
type OrLowercase<T extends string> = Lowercase<T> | T

export type { OrLowercase as default }
