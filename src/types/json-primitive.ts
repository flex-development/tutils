/**
 * @file Type Definitions - JsonPrimitive
 * @module tutils/types/JsonPrimitive
 */

import type Nullable from './nullable'
import type NumberString from './number-string'

/**
 * Type representing any [primitive][1] [`JSON` value][2].
 *
 * [1]: https://developer.mozilla.org/docs/Glossary/Primitive
 * [2]: https://restfulapi.net/json-data-types
 */
type JsonPrimitive = Nullable<NumberString | boolean>

export type { JsonPrimitive as default }
