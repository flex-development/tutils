/**
 * @file Type Definitions - PathNT
 * @module tutils/types/PathNT
 */

import type ObjectPlain from './object-plain'
import type PathN from './path-n'

/**
 * Constructs a union type of nested and top level properties of `T`.
 *
 * @see https://github.com/ghoullier/awesome-template-literal-types#dot-notation-string-type-safe
 *
 * @template T - Object type
 */
type PathNT<T extends ObjectPlain> = PathN<T, keyof T> | keyof T

export { type PathNT as default }
