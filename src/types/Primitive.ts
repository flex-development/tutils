import type { JSONPrimitive } from './JSON'

/**
 * @file Types - Primitive
 * @module types/Primitive
 */

/**
 * Type representing any [primitive][1] value.
 *
 * [1]: https://developer.mozilla.org/docs/Glossary/Primitive
 */
export type Primitive = JSONPrimitive | bigint | symbol | undefined
