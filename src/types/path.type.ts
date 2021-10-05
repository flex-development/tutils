import type ObjectPlain from './object-plain.type'
import type PathNT from './path-nt.type'

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
type Path<T extends ObjectPlain> = PathNT<T> extends string | keyof T
  ? PathNT<T>
  : keyof T

export default Path
