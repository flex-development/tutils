/**
 * @file Type Definitions - Primitive
 * @module tutils/types/Primitive
 */

import type JsonPrimitive from './json-primitive'
import type Optional from './optional'

/**
 * Any [primitive][1] value.
 *
 * [1]: https://developer.mozilla.org/docs/Glossary/Primitive
 */
type Primitive = Optional<JsonPrimitive | bigint | symbol>

export type { Primitive as default }
