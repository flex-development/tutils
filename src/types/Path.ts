import type { ObjectPlain } from './ObjectPlain'

/**
 * @file Type Definitions - Path
 * @module tutils/types/Path
 */

/**
 * Constructs a union type consisting of nested and top level properties of `T`.
 *
 * Note that the type recurses **two levels (`foo.nested`)** deep.
 *
 * See: https://github.com/ghoullier/awesome-template-literal-types
 *
 * @template T - Object type
 */
export type Path<T extends ObjectPlain> = PathNT<T> extends string | keyof T
  ? PathNT<T>
  : keyof T

/**
 * Constructs a union type of properties nested under `T[K]`.
 *
 * See: https://github.com/ghoullier/awesome-template-literal-types#dot-notation-string-type-safe
 *
 * @template T - Object type
 * @template K - Key containing nested properties
 */
export type PathN<T extends ObjectPlain, K extends keyof T> = K extends string
  ? T[K] extends ObjectPlain
    ?
        | `${K}.${PathN<T[K], Exclude<keyof T[K], keyof any[]>> & string}`
        | `${K}.${Exclude<keyof T[K], keyof any[]> & string}`
    : never
  : never

/**
 * Constructs a union type of nested and top level properties of `T`.
 *
 * See: https://github.com/ghoullier/awesome-template-literal-types#dot-notation-string-type-safe
 *
 * @template T - Object type
 */
export type PathNT<T extends ObjectPlain> = PathN<T, keyof T> | keyof T
