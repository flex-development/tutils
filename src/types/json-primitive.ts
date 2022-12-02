/**
 * @file Type Definitions - JsonPrimitive
 * @module tutils/types/JsonPrimitive
 */

/**
 * Type representing any [primitive][1] [JSON value][2].
 *
 * [1]: https://developer.mozilla.org/docs/Glossary/Primitive
 * [2]: https://restfulapi.net/json-data-types
 */
type JsonPrimitive = boolean | number | string | null

export type { JsonPrimitive as default }
