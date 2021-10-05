import type ObjectPlain from './object-plain.type'
import type Path from './path.type'

/**
 * @file Type Definitions - PathValue
 * @module tutils/types/PathValue
 */

/**
 * Constructs a type representing a property value of `T`.
 *
 * See: https://github.com/ghoullier/awesome-template-literal-types#dot-notation-string-type-safe
 *
 * @template T - Object type
 * @template P - Object path (dot notation friendly)
 */
type PathValue<
  T extends ObjectPlain,
  P extends Path<T> = Path<T>
> = P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? Rest extends Path<T[Key]>
      ? PathValue<T[Key], Rest>
      : never
    : never
  : P extends keyof T
  ? T[P]
  : never

export default PathValue
