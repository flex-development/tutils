/**
 * @file Type Definitions - OrUppercase
 * @module tutils/types/OrUppercase
 */

/**
 * Adds uppercase alternatives to `T`.
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uppercasestringtype
 *
 * @template T - String type
 */
type OrUppercase<T extends string> = T | Uppercase<T>

export type { OrUppercase as default }
