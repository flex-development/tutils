/**
 * @file Type Definitions - Primitive
 * @module tutils/types/Primitive
 */

import type JSONPrimitive from './json-primitive.type'

/**
 * Type representing any [primitive][1] value.
 *
 * [1]: https://developer.mozilla.org/docs/Glossary/Primitive
 */
type Primitive = JSONPrimitive | bigint | symbol | undefined

export default Primitive
