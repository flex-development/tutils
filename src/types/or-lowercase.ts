/**
 * @file Type Definitions - OrLowercase
 * @module tutils/types/OrLowercase
 */

/**
 * Adds lowercase alternatives to `T`.
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#lowercasestringtype
 *
 * @template T - String type
 */
type OrLowercase<T extends string> = Lowercase<T> | T

export type { OrLowercase as default }
