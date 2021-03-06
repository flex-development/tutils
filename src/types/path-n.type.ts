/**
 * @file Type Definitions - PathN
 * @module tutils/types/PathN
 */

import type Join from './join.type'
import type ObjectPlain from './object-plain.type'

/**
 * Constructs a union type of properties nested under `T[K]`.
 *
 * @see https://github.com/ghoullier/awesome-template-literal-types#dot-notation-string-type-safe
 *
 * @template T - Object type
 * @template K - Key containing nested properties
 */
type PathN<T extends ObjectPlain, K extends keyof T> = K extends string
  ? T[K] extends ObjectPlain ? 
    | Join<K, Exclude<keyof T[K], keyof any[]> & string, '.'>
    | Join<K, PathN<T[K], Exclude<keyof T[K], keyof any[]>> & string, '.'>
  : never
  : never

export default PathN
