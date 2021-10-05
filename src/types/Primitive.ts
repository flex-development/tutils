import type { JSONPrimitive } from './JSON'

/**
 * @file Type Definitions - Primitive
 * @module tutils/types/Primitive
 */

/**
 * Type representing any [primitive][1] value.
 *
 * [1]: https://developer.mozilla.org/docs/Glossary/Primitive
 */
export type Primitive = JSONPrimitive | bigint | symbol | undefined
