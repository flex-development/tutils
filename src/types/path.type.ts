/**
 * @file Type Definitions - Path
 * @module tutils/types/Path
 */

import type ObjectPlain from './object-plain.type'
import type PathNT from './path-nt.type'

/**
 * Constructs a union type of nested and top level properties of `T`.
 *
 * **Note**: This type recurses **two levels (`foo.nested`)** deep.
 *
 * @see https://github.com/ghoullier/awesome-template-literal-types
 *
 * @template T - Object type
 */
type Path<T extends ObjectPlain> = PathNT<T> extends string | keyof T
  ? PathNT<T>
  : keyof T

export { type Path as default }
